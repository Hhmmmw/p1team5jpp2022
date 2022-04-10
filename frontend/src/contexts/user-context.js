import React from "react";

const userContext = React.createContext({
  user: {},
  login: (email, password) => {},
  logout: () => {},
  signup: (username, email, password, mobile, address) => {},
});

export default userContext;
