import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails, reviewProduct } from "../actions/productActions";
import { PRODUCT_REVIEW_RESET } from "../types/productTypes";
import { addItem } from "../actions/cartActions";

const ProductPage = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const productId = match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userData } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReview);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      window.alert("Review Submitted!!");
      setRating(0);
      setComment("");
    }
    if (product && (!product._id || product._id !== productId)) {
      dispatch(listProductDetails(productId));
      dispatch({ type: PRODUCT_REVIEW_RESET });
    }
  }, [dispatch, product, productId, successProductReview]);

  const handleAddToCart = (e) => {
    dispatch(addItem(productId, quantity));
    console.log(quantity);
    history.push(`/cart`);
  };
  const handleReviewSubmit = (e) => {
    dispatch(
      reviewProduct(productId, {
        rating,
        comment,
        name: userData.name,
      })
    );
  };
  return (
    <>
      <Link className="btn btn-outline-primary my-2" to="/">
        <i className="fa fa-arrow-left"></i>
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message dismissible variant="danger" duration={10}>
          {error}
        </Message>
      ) : (
        <>
          <Container>
            <div className="container-fliud">
              <Row>
                <Col md={6}>
                  {" "}
                  <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Rating
                        value={product.rating?.rate}
                        text={`${product.rating?.count} reviews`}
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Price:</strong> ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Description:</strong> {product.description}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup.Item>
                    <strong>Status:</strong>

                    {product.countInStock > 0 ? (
                      <span className="text-success"> In Stock</span>
                    ) : (
                      <span className="text-danger"> Out of Stock</span>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col md={2}>
                        <strong>Quantity: </strong>
                      </Col>
                      <Col md={2}>
                        <Form.Control
                          as="select"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(
                            (ele) => (
                              <option key={ele + 1} value={ele + 1}>
                                {ele + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button
                      onClick={handleAddToCart}
                      className="btn-block btn-lg"
                      type="button"
                      disabled={product.countInStock <= 0}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col md={6}>
                <h3>Ratings & Reviews of {product?.name}</h3>
                {(!product.reviews || !product.reviews.length) && (
                  <Message variant="secondary">No Reviews yet</Message>
                )}
                <ListGroup variant="flush"></ListGroup>
                {product.reviews?.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <div>
                      <img
                        src={review?.avatar}
                        alt=""
                        className="review-avatar"
                      />
                      <div>
                        <h2>{review?.name}</h2>
                        <Rating value={review?.rating} />
                      </div>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "1.1em",
                        }}
                      >
                        {review?.comment}
                      </p>
                      <small>{review.createdAt.substring(0, 10)}</small>
                    </div>
                  </ListGroup.Item>
                ))}
              </Col>
              <Col md={6}>
                <h3>Write a Customer Review</h3>
                {loadingProductReview && <Loader />}
                {errorProductReview && (
                  <Message variant="danger">{errorProductReview}</Message>
                )}
                {userData ? (
                  <Form onSubmit={handleReviewSubmit}>
                    <Form.Group controlId="rating">
                      <Form.Control
                        as="select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option default>Choose Rating</option>
                        <option value="1">1 - Bad</option>
                        <option value="2">2 - Poor</option>
                        <option value="3">3 - Fair</option>
                        <option value="4">4 - Good</option>
                        <option value="5">5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="comment">
                      <FloatingLabel
                        controlId="commenttext"
                        label="Comment"
                        className="my-3"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          row="3"
                          onChange={(e) => setComment(e.target.value)}
                          value={comment}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <div className="d-grid">
                      <Button type="submit">Submit Review</Button>
                    </div>
                  </Form>
                ) : (
                  <Message>
                    Please <Link to="/login">sign in</Link> to write a review{" "}
                  </Message>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductPage;
