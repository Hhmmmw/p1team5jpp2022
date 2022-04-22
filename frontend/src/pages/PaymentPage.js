import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
// import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { user } = useSelector((state) => state.userLogin);

  useEffect(() => {
    // if (!user) {
    //   history.push("/login");
    // } else
    if (!shippingAddress) {
      history.push("/shipping");
    }
  }, [history, user, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setPaymentMethod(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Col>
              <Form.Check
                inline
                type="radio"
                label="PayPal Account"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={changeHandler}
              />
              <Form.Check
                inline
                type="radio"
                label="CashOnDelivery"
                id="CashOnDelivery"
                name="paymentMethod"
                value="CashOnDelivery"
                checked={paymentMethod === "CashOnDelivery"}
                onChange={changeHandler}
              />
            </Col>
          </Form.Group>
          <div className="d-grid">
            <Button type="submit" className="my-3" size="lg">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </FormContainer>
  );
};

export default PaymentPage;
