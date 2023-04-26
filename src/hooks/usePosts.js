import { useEffect, useState } from "react";
import { getAllPostService } from "../services";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        <p>cargando post...</p>;
        const data = await getAllPostService();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const addPost = (data) => {
    setPosts([data, ...posts]);
  };

  const uploadPost = async () => {
    const data = await getAllPostService();
    setPosts(data);
  };

  const removePost = async (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return { posts, loading, error, addPost, uploadPost, removePost };
};

export default usePosts;
