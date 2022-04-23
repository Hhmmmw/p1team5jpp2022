import React, { useEffect } from "react";

import { Button, Row, Col, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { createOrder } from "../actions/orderActions";
import { USER_DETAILS_RESET } from "../types/userTypes";
import { ORDER_CREATE_RESET } from "../types/orderTypes";

const OrderPage = ({ history }) => {
  const dispatch = useDispatch();
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success } = orderCreate;

  //calculate the receipt
  const toDecimal = (num) => num.toFixed(2);

  cart.itemsPrice = toDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  );

  cart.shippingPrice = cart.itemsPrice < 100 ? toDecimal(0) : toDecimal(100);
  cart.taxPrice = toDecimal(0.15 * cart.itemsPrice);
  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice);

  useEffect(() => {
    if (success) {
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
      if (order.paymentMethod) {
        history.push(`/order/${order._id}/success`);
      }
    }

    // eslint-disable-next-line
  }, [dispatch, history, success, cart]);
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  return (
    <>
      <Row>
        <Col sm={8} xs={10} md={6} style={{ margin: "auto" }}>
          <Card>
            <Card.Header>
              <Row>
                <Col sm={8} xs={7} md={8}>
                  <strong>Name:</strong>
                  {userData?.name}

                  <div className="text-gray-500 font-light">
                    <strong>Email to:</strong>
                    <Card.Link
                      className="hover:underline text-"
                      href={`mailto:${userData?.email}`}
                    >
                      {userData?.email}
                    </Card.Link>
                  </div>
                  <address>
                    <strong>Address:</strong>
                    {shippingAddress.address}, {shippingAddress.city} ,{" "}
                    {shippingAddress.postalCode}
                    <br />
                    <strong>Country:</strong>
                    {shippingAddress.country}
                    <br />
                    <strong>Payment Method:</strong> {paymentMethod}
                  </address>
                </Col>
                <Col sm={4} xs={3} md={4}>
                  <p>
                    <em>Date: {date}</em>
                  </p>
                  <p>
                    <em>Receipt #</em>
                  </p>
                </Col>
              </Row>
            </Card.Header>
            <Row>
              <Card.Title className="text-center">
                <h1>Receipt</h1>
              </Card.Title>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Product</th>
                    <td></td>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, idx) => (
                    <tr key={idx}>
                      <td className="col-md-6">
                        <h6>
                          <em>{item.name}</em>
                        </h6>
                      </td>
                      <td></td>
                      <td className="col-md-3 text-center">
                        {item.qty} x ${item.price}
                      </td>
                      <td className="col-md-2 text-center">
                        ${toDecimal(item.qty * item.price)}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="text-end">
                      <p>
                        <strong>Subtotal: </strong>
                      </p>
                      <p>
                        <strong>Shipping: </strong>
                      </p>
                      <p>
                        <strong>Tax: </strong>
                      </p>
                    </td>
                    <td className="text-center">
                      <p>
                        <strong>${cart.itemsPrice}</strong>
                      </p>
                      <p>
                        <strong>${cart.shippingPrice}</strong>
                      </p>
                      <p>
                        <strong>${cart.taxPrice}</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td className="text-end">
                      <p>
                        <strong>Total: </strong>
                      </p>
                    </td>
                    <td className="text-center text-danger">
                      <h4 className="text-danger">
                        <strong>${cart.totalPrice}</strong>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button
                type="button"
                variant="success"
                className="btn-block btn-lg"
                disabled={!cartItems.length}
                onClick={placeOrderHandler}
              >
                Pay Now
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderPage;
