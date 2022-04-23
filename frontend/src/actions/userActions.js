import axios from "axios";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_RESET_PASSWORD_REQUEST,
  USER_RESET_PASSWORD_SUCCESS,
  USER_RESET_PASSWORD_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../types/userTypes";

function errorMessage(error) {
  const result =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  return result;
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload: message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userData");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  document.location.href = "/login";
};

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: USER_REGISTER_FAIL,
      payload: message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = errorMessage(error);
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const listAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const {
      userLogin: { userData },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
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

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    const message = errorMessage(error);

    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const resetUserPassword =
  (passwordToken, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_RESET_PASSWORD_REQUEST });

      // make the api call to reset the password
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        "/api/users/reset",
        { passwordToken, password },
        config
      );

      dispatch({ type: USER_RESET_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
      const message = errorMessage(error);

      dispatch({
        type: USER_RESET_PASSWORD_FAIL,
        payload: message,
      });
    }
  };