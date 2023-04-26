import { Post } from "./Post";

export const PostList = ({ posts, uploadPost, removePost }) => {
  return posts.length > 0 ? (
    <ul className="postlist">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} uploadPost={uploadPost} removePost={removePost} />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no posts yet...</p>
  );
};
