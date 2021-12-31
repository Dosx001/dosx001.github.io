import PostList from '../components/PostList';

const Home = () => {
  const posts = [
    { key: 1, title: "Welcome!", body: "Welcome to my website, build using React and hosted by GitHub pages. This site is designed to introduce myself by showcasing my background and interests. So have a look around and get to know me."},
    { key: 2, title: "About Me", body: "Hello, my name is Andres Rodriguez Michel. I am a Cal Poly graduate with a bachelor in Physics. I currently looking for work in software related fields."}
  ];
  return (
    <>
      <PostList posts={posts}/>
      <div className="post">
        <h1>GitHub Stats</h1>
        <iframe title="Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dosx001&langs_count=10&layout=compact&title_color=fff&text_color=00e7ff&bg_color=151515"/>
        <iframe title="Stats" src="https://github-readme-stats.vercel.app/api/?username=Dosx001&count_private=true&include_all_commits=true&show_icons=true&title_color=fff&icon_color=00e7ff&text_color=9f9f9f&bg_color=151515"/>
        <iframe title="Streak" src="https://github-readme-streak-stats.herokuapp.com/?user=Dosx001&theme=black-ice"/>
      </div>
    </>
  );
}

export default Home;
