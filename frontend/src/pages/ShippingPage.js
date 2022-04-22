import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, FloatingLabel } from "react-bootstrap";

import { saveShippingAddress } from "../actions/cartActions";
import FormContainer from "../components/FormContainer";

const ShippingPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const { shippingAddress } = cart;

  const [shippingData, setShippingData] = useState({
    address: shippingAddress.address,
    city: shippingAddress.city,
    postalCode: shippingAddress.postalCode,
    country: shippingAddress.country,
  });
  const { address, city, postalCode, country } = shippingData;

  const onChangeInput = (e) =>
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(shippingData));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <h1>Shipping Address</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FloatingLabel
            controlId="addressinput"
            label="Address"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              placeholder="Enter address"
              type="text"
              name="address"
              value={address || ""}
              required
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="city">
          <FloatingLabel controlId="cityinput" label="City" className="mb-3">
            <Form.Control
              size="lg"
              placeholder="Enter City"
              type="text"
              name="city"
              value={city || ""}
              required
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <FloatingLabel
            controlId="postalcodeinput"
            label="Postal Code"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              placeholder="Enter Postal Code"
              type="text"
              name="postalCode"
              value={postalCode || ""}
              required
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group controlId="country">
          <FloatingLabel
            controlId="countryinput"
            label="Country"
            className="mb-3"
          >
            <Form.Control
              size="lg"
              placeholder="Enter Country"
              type="text"
              name="country"
              value={country || ""}
              required
              onChange={onChangeInput}
            />
          </FloatingLabel>
        </Form.Group>
        <div className="d-flex">
          <Button
            type="submit"
            className="ms-auto"
            //
          >
            Continue
          </Button>
        </div>
      </Form>
    </FormContainer>
    // </motion.div>
  );
};

export default ShippingPage;
