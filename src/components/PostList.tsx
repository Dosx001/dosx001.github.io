import './PostList.scss';
import ImageSlider from './ImageSlider';
import ToC from './ToC';

interface Content {
  tag: string;
  id?: string;
  inner?: string;
  title?: string;
  src?: string;
  href?: string;
  className?: string;
  imgs?: string[];
}

interface Posts {
  posts: {
    title: string;
    id: string;
    content: Content[];
  }[];
}

const PostList = (props: Posts) => {
  const postIt = (content: Content, index: number) => {
    switch (content.tag) {
      case 'a':
        return (
          <a key={index} href={content.href}>
            {content.inner}
          </a>
        );
      case 'p':
        return <p key={index}>{content.inner}</p>;
      case 'img':
        return <img key={index} src={content.src} alt="" />;
      case 'h2':
        return (
          <h2 key={index} id={content.id}>
            {content.inner}
          </h2>
        );
      case 'slider':
        return <ImageSlider key={index} imgs={content.imgs!} />;
      default:
    }
    return '';
  };
  return (
    <>
      <ToC />
      {props.posts.map((post, i) => (
        <div className="post" key={i}>
          <h1 id={post.id}>{post.title}</h1>
          {post.content.map((content, j) => postIt(content, j))}
        </div>
      ))}
    </>
  );
};

export default PostList;
