import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const count = () =>
    cartItems.reduce((acc, item) => acc + Number(item.qty), 0);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>eShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ms-auto nav-mobile">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart navbar-icons"></i> Cart{" "}
                  {count() > 0 && (
                    <Badge pill bg="danger">
                      {count()}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {!userData && (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user navbar-icons"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userData && !userData.isAdmin && (
                <NavDropdown title={userData.name} id="username">
                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt navbar-icons" /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userData && userData.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>
                      <i className="fas fa-users" />
                      Users
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>
                      <i className="fas fa-shopping-bag" />
                      Products
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/categorylist">
                    <NavDropdown.Item>
                      <i className="fa fa-list-alt" />
                      Category
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>
                      <i className="fas fa-user-shield" />
                      Orders
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className="fas fa-sign-out-alt navbar-icons" /> Logout
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
