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

  return (
    <div className="buttons">
      <button onClick={prevProj}>
        <svg viewBox="0 0 30 30">
          <path d="M22 8l-13 7l13 7"/>
        </svg>
      </button>
      <button onClick={nextProj}>
        <svg viewBox="0 0 30 30">
          <path d="M8 8l13 7l-13 7"/>
        </svg>
      </button>
    </div>
  )
}

export default ProjectSelector;
