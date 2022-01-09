import { useState } from "react";
import './ImageSlider.scss';

interface Imgs {
  imgs: string[]
}

const ImageSlider = ({imgs}: Imgs) => {
  const [current, setCurrent] = useState(0);
  const length = imgs.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className='slider'>
      <div>
        <button onClick={prevImg}>
          <svg viewBox="0 0 30 30">
            <path d="M22 8l-13 7l13 7"/>
          </svg>
        </button>
        <span>{current + 1} of {length}</span>
        <button onClick={nextImg}>
          <svg viewBox="0 0 30 30">
            <path d="M8 8l13 7l-13 7"/>
          </svg>
        </button>
      </div>
      {imgs.map((img, index) => {
        return (
          <div key={index}>
            {index === current && (<img src={img}/>)}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
