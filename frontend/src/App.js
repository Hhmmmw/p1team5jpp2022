import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProvider from "./contexts/UserProvider";
import ProductListPage from "./admin/ProductListPage";
import ProductEditPage from "./admin/ProductEditPage";
import ProductCreatePage from "./admin/ProductCreatePage";

import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Header />
        <Route path="/" component={Main} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin/productlist" component={ProductListPage} />
        <Route path="/admin/product/:id/edit" component={ProductEditPage} />
        <Route path="/admin/product/create" component={ProductCreatePage} />
      </Router>
    </UserProvider>
  );
}

export default App;
