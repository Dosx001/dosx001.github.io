import PostList from '../components/PostList';

const Education = () => {
  const posts = [
    { key: 1, title: "California Polytechnic State University", img: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Cal_Poly_Mustangs_logo.svg/1920px-Cal_Poly_Mustangs_logo.svg.png"},
    { key: 2, title: "Woodrow Wilson High School", img: "https://www.paulrwilliamsproject.org/site_files/images/Woodrow_Wilson_High_001_2_3_4_5_fused.jpg"}
  ];
  return (
    <PostList posts={posts}/>
  );
}

export default Education;
