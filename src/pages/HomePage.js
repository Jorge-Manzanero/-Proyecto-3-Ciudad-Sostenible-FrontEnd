import { ErrorMessage } from "../components/ErrorMessage";
import { PostList } from "../components/PostList";
import usePosts from "../hooks/usePosts";

export const HomePage = () => {
  const { posts, error, uploadPost, removePost } = usePosts();

  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="homepageH1">Lastests Posts</h1>
      <p className="homepageparragraf">
        Welcome to our page, here you can find the lastests news about th
        accesibility problems in yours city
      </p>
      <PostList posts={posts} uploadPost={uploadPost} removePost={removePost} />
    </section>
  );
};
