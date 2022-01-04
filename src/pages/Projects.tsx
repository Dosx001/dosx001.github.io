import Project from '../components/Project';

const proj = {
  github: 'https://github.com/Dosx001/dosx001.github.io/',
  title: 'Dosx001.github.io',
  what: 'words',
  why: 'words',
  how: 'words',
}
const Projects = () => {
  return (
    <Project {...proj}/>
  );
}

export default Projects;
