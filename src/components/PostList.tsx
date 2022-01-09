import './PostList.scss';

interface Content {
  tag: string,
  inner?: string,
  title?: string,
  src?: string,
  className?: string
}

interface Posts {
  posts: {
    title: string,
    content: Content[]
  }[]
}

const PostList = (props: Posts) => {
  const postIt = (content: Content, index: number) => {
    switch (content.tag) {
       case "p":
        return <p key={index}>{content.inner}</p>
       case "img":
         return <img key={index} src={content.src}/>
    }
    return ""
  }
  return(
    <>
      {props.posts.map((post, i) => (
        <div className="post" key={i}>
          <h1>{post.title}</h1>
          {post.content.map((content, j) => (
              postIt(content, j)
          ))}
        </div>
      ))}
    </>
  )
}

export default PostList;
