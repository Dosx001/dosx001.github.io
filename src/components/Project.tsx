interface Proj {
  github: string;
  title: string;
  what: string;
  why: string;
  how: string;
  abandoned?: string;
}

const Project = ({ title, github, what, why, how, abandoned }: Proj) => (
  <div className="post">
    <h1 id="title">{title}</h1>
    <h2 id="source">Source Code and Documentation</h2>
    <a href={github}>{github}</a>
    <h2 id="what">What</h2>
    <p>{what}</p>
    <h2 id="why">Why</h2>
    <p>{why}</p>
    <h2 id="how">How</h2>
    <p>{how}</p>
    {abandoned && (
      <>
        <h2 id="abandoned">Abandoned</h2>
        <p>{abandoned}</p>
      </>
    )}
  </div>
);

export default Project;
