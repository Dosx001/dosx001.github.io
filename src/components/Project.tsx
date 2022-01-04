interface Proj {
  github: string
  title: string
  what: string
  why: string
  how: string
  abandoned?: string
}

const Project = ({title, github, what, why, how, abandoned}: Proj) => {
  return(
    <div className="post">
      <h1>{title}</h1>
      <h2>Source Code and Documentation</h2>
      <a href={github}>{github}</a>
      <h2>What</h2>
      <p>{what}</p>
      <h2>Why</h2>
      <p>{why}</p>
      <h2>How</h2>
      <p>{how}</p>
      {abandoned &&
        <>
          <h2>Abandoned</h2>
          <p>{abandoned}</p>
        </>
      }
    </div>
  )
}

export default Project;
