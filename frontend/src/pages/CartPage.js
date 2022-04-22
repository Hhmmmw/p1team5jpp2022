import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  ButtonGroup,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addItem, removeItem } from "../actions/cartActions";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      {cartItems.length === 0 ? (
        <Row className="justify-content-center">
          <Message>There are no products in the cart yet.</Message>
        </Row>
      ) : (
        <>
          <Card>
            <Card.Header className="text-primary">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
              Shopping cart
            </Card.Header>
            <div className="clearfix"></div>
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Card.Img
                          src={item.image}
                          alt={item.name}
                          // rounded
                          width="120"
                          height="80"
                        />
                      </Col>
                      <Col md={4}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col
                        md={2}
                        className="d-none d-md-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-evenly",
                        }}
                      >
                        ${item.price}
                        <div>
                          <i
                            style={{ fontSize: "0.7em" }}
                            className="fas fa-times"
                          />{" "}
                          {item.qty}
                        </div>
                      </Col>
                      <Col
                        md={4}
                        className="d-none d-md-flex"
                        style={{
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <ButtonGroup aria-label="Addtocart">
                          <Button
                            disabled={item.qty >= item.countInStock}
                            onClick={() => {
                              dispatch(
                                addItem(item.product, Number(item.qty + 1))
                              );
                            }}
                            variant="primary"
                          >
                            <i className="fas fa-plus" />
                          </Button>
                          <Button
                            variant="primary"
                            disabled={item.qty === 1}
                            onClick={() => {
                              dispatch(
                                addItem(item.product, Number(item.qty - 1))
                              );
                            }}
                          >
                            <i className="fas fa-minus" />
                          </Button>
                        </ButtonGroup>
                        <Button
                          type="button"
                          onClick={() => dispatch(removeItem(item.product))}
                        >
                          <i className="fas fa-trash" aria-hidden="true" />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <Card.Link to={"/"}>
                    <button className="btn btn-outline-primary float-end">
                      Continue shopping
                    </button>
                  </Card.Link>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Row>
                <div className="float-end" style={{ margin: 10 }}>
                  <Button
                    type="button"
                    className="btn btn-primary float-end"
                    disabled={cartItems.length === 0}
                    onClick={() => {
                      history.push("/login?redirect=shipping");
                    }}
                  >
                    Proceed To Checkout
                  </Button>
                  <div className="float-end" style={{ margin: 10 }}>
                    Total price:{" "}
                    <b>
                      $
                      <strong>
                        {cartItems.reduce(
                          (acc, item) => acc + item.qty * item.price,
                          0
                        )}
                      </strong>
                    </b>
                  </div>
                </div>
              </Row>
            </Card.Footer>
          </Card>
        </>
      )}
    </>
  );
};

export default CartPage;
