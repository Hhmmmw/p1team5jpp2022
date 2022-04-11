import axios from "axios";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";

import { listProductDetails, updateProduct } from "../actions/productActions";

const ProductEditPage = ({ history, match }) => {
  const productId = match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    brand: "",
    countInStock: 0,
  });
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setFormValues({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        brand: product.brand,
        countInStock: product.countInStock,
        image: product.image,
      });
    }
  }, [dispatch, productId, product]);

  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setFormValues({ ...formValues, image: data });

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const onChange = (e) =>
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formValues, productId, history));
  };

  //
  const { name, description, price, category, brand, image, countInStock } =
    formValues;
  return (
    <Fragment>
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <Container style={{ textAlign: "left", marginTop: "-50px" }}>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <h1>Edit Product</h1>

            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form onSubmit={(e) => onSubmit(e)}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="price">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    name="price"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadImageHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group>

                <Form.Group controlId="brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    name="brand"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="countInStock">
                  <Form.Label>Count In Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter countInStock"
                    name="countInStock"
                    value={countInStock}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    name="category"
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => onChange(e)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">
                  Edit Product
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default ProductEditPage;
