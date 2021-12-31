import './PostList.scss';

interface Posts {
  posts: {
    key: number,
    title: string,
    body: string
  }[]
}

const PostList = (props:Posts) => {
  return(
    <>
      {props.posts.map(post => (
        <div className="post" key={post.key}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default PostList;
