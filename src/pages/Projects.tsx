import Project from 'components/Project';
import ProjectSelector from 'components/ProjectSelector';
import { projs } from 'const/Projects';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Projects = () => {
  const { route } = useParams() as {
    route: string;
  }
  let index = parseInt(route) - 1
  const props = {
    index: index,
    length: projs.length
  }
  let proj = projs[index]
  if (proj) return (
    <>
      <ProjectSelector {...props}/>
      <Project {...proj}/>
      <ProjectSelector {...props}/>
    </>
  )
  index = projs.findIndex(proj => proj.url === route)
  props.index = index
  proj = projs[index]
  if (proj) return (
    <>
      <ProjectSelector {...props}/>
      <Project {...proj}/>
      <ProjectSelector {...props}/>
    </>
  )
  return <NotFound/>
}

export default Projects;
