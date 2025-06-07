"use client";
import { createContext, Dispatch } from "react";
import { ProductsState } from "../types";
import { ProductPriceRange, ProductSortCategory } from "domain/product.model";
import { ProductCategory } from "domain/product.model";

export const ProductsContext = createContext<{
  state: ProductsState;
  dispatch: Dispatch<any>;
}>({} as unknown as { state: ProductsState; dispatch: Dispatch<any> });

export const ProductSelectorStatesContext = createContext<{
  category: ProductCategory;
  priceRange: ProductPriceRange;
  sortCategory: ProductSortCategory;
}>({} as any);
