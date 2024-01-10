import P from 'prop-types';
import { PostCard } from '../PostCard';

// eslint-disable-next-line react/prop-types
export const Posts = ({ posts = [] }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <div className="posts">
    {posts.map(post => (
      // eslint-disable-next-line react/react-in-jsx-scope
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover}
      />
    ))}
  </div>
);
Posts.propTypes = {
  posts: P.array,

}
