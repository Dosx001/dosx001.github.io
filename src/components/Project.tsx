import { ReactElement } from "react";

interface Proj {
  github: string;
  title: string;
  what: ReactElement;
  why: ReactElement;
  how: ReactElement;
  abandoned?: ReactElement;
}

const Project = ({ title, github, what, why, how, abandoned }: Proj) => (
  <div className="post">
    <h1 id="title">{title}</h1>
    <h2 id="source">Source Code and Documentation</h2>
    <p><a href={github}>{github}</a></p>
    <h2 id="what">What</h2>
    {what}
    <h2 id="why">Why</h2>
    {why}
    <h2 id="how">How</h2>
    {how}
    {abandoned && (
      <>
        <h2 id="abandoned">Abandoned</h2>
        {abandoned}
      </>
    )}
  </div>
);

Project.defaultProps = {
  abandoned: null
}

export default Project;
