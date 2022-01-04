import ImageSlider from '../components/ImageSlider';

const Education = () => {
  const imgs = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1920px-Cal_Poly_Mustangs_logo.svg.png",
    "https://www.paulrwilliamsproject.org/site_files/images/Woodrow_Wilson_High_001_2_3_4_5_fused.jpg"
  ]
  return (
    <div className="post">
      <h1>School</h1>
      <ImageSlider imgs={imgs}/>
    </div>
  );
}

export default Education;
