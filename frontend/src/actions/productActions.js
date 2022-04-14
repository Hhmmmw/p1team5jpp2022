import axios from "axios";
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_REVIEW_REQUEST,
  PRODUCT_REVIEW_SUCCESS,
  PRODUCT_REVIEW_FAIL,
} from "../types/productTypes";

function errorMessage(error) {
  const result =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  return result;
}
export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`/api/products?`);

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
    });
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_DELETE_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        // Authorization: `Bearer ${userData.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch({
      type: PRODUCT_DELETE_SUCCESS,
    });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createProduct =
  (productValues, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_CREATE_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          // Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.post(`/api/products`, productValues, config);

      dispatch({
        type: PRODUCT_CREATE_SUCCESS,
        payload: data,
      });
      history.push("/admin/productlist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateProduct =
  (productData, productId, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/products/${productId}`,
        productData,
        config
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });

      history.push("/admin/productlist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const reviewProduct =
  (productId, review) => async (dispatch, getState) => {
    try {
      dispatch({
        type: PRODUCT_REVIEW_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${userData.token}`,
        },
      };

      await axios.post(`/api/products/${productId}/reviews`, review, config);

      dispatch({
        type: PRODUCT_REVIEW_SUCCESS,
      });
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: PRODUCT_REVIEW_FAIL,
        payload: message,
      });
    }
  };
