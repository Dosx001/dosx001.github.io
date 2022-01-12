import './ProjectSelector.scss';
import { Dispatch, SetStateAction } from "react";

interface ProjSel {
  current: number,
  setCurrent: Dispatch<SetStateAction<number>>,
  length: number
}

const ProjectSelector = ({current, setCurrent, length}:ProjSel) => {
  const nextProj = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevProj = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const chProj = (e:React.MouseEvent<HTMLButtonElement>) => {
    setCurrent(parseInt((e.target as HTMLButtonElement).innerText) - 1)
  }

  const buttons = () => {
    let btns = [];
    for (let i = 0; i < length; i++)
      btns.push(
        <button onClick={chProj} className={current === i ? 'proj' : ''} key={i}>{i + 1}</button>
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