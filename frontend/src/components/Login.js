import React, { useState, useContext, useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../contexts/user-context";

import "./Login.css";

const Login = () => {
  const userContext = useContext(UserContext);
  const keepMeRef = useRef();

  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && email.includes("@") && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm) userContext.login(email, password);
  };

  const adminValidation = () => {
    return email === adminUser.email && password === adminUser.password;
  };

  const keepMeSigned = () => {
    if (keepMeRef.current.value === "on") {
      console.log(keepMeRef.current.value);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    keepMeRef.current.value = "off";
  };

  return (
    <div className="container">
      <div className="login-page d-flex justify-content-center align-items-center">
        <Card className="p-5 text-center text-light login-card">
          <h1 className="text-danger mb-3">Welcome</h1>
          <h3 className="mb-5">E-Commerce Web Application</h3>

          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3 d-flex align-items-center gap-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="fs-4 me-5">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            {/* password */}
            <Form.Group
              className="mb-3 d-flex align-items-center gap-3"
              controlId="formBasicPassword"
            >
              <Form.Label className="fs-4 mb-4 me-1">Password</Form.Label>
              <Form.Control
                className="mb-4"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-4 d-flex" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                ref={keepMeRef}
                label="Keep me signed in"
                onChange={keepMeSigned}
              />
            </Form.Group>
            {/* Buttons group */}
            <div className="buttons">
              <Button
                variant="primary"
                type="submit"
                className="me-5 btn-danger"
                disabled={!validateForm()}
              >
                Login
              </Button>

              <Button variant="primary" type="submit" className="btn-danger">
                Sign up
              </Button>
            </div>
            {/* ForgetPassword */}
            <div className="mt-2">
              <Link to="/" className="text-white-50">
                Forgot Password?
              </Link>
            </div>

            <div className="mt-4">
              <Button
                className="btn btn-warning"
                href="#"
                disabled={!adminValidation()}
              >
                Login as admin
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
