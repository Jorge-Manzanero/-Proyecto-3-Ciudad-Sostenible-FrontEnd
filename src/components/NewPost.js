import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendPostService } from "../services";

export const NewPost = ({ addPost }) => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = new FormData(e.target);

      const post = await sendPostService({ data, token });

      addPost(post);

      e.target.reset();
      setImage(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };
  return (
    <>
      <h1>Add new Post</h1>
      <form className="new-post" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" required />
        </fieldset>
        <fieldset className="barrio">
          <label htmlFor="barrio">Barrio</label>
          <select type="text" name="barrio" id="barrio" required>
            <option>Adeje</option>
            <option>Arafo</option>
            <option>Arico</option>
            <option>Arona</option>
            <option>Buena vista del norte</option>
            <option>Candelaria</option>
            <option>El rosario</option>
            <option>El sauzal</option>
            <option>El tanque</option>
            <option>Fasnia</option>
            <option>Garachico</option>
            <option>Granadilla de abona </option>
            <option>Guia de isora</option>
            <option>Güimar</option>
            <option>Icod de los vinos</option>
            <option>La guancha</option>
            <option>La laguna</option>
            <option>La matanza de acentejo</option>
            <option>La orotava</option>
            <option>La victoria de acentejo</option>
            <option>Los realejos</option>
            <option>Los silos</option>
            <option>Puerto de la cruz</option>
            <option>San juan de la rambla</option>
            <option>San miguel de abona</option>
            <option>Santa cruz de tenerife</option>
            <option>Santa ursula</option>
            <option>Santiago del teide</option>
            <option>Tacoronte</option>
            <option>Tegueste</option>
            <option>Villaflor</option>
          </select>
        </fieldset>
        <fieldset className="text">
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" required />
        </fieldset>
        <fieldset fieldset className="photo">
          <label htmlFor="photo">Image</label>
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
        {sending ? <p>posting...</p> : null}
      </form>
    </>
  );
};
