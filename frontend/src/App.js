import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import ProductListPage from "./admin/ProductListPage";
import ProductEditPage from "./admin/ProductEditPage";

import ProductCreatePage from "./admin/ProductCreatePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPlacedPage from "./pages/OrderPlacedPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />

      <Route path="/search/:keyword" component={HomePage} exact />

      <Route path="/login" component={LoginPage} />

      <Route path="/signup" component={SignupPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/cart/:id?" component={CartPage} />

      <Route path="/admin/productlist" component={ProductListPage} />
      <Route path="/admin/product/:id/edit" component={ProductEditPage} />
      <Route path="/shipping" component={ShippingPage} />
      <Route path="/payment" component={PaymentPage} />

      <Route path="/placeOrder" component={PlaceOrderPage} />
      <Route path="/order/:id/success" component={OrderPlacedPage} />

      <Route path="/admin/product/create" component={ProductCreatePage} />
    </Router>
  );
}

export default App;
