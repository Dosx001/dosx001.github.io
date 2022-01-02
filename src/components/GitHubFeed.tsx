import { useEffect, useState } from 'react';
import './GitHubFeed.scss'

interface git {
  id: string,
  type: string,
  repo: {
    name: string
  },
  payload: {
    commits: [],
    issue: {
      url: string
    }
  }
  created_at: string
}

const GitHubFeed = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState([]);

  const formatDate = (datetime:string) => {
    let date = new Date(datetime)
    let min: number|string = date.getMinutes();
    if (min < 10) min = "0" + min.toString();
    let hour: number = date.getHours() + 1;
    let time = 12 < hour ?
      `${hour - 12}:${min} PM`:
      `${hour}:${min} AM`
    return `Date: ${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() - 2000} Time: ${time}`
  }

  const eventType = (event:string) => {
    return { "CommitCommentEvent": "Commit Comment Event",
    "CreateEvent": "Create Event",
    "DeleteEvent": "Delete Event",
    "ForkEvent": "Fork Event",
    "GollumEvent": "Gollum Event",
    "IssueCommentEvent": "Issue Comment Event",
    "IssuesEvent": "Issues Event",
    "MemberEvent": "Member Event",
    "PublicEvent": "Public Event",
    "PullRequestEvent": "PR Event",
    "PullRequestReviewEvent": "PR Review Event",
    "PullRequestReviewCommentEvent": "PR Review Comment Event",
    "PushEvent": "Push Event",
    "ReleaseEvent": "Release Event",
    "SponsorshipEvent": "Sponsorship Event",
    "WatchEvent": "Watch Event",
    }[event]
  }

  const repoUrl = (event:git) => {
    if (event.type.includes("Issue")) {
      return `https://github.com${event.payload.issue.url.substring(28)}`
    }
    return `https://github.com/${event.repo.name}`
  }

  const fetcher = () => {
    fetch("https://api.github.com/users/Dosx001/events")
    .then(res => res.json())
    .then(data => {
        setIsLoaded(true);
        setEvents(data);
      },
      error => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }

  useEffect(() => {
    fetcher()
    const interval = setInterval(() => {
      fetcher()
    }, 60000);
    return () => clearInterval(interval);
  }, [])

  if (error) {
    return(
      <aside id="git">
        Error: {error}
      </aside>
    )
  } else if (!isLoaded) {
    return(
      <aside id="git">Loading...</aside>
    )
  } else {
    return(
      <aside id='git'>
        <h2>
          <svg viewBox="0 0 16 16" width="32" height="32">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub Live Feed
        </h2>
        <div id="scroll">
        {events.map((event:git) => (
          <div key={event.id}>
            <div className="event">{eventType(event.type)}</div>
            <a href={repoUrl(event)} target="_blank" rel="noreferrer">
              {event.repo.name}
            </a>
            <div className="datetime">{formatDate(event.created_at)}</div>
          </div>
        ))
        }</div>
      </aside>
    )
  }
}

export default GitHubFeed;
