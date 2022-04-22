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

export const listBrandsReducer = (state = { brands: [] }, action) => {
  switch (action.type) {
    case BRANDS_LIST_REQUEST:
      return { loading: true, brands: [] };
    case BRANDS_LIST_SUCCESS:
      return {
        loading: false,
        brands: action.payload.brands,
      };
    case BRANDS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const brandfetchReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case BRAND_FETCH_REQUEST:
      return { ...state, loading: true };
    case BRAND_FETCH_SUCCESS:
      return { loading: false, brand: action.payload };
    case BRAND_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const brandDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BRAND_DELETE_REQUEST:
      return { loading: true };
    case BRAND_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BRAND_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const brandCreateReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case BRAND_CREATE_REQUEST:
      return { loading: true };
    case BRAND_CREATE_SUCCESS:
      return {
        [action.payload._id]: action.payload,
        loading: false,
        success: true,
      };
    case BRAND_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const brandUpdateReducer = (state = { brand: {} }, action) => {
  switch (action.type) {
    case BRAND_UPDATE_REQUEST:
      return { loading: true };
    case BRAND_UPDATE_SUCCESS:
      return { loading: false, success: true, brand: action.payload };
    case BRAND_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
