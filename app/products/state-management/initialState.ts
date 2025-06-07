import { ProductsState } from "../types";

export const InitialState: ProductsState = {
  pagination: {
    limit: 10,
    page: 1,
  },
  error: null,
  isError: false,
  data: [],
  meta: {
    total: 0,
    page: 1,
    limit: 10,
  },
  category: "all",
  search: "",
  sortCategory: "newest",
  priceRange: "all",
  isLoading: true,
};
