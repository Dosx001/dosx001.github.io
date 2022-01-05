import ImageSlider from 'components/ImageSlider';
import { imgs } from 'const/Education';

const Education = () => {
  return (
    <>
      <div className="post">
        <h1>California Polytechnic State University</h1>
        <h2>Beamforming Elevated Array for COsmic Neutrinos (BEACON)</h2>
        <ImageSlider imgs={imgs.beacon}/>
        <h2>Imagen y Espíritu Ballet Folklórico de Cal Poly</h2>
        <ImageSlider imgs={imgs.folk}/>
        <h2>Chess Club</h2>
        <ImageSlider imgs={imgs.chess}/>
        <h2>MEXA</h2>
        <ImageSlider imgs={imgs.mexa}/>
      </div>
      <div className="post">
        <h1>Woodrow Wilson High School</h1>
        <h2>AVID</h2>
        <ImageSlider imgs={imgs.avid}/>
        <h2>Student Run Los Angeles</h2>
        <ImageSlider imgs={imgs.srla}/>
        <h2>Science Club</h2>
        <ImageSlider imgs={imgs.sci}/>
      </div>
    </>
  );
}

export default Education;
