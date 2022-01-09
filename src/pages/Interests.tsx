import PostList from 'components/PostList';

const Interests = () => {
  const posts = [
    {
      title: "Programming",
      content: [
        {
          tag: "p",
          inner: "words..."
        }
    ]
    },
    {
      title: "Vim",
      content: [
        {
          tag: "p",
          inner: "words..."
        }
    ]
    },
    {
      title: "Linux",
      content: [
        {
          tag: "p",
          inner: "words..."
        }
    ]
    },
    {
      title: "Anime",
      content: [
        {
          tag: "p",
          inner: "words..."
        }
    ]
    },
    {
      title: "Gaming",
      content: [
        {
          tag: "p",
          inner: "words..."
        }
    ]
    }
  ]
  return (
    <PostList posts={posts}/>
  );
}

export default Interests;
