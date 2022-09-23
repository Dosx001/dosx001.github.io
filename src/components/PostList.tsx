import { ReactElement } from 'react';
import './PostList.scss';
import ToC from './ToC';

interface Posts {
  posts: {
    title: string;
    id: string;
    content: ReactElement[];
  }[];
}

const PostsList = (props: Posts) => {
  const { posts } = props;
  return (
    <>
      <ToC />
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h1>{post.title}</h1>
          {post.content.map((ele) => ele)}
        </div>
      ))}
    </>
  );
};

export default PostsList;
