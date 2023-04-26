import { useParams } from "react-router-dom";
import { usePost } from "../hooks/usePost";
import { ErrorMessage } from "../components/ErrorMessage";
import { Post } from "../components/Post";

export const PostPage = () => {
  const { id } = useParams();

  const { post, loading, error } = usePost(id);

  if (loading) return <p>Cargando Post...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <Post post={post} />
    </section>
  );
};
