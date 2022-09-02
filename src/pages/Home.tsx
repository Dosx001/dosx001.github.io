import PostList from 'components/PostList';

const Home = () => {
  const posts = [
    {
      title: 'Welcome!',
      id: 'welcome',
      content: [
        <p>
          Welcome to my website, build using React and hosted by GitHub pages.
          This site is relatively new and still a work in progress. I designed
          this site to introduce myself by showcasing my background, interests,
          and projects. So have a look around and get to know me.
        </p>,
      ],
    },
    {
      title: 'About Me',
      id: 'about-me',
      content: [
        <p>
          Hello, my name is Andres Rodriguez Michel. I am a Cal Poly graduate
          with a bachelor in Physics. During my senior year I took a few
          computer science courses and fell in love with programming. My
          passionate for programming soon thrust into the world of Vim and
          Linux. Since then I have teaching myself various of technologies and
          creating a multitude of projects. You can checkout these projects on
          my
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Dosx001/"
          >
            {' '}
            GitHub{' '}
          </a>
          or here at
          <a href="https://dosx001.github.io/projects/1">
            {' '}
            dosx001.github.io/projects
          </a>
          . I am currently working at BAE Systems as a software engineer and
          exploring different career paths in software engineering.
        </p>,
      ],
    },
    {
      title: 'Quotes',
      id: 'quotes',
      content: [
        <p>
          Here are some of things some people have said to me and I remember
          them for long time.
        </p>,
        <br />,
        <div className="quote">
          &quot;You don&apos;t like how a seat belt feels, and you build a whole
          car with a new seat belt.&quot;
          <div>-Long time friend</div>
        </div>,
        <div className="quote">
          &quot;How do you know all of this... Oh, you&apos;re a nerd.&quot;
          <div>-University professor</div>
        </div>,
        <div className="quote">
          &quot;You&apos;re a nice asshole.&quot;
          <div>-Close friend</div>
        </div>,
      ],
    },
    {
      title: 'GitHub Stats',
      id: 'github-stats',
      content: [
        <img
          title="Languages"
          alt="Languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dosx001&langs_count=10&layout=compact&title_color=a9a9a9&text_color=a9a9a9&bg_color=000000&border_color=808080"
        />,
        <img
          title="Stats"
          alt="Stats"
          src="https://github-readme-stats.vercel.app/api/?username=Dosx001&count_private=true&include_all_commits=true&show_icons=true&title_color=a9a9a9&icon_color=00e7ff&text_color=9f9f9f&bg_color=000000&border_color=808080"
        />,
        <img
          title="Streak"
          alt="Streak"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Dosx001&theme=black-ice&currStreakNum=9a9a9a&sideNums=9a9a9a&sideLabels=9a9a9a&stroke=9a9a9a&background=000000&border=808080"
        />,
      ],
    },
  ];
  return <PostList posts={posts} />;
};

export default Home;
