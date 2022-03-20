export const posts = [
  {
    title: 'Welcome!',
    id: 'welcome',
    content: [
      {
        tag: 'p',
        inner:
          'Welcome to my website, build using React and hosted by GitHub pages. This site is\
          relatively new and still a work in progress. I designed this site to\
          introduce myself by showcasing my background and interests. So have a\
          look around and get to know me.',
      },
    ],
  },
  {
    title: 'About Me',
    id: 'about-me',
    content: [
      {
        tag: 'p',
        inner:
          'Hello, my name is Andres Rodriguez Michel. I am a Cal Poly graduate with a\
          bachelor in Physics. During my senior year I took a few computer science courses and\
          fell in love with programming. My passionate for programming soon thrust into the world\
          of Vim and Linux. Since then I have teaching myself various of technologies and creating\
          a multitude of projects. You can checkout these projects on my GitHub or here at',
      },
      {
        tag: 'a',
        href: 'https://dosx001.github.io/projects',
        inner: 'dosx001.github.io/projects',
      },
      {
        tag: 'p',
        inner: 'I am currently looking for work in software related fields.',
      },
    ],
  },
  {
    title: 'GitHub Stats',
    id: 'github-stats',
    content: [
      {
        tag: 'img',
        title: 'Languages',
        src: 'https://github-readme-stats.vercel.app/api/top-langs/?username=Dosx001&langs_count=10&layout=compact&title_color=a9a9a9&text_color=a9a9a9&bg_color=000000&border_color=808080',
      },
      {
        tag: 'img',
        title: 'Stats',
        src: 'https://github-readme-stats.vercel.app/api/?username=Dosx001&count_private=true&include_all_commits=true&show_icons=true&title_color=a9a9a9&icon_color=00e7ff&text_color=9f9f9f&bg_color=000000&border_color=808080',
      },
      {
        tag: 'img',
        title: 'Streak',
        src: 'https://github-readme-streak-stats.herokuapp.com/?user=Dosx001&theme=black-ice&currStreakNum=9a9a9a&sideNums=9a9a9a&sideLabels=9a9a9a&stroke=9a9a9a&background=000000&border=808080',
      },
    ],
  },
];
