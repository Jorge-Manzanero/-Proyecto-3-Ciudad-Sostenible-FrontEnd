import { createContext, useEffect, useState } from "react";
import { getUserDataService } from "../services";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserDataService({ token });

        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
