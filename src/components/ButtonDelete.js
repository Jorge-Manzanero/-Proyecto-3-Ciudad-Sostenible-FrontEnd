import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deletePostService } from "../services";

export const ButtonDelete = ({ post, removePost }) => {
  const { token } = useContext(AuthContext);
  const [, setError] = useState("");
  const handleClick = async () => {
    try {
      await deletePostService(post.id, { token });
      await removePost(post.id);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="deleteButton">
      <button
        onClick={() => {
          if (
            window.confirm("This will delete the actual post. Are your sure?")
          )
            handleClick();
        }}
      >
        Click to Delete
      </button>
    </div>
  );
};
