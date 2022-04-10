import React from "react";

import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { BsFillCartFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import "./Header.css";

export default function Header() {
  return (
    <header className="App-header">
      <div className="logo">
        <Link to="/">E-Shop</Link>
      </div>

      {/* <div className="search-field">
        <input type="text" name="search" placeholder="Search Products" />
        <FaSearch style={{ fill: "#282c34", marginLeft: "0.5rem" }} />
      </div> */}

      <SearchBar />

      <div className="main-menu">
        <ul>
          <li>
            <Link to="/login" className="App-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className="App-link">
              Signup
            </Link>
          </li>

          {/* noha */}
          <NavDropdown title="Admin" id="adminmenu">
            <LinkContainer to="/admin/userlist">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/productlist">
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/categorylist">
              <NavDropdown.Item>Category</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/orderlist">
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <li>
            <BsFillCartFill />
          </li>
        </ul>
      </div>
    </header>
  );
}
