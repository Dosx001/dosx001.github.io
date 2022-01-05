import { useState } from 'react';
import Project from 'components/Project';
import ProjectSelector from 'components/ProjectSelector';
import { projs } from 'const/Projects';

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
