"use client";

import { useContext } from "react";
import { ProductsContext } from "../state-management/context";
import {
  SET_CATEGORY,
  SET_PAGE,
  SET_SEARCH,
  SET_PRICE_RANGE,
  SET_SORT_CATEGORY,
} from "../state-management/actions";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSortCategory,
} from "domain/product.model";

export const useProductsActions = () => {
  const { dispatch } = useContext(ProductsContext);

  const setPage = (page: number) => {
    dispatch({ type: SET_PAGE, payload: page });
  };

  const setSearch = (search: string) => {
    dispatch({ type: SET_SEARCH, payload: search });
  };

  const setCategory = (category: ProductCategory) => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };

  const setSortCategory = (sortCategory: ProductSortCategory) => {
    dispatch({ type: SET_SORT_CATEGORY, payload: sortCategory });
  };

  const setPriceRange = (range: ProductPriceRange) => {
    dispatch({ type: SET_PRICE_RANGE, payload: range });
  };

  return {
    setPage,
    setSearch,
    setCategory,
    setSortCategory,
    setPriceRange,
  };
};
