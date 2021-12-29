const Home = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Welcome to my website, build using React and hosted by GitHub pages. This site is
        designed to introduce myself by showcasing my background and interests.
        So have a look around and get to know me.
      </p>
      <h1>About Me</h1>
      <p>
        Hello, my name is Andres Rodriguez Michel. I am a Cal Poly graduate with a bachelor in
        Physics. I currently looking for work in software related fields.
      </p>
      <h1>GitHub Stats</h1>
      <iframe title="a" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dosx001&langs_count=10&layout=compact&title_color=fff&text_color=00e7ff&bg_color=151515"/>
      <iframe title="b" src="https://github-readme-stats.vercel.app/api/?username=Dosx001&count_private=true&include_all_commits=true&show_icons=true&title_color=fff&icon_color=00e7ff&text_color=9f9f9f&bg_color=151515"/>
      <iframe title="c" src="https://github-readme-streak-stats.herokuapp.com/?user=Dosx001&theme=black-ice"/>
    </>
  );
}

export default Home;
