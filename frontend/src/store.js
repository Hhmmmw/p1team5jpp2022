import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
  userResetPasswordReducer,
} from "./reducers/userReducers";

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListUserReducer,
  orderListAllReducer,
} from "./reducers/orderReducers";

import {
  listCategoriesReducer,
  categoryfetchReducer,
  categoryDeleteReducer,
  categoryCreateReducer,
  categoryUpdateReducer,
} from "./reducers/categoryReducers";

import {
  listBrandsReducer,
  brandfetchReducer,
  brandDeleteReducer,
  brandCreateReducer,
  brandUpdateReducer,
} from "./reducers/brandReducers";

const reducer = combineReducers({
  allProducts: getProductsReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReview: productReviewReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userResetPassword: userResetPasswordReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  cart: cartReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListUser: orderListUserReducer,
  orderListAll: orderListAllReducer,

  listBrands: listBrandsReducer,
  categoryFetch: categoryfetchReducer,
  categoryDelete: categoryDeleteReducer,
  categoryCreate: categoryCreateReducer,
  categoryUpdate: categoryUpdateReducer,

  listCategories: listCategoriesReducer,
  brandFetch: brandfetchReducer,
  brandDelete: brandDeleteReducer,
  brandCreate: brandCreateReducer,
  brandUpdate: brandUpdateReducer,
});

const userDataFromStorage = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userData: userDataFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
