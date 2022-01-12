import PostList from 'components/PostList';
import { posts } from 'const/Home';

const Home = () => {
  return (
    <PostList posts={posts}/>
  );
}

export default Home;
