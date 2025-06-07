"use client";
import { useContext } from "react";
import { ProductsContext } from "../state-management/context";

export const useProductsPageState = () => {
  const { state } = useContext(ProductsContext);

  return state;
};
