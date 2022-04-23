import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../actions/orderActions";

import { Container, Card, Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";

const OrderPlaced = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading } = orderDetails;
  return loading ? (
    <Loader />
  ) : (
    <div className="text-center">
      <i className="fa fa-check fa-5x text-success" aria-hidden="true"></i>

      <h1 className="text-center">Thank You</h1>
      <h2>Order Successfully Placed</h2>
      <p className="text-center text-gray-400 font-light">
        Estimated Delivery: in next 5 working days
      </p>
      <Container>
        <Row>
          <Col md={6} style={{ margin: "auto" }}>
            <Card className="bg-light">
              <h3 className="text-center text-lg text-muted mb-2">
                Order No #{order?._id?.substring(order?._id?.length - 8)}
              </h3>

              <Card.Body>
                <h5 className="text-center text-lg text-gray-600 mb-5">
                  Your Order will be sent to this address
                </h5>
                <Card.Text className="text-start">
                  <i className="fa fa-map-marker fa-fw" aria-hidden="true"></i>
                  {order?.shippingAddress.address},{" "}
                  {order?.shippingAddress.city} {order?.shippingAddress.country}
                </Card.Text>

                <Card.Link
                  className="hover:underline"
                  href={`mailto:${order?.shippingAddress.email}`}
                >
                  <Card.Text className="text-start text-muted ">
                    <i className="far fa-envelope far-fw"></i>{" "}
                    {order?.user.email}
                  </Card.Text>
                </Card.Link>
                {(order?.paymentMethod === "cashOnDelivery" ||
                  !order?.isPaid) && (
                  <Card.Text className="bg-secondary p-3 mt-5 text-gray text-center rounded-md">
                    You will receive an email with tracking information once
                    your goods have shipped.
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPlaced;
