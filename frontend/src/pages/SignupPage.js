import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { registerUser } from "../actions/userActions";

const SignupPage = ({ location, history }) => {
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const onChangeInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userData } = userRegister;
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userData) {
      history.push(redirect);
    }
  }, [history, redirect, userData]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match. Please Retry.");
    } else {
      dispatch(registerUser(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="mb-2">
          <FloatingLabel controlId="nameinput" label="Name" className="mb-3">
            <Form.Control
              size="lg"
              placeholder="Enter Name"
              type="text"
              name="name"
              value={name}
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="email" className="my-2">
          <FloatingLabel
            controlId="emailinput"
            label="Email Address"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              placeholder="Enter Email Address"
              type="email"
              name="email"
              value={email}
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="password" className="my-2">
          <FloatingLabel
            controlId="passwordinput"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>

        <Form.Group controlId="confirmpassword" className="my-2">
          <FloatingLabel
            controlId="confirmpasswordinput"
            label="Confirm password"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              type="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>

        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Have an Account? <Link to="/login">Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SignupPage;
