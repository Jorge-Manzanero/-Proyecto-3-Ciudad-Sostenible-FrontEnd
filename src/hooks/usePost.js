import { useEffect, useState } from "react";
import { getOnePostService } from "../services";

export const usePost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const data = await getOnePostService(id);
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [id]);

  const addPost = (data) => {
    setPost([data, ...post]);
  };

  return { post, loading, error, addPost };
};
export default usePost;
