import axios from "axios";
import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CATEGORIES_LIST_FAIL,
  CATEGORY_FETCH_REQUEST,
  CATEGORY_FETCH_SUCCESS,
  CATEGORY_FETCH_FAIL,
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
  CATEGORY_CREATE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
} from "../types/categoryTypes";

function errorMessage(error) {
  const result =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  return result;
}

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({ type: CATEGORIES_LIST_REQUEST });

    const { data } = await axios.get(`/api/category/`);

    dispatch({
      type: CATEGORIES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({
      type: CATEGORIES_LIST_FAIL,
      payload: message,
    });
  }
};

export const fetchCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_FETCH_REQUEST });

    const { data } = await axios.get(`/api/category/${id}`);

    dispatch({
      type: CATEGORY_FETCH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_FETCH_FAIL,
    });
  }
};

export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CATEGORY_DELETE_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    await axios.delete(`/api/category/${id}`, config);

    dispatch({
      type: CATEGORY_DELETE_SUCCESS,
    });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: CATEGORY_DELETE_FAIL,
      payload: message,
    });
  }
};

export const createCategory =
  (categoryValues, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CATEGORY_CREATE_REQUEST,
      });

      const {
        userLogin: { userData },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/category`,
        categoryValues,
        config
      );

      dispatch({
        type: CATEGORY_CREATE_SUCCESS,
        payload: data,
      });
      history.push("/admin/categorylist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: CATEGORY_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateCategory =
  (categoryData, categoryId, history) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CATEGORY_UPDATE_REQUEST,
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
        `/api/category/${categoryId}`,
        categoryData,
        config
      );

      dispatch({
        type: CATEGORY_UPDATE_SUCCESS,
        payload: data,
      });
      dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });

      history.push("/admin/categorylist");
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: CATEGORY_UPDATE_FAIL,
        payload: message,
      });
    }
  };
