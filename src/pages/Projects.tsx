import { useState } from 'react';
import Project from 'components/Project';
import ProjectSelector from 'components/ProjectSelector';

const projs = [
  {
    github: 'https://github.com/Dosx001/dosx001.github.io/',
    title: 'Dosx001.github.io',
    what: 'words',
    why: 'words',
    how: 'words',
  },
  {
    github: 'https://github.com/Dosx001/GitPrompt',
    title: 'Git Prompt',
    what: 'words',
    why: 'words',
    how: 'words',
  },
  {
    github: 'https://github.com/Dosx001/anime-calendar',
    title: 'AnimeCalendar.github.io',
    what: 'words',
    why: 'words',
    how: 'words',
  }
]

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const ProjSel = {
    current: current,
    setCurrent: setCurrent,
    length: projs.length
  }

  return (
    <>
      <ProjectSelector {...ProjSel}/>
      {projs.map((proj, index) => {
        return(
          <div key={index}>
            {index === current && (<Project {...proj}/>)}
          </div>
        )
      })}
      <ProjectSelector {...ProjSel}/>
    </>
  );
}

export default Projects;
