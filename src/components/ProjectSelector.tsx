import './ProjectSelector.scss';
import { useNavigate } from 'react-router-dom';


const ProjectSelector = ({index, length}: {index: number, length: number}) => {
  const navigate = useNavigate();

  const nextProj = () => {
    navigate(`../projects/${index === length - 1 ? 1 : index + 2}`)
  };

  const prevProj = () => {
    navigate(`../projects/${index === 0 ? length : index }`)
  };

  const chProj = (e:React.MouseEvent<HTMLButtonElement>) => {
    navigate(`../projects/${parseInt((e.target as HTMLButtonElement).innerText)}`)
  }

  const buttons = () => {
    let btns = [];
    for (let i = 0; i < length; i++)
      btns.push(
        <button onClick={chProj} className={index === i ? 'proj' : ''} key={i}>{i + 1}</button>
      )
    return btns
  }

  return (
    <div className="buttons">
      <button onClick={prevProj}>
        <svg viewBox="0 0 30 30">
          <path d="M22 8l-13 7l13 7"/>
        </svg>
      </button>
      { buttons() }
      <button onClick={nextProj}>
        <svg viewBox="0 0 30 30">
          <path d="M8 8l13 7l-13 7"/>
        </svg>
      </button>
    </div>
  )
}

export default ProjectSelector;
