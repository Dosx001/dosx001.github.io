import './PostList.scss';

interface Posts {
  posts: {
    key: number,
    title: string,
    body?: string,
    img?: string,
    imgs?: string[]
  }[]
}

const PostList = (props:Posts) => {
  return(
    <>
      {props.posts.map(post => (
        <div className="post" key={post.key}>
          <h1>{post.title}</h1>
          {post.img &&
            <img src={post.img} alt=""/>
          }
          <p>{post.body}</p>
        </div>
      ))}
    </>
  )
}

export default PostList;
