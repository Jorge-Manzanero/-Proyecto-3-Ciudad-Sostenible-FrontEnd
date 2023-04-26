export const getAllPostService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getOnePostService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data.post;
};

export const solvePostService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token.token,
    },
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.message;
};

export const registerUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const getUserDataService = async ({ token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendPostService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deletePostService = async (id, { token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};
