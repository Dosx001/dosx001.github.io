import PostList from 'components/PostList';

const Interests = () => {
  const posts = [
    {
      title: 'Programming',
      id: 'programming',
      content: [
        <figure>
          <figcaption>
            <a href="https://en.wikipedia.org/wiki/Fast_inverse_square_root">
              Fast Inverse Square Root
            </a>
          </figcaption>
          <img src="https://i.imgur.com/t871219.png" alt="" />
        </figure>,
        <iframe
          src="https://www.youtube.com/embed/soZyb6lMx4c"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
        <iframe
          src="https://www.youtube.com/embed/vjMZssWMweA"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      ],
    },
    {
      title: 'Vim',
      id: 'vim',
      content: [
        <ul>
          <li>
            <a href="https://wiki.archlinux.org/title/installation_guide">
              Learn Vimscript the Hard Way
            </a>
          </li>
          <li>
            <a href="https://vim.rtorr.com/">Vim Cheatsheet</a>
          </li>
        </ul>,
        <iframe
          src="https://www.youtube.com/embed/2ORWaIqyj7k"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
        <iframe
          src="https://www.youtube.com/embed/wlR5gYd6um0"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      ],
    },
    {
      title: 'Linux',
      id: 'linux',
      content: [
        <ul>
          <li>
            <a href="https://wiki.archlinux.org/title/installation_guide">
              Arch Linux Installation Guide
            </a>
          </li>
          <li>
            <a href="https://wiki.archlinux.org/title/General_recommendations">
              Arch Linux Post Installation
            </a>
          </li>
        </ul>,
        <iframe
          src="https://www.youtube.com/embed/tc4ROCJYbm0"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
        <iframe
          src="https://www.youtube.com/embed/upCemv2UaLc"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      ],
    },
    {
      title: 'Anime',
      id: 'anime',
      content: [
        <iframe
          src="https://www.youtube.com/embed/irNCs6pwPgM"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
        <iframe
          src="https://www.youtube.com/embed/MJmK5SOeQBc"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      ],
    },
    {
      title: 'Gaming',
      id: 'gaming',
      content: [
        <iframe
          src="https://www.youtube.com/embed/FgDmU7Pb96Y"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
        <iframe
          src="https://www.youtube.com/embed/VRyZoIWltfQ"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />,
      ],
    },
  ];
  return <PostList posts={posts} />;
};

export default Interests;
