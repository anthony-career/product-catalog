import { ProductsState } from "../types";
import {
  SET_CATEGORY,
  SET_DATA,
  SET_ERROR,
  SET_LOADING,
  SET_PRICE_RANGE,
  SET_SEARCH,
  SET_SORT_CATEGORY,
} from "./actions";

export const reducer = (state: ProductsState, action: any): ProductsState => {
  if (action.type === SET_SEARCH) {
    return { ...state, search: action.payload };
  }
  if (action.type === SET_CATEGORY) {
    return { ...state, category: action.payload };
  }
  if (action.type === SET_PRICE_RANGE) {
    return { ...state, priceRange: action.payload };
  }
  if (action.type === SET_SORT_CATEGORY) {
    return { ...state, sortCategory: action.payload };
  }

  if (action.type === SET_DATA) {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
      isError: false,
      error: null,
    };
  }

  if (action.type === SET_LOADING) {
    return { ...state, isLoading: true, isError: false, error: null };
  }

  if (action.type === SET_ERROR) {
    return { ...state, isLoading: false, isError: true, error: action.payload };
  }

  return state;
};
