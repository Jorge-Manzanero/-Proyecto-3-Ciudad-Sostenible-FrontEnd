import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendPostService } from "../services";

export const NewPost = ({ addPost }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);

      const post = await sendPostService({ data, token });

      addPost(post);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="newpostitle">Add new Post</h1>
      <form className="new-post" onSubmit={handleForm}>
        <fieldset className="title">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
        </fieldset>
        <fieldset className="barrio">
          <label htmlFor="barrio">Barrio</label>
          <input type="text" name="barrio" id="barrio" required />
        </fieldset>
        <fieldset className="text">
          <label htmlFor="text">Text</label>
          <textarea type="text" name="text" id="text" required />
        </fieldset>
        <fieldset className="photo">
          <label className="photo1" htmlFor="photo">
            IMAGE
          </label>
          <input
            type="file"
            name="photo"
            id="photo"
            accept={"photo/*"}
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image ? (
            <figure>
              <img
                src={URL.createObjectURL(image)}
                style={{ width: "500px" }}
                alt="Preview"
              />
            </figure>
          ) : null}
        </fieldset>
        <button>Send post</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting...</p> : null}
      </form>
    </>
  );
};
