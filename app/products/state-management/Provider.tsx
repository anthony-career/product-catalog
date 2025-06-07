"use client";

import { useEffect, useMemo, useReducer } from "react";
import { ProductsContext, ProductSelectorStatesContext } from "./context";
import { InitialState } from "./initialState";
import { reducer } from "./Reducer";
import { SET_DATA, SET_LOADING, SET_ERROR } from "./actions";
import { ProductFilters } from "domain/product.model";
import { getProducts } from "server-actions/products/getProducts";

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  const selectorStates = useMemo(() => {
    return {
      category: state.category,
      priceRange: state.priceRange,
      sortCategory: state.sortCategory,
    };
  }, [state.category, state.priceRange, state.sortCategory]);

  const productsFilters = useMemo((): ProductFilters => {
    return {
      category: state.category,
      priceRange: state.priceRange,
      sortCategory: state.sortCategory,
      search: state.search,
      pagination: state.pagination,
    };
  }, [
    state.category,
    state.pagination,
    state.priceRange,
    state.sortCategory,
    state.search,
  ]);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getProducts(productsFilters)
      .then(({ data, meta }) => {
        dispatch({ type: SET_DATA, payload: { data, meta } });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error });
      });
  }, [productsFilters]);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      <ProductSelectorStatesContext.Provider value={selectorStates}>
        {children}
      </ProductSelectorStatesContext.Provider>
    </ProductsContext.Provider>
  );
};
