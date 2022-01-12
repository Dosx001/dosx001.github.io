import PostList from 'components/PostList';
import { posts } from 'const/Interests';

const Interests = () => {
  return (
    <PostList posts={posts}/>
  );
}

export default Interests;
