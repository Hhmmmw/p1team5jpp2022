import React from "react";

// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProvider from "./contexts/UserProvider";

import "./App.css";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Header />
          <Route path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
