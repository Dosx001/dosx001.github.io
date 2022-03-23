import Project from 'components/Project';
import ProjectSelector from 'components/ProjectSelector';
import ToC from 'components/ToC';
import projs from 'const/Projects';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Projects = () => {
  const { route } = useParams() as {
    route: string;
  };
  let index = Number(route) - 1;
  let proj = projs[index];
  if (proj === undefined) {
    index = projs.findIndex((pro) => pro.url === route);
    proj = projs[index];
  }
  if (proj) {
    return (
      <>
        <ToC />
        <ProjectSelector index={index} length={projs.length} />
        <Project {...proj} />
        <ProjectSelector index={index} length={projs.length} />
      </>
    );
  }
  return <NotFound />;
};

export default Projects;
