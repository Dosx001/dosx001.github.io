import Project from 'components/Project';
import { projs } from 'const/Projects';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Projects = () => {
  const { route } = useParams() as {
    route: string;
  }
  let proj = projs[parseInt(route) - 1]
  if (proj) return (
    <Project {...proj}/>
  )
  proj = projs.find(proj => proj.url === route)
  if (proj) return (
    <Project {...proj}/>
  )
  return <NotFound/>
}

export default Projects;
