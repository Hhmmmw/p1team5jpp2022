import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
const HomePage = ({ match }) => {
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allProducts);
  const { loading, error, products } = allProducts;

  useEffect(() => {
    dispatch(getProducts(keyword));
  }, [dispatch, keyword]);

  const list = () => {
    return loading ? (
      <Loader />
    ) : (
    error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      products?.map((product) => (
        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
          <Product product={product} />
        </Col>
      ))
    ))
  };

  return (
    <div className="products">
      <h1>Featured Products</h1>;<Row>{list()}</Row>
    </div>
  );
};

export default HomePage;
