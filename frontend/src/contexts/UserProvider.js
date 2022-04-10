import React, { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  // TODO: To be changed to the real API url.
  const baseUrl = "https://fakestoreapi.com/";

  const [user, setUser] = useState(null);

  const loginHandler = async (username, password) => {
    const result = await fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (result.ok) {
      setUser(await result.json());
    }
  };

  const logoutHandler = async () => {
    const result = await fetch(`${baseUrl}/auth/logout`);
    if (result.ok) setUser(null);
  };

  const createUser = async (username, email, password, mobile, address) => {
    const result = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, mobile, address }),
    });

    if (result.ok) console.log(await result.json()); // TODO: Redirect user to the login page.
  };
  const context = {
    user: user,
    login: loginHandler,
    logout: logoutHandler,
    signup: createUser,
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
