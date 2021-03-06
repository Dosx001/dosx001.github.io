import PostList from 'components/PostList';

const Interests = () => {
  const posts = [
    {
      title: 'Programming',
      id: 'programming',
      content: [<p>words...</p>],
    },
    {
      title: 'Vim',
      id: 'vim',
      content: [<p>words...</p>],
    },
    {
      title: 'Linux',
      id: 'linux',
      content: [<p>words...</p>],
    },
    {
      title: 'Anime',
      id: 'anime',
      content: [<p>words...</p>],
    },
    {
      title: 'Gaming',
      id: 'gaming',
      content: [<p>words...</p>],
    },
  ];
  return <PostList posts={posts} />;
};

export default Interests;
