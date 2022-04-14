import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../types/cartTypes";

// add the product quantity and id to the cart
export const addItem = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    // upgrade the local storage
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.error(error);
  }
};

// remove the product from the card
export const removeItem = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
    // upgrade the local storage with the upgraded cart
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    console.log(error);
  }
};

// save the shipping address data and update the local storage with the shipping address
export const saveShippingAddress = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

// get the payment option and update the local storage
export const savePaymentMethod = (data) => async (dispatch) => {
  try {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
