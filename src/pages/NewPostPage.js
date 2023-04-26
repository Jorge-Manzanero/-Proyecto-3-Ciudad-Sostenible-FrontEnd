import usePosts from "../hooks/usePosts";
import { NewPost } from "../components/NewPost";
import { Loading } from "../components/Loading";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ErrorMessage } from "../components/ErrorMessage";

export const NewPostPage = () => {
  const { error, loading, addPost } = usePosts();
  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1 className="titleNP">This is the New Post Page</h1>
      {user ? <NewPost addPost={addPost} /> : null}
    </section>
  );
};
