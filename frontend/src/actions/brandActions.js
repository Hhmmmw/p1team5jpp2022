import axios from "axios";
import {
  BRANDS_LIST_REQUEST,
  BRANDS_LIST_SUCCESS,
  BRANDS_LIST_FAIL,
  BRAND_FETCH_REQUEST,
  BRAND_FETCH_SUCCESS,
  BRAND_FETCH_FAIL,
  BRAND_CREATE_REQUEST,
  BRAND_CREATE_SUCCESS,
  BRAND_CREATE_FAIL,
  BRAND_DELETE_REQUEST,
  BRAND_DELETE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_UPDATE_REQUEST,
  BRAND_UPDATE_SUCCESS,
  BRAND_UPDATE_FAIL,
} from "../types/brandTypes";

function errorMessage(error) {
  const result =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  return result;
}

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: BRANDS_LIST_REQUEST });

    const { data } = await axios.get(`/api/brand/`);

    dispatch({
      type: BRANDS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({
      type: BRANDS_LIST_FAIL,
      payload: message,
    });
  }
};

export const fetchCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: BRAND_FETCH_REQUEST });

    const { data } = await axios.get(`/api/brand/${id}`);

    dispatch({
      type: BRAND_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BRAND_FETCH_FAIL,
    });
  }
};

export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BRAND_DELETE_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    await axios.delete(`/api/brand/${id}`, config);

    dispatch({
      type: BRAND_DELETE_SUCCESS,
    });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: BRAND_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createCategory =
  (brandValues, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BRAND_CREATE_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.post(`/api/brand`, brandValues, config);

      dispatch({
        type: BRAND_CREATE_SUCCESS,
        payload: data,
      });
      history.push("/admin/brandlist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: BRAND_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateCategory =
  (brandData, brandId, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BRAND_UPDATE_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/brand/${brandId}`,
        brandData,
        config
      );

      dispatch({
        type: BRAND_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: BRAND_UPDATE_SUCCESS, payload: data });

      history.push("/admin/brandlist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: BRAND_UPDATE_FAIL,
        payload: message,
      });
    }
  };
