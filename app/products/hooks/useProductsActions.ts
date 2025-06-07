"use client";

import { useContext } from "react";
import { ProductsContext } from "../state-management/context";
import {
  SET_CATEGORY,
  SET_SEARCH,
  SET_PRICE_RANGE,
  SET_SORT_CATEGORY,
  SET_PAGINATION,
} from "../state-management/actions";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSortCategory,
} from "domain/product.model";
import { InitialState } from "../state-management/initialState";

export const useProductsActions = () => {
  const { dispatch } = useContext(ProductsContext);

  const setPagination = (pagination: { page: number; limit: number }) => {
    dispatch({ type: SET_PAGINATION, payload: pagination });
  };

  const setSearch = (search: string) => {
    dispatch({ type: SET_SEARCH, payload: search });
  };

  const setCategory = (category: ProductCategory) => {
    dispatch({ type: SET_CATEGORY, payload: category });
    dispatch({ type: SET_PAGINATION, payload: InitialState.pagination });
  };

  const setSortCategory = (sortCategory: ProductSortCategory) => {
    dispatch({ type: SET_SORT_CATEGORY, payload: sortCategory });
    dispatch({ type: SET_PAGINATION, payload: InitialState.pagination });
  };

  const setPriceRange = (range: ProductPriceRange) => {
    dispatch({ type: SET_PRICE_RANGE, payload: range });
    dispatch({ type: SET_PAGINATION, payload: InitialState.pagination });
  };

  return {
    setPagination,
    setSearch,
    setCategory,
    setSortCategory,
    setPriceRange,
  };
};
