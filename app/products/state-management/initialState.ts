import { ProductsState } from "../types";

export const InitialState: ProductsState = {
  page: 1,
  limit: 10,
  data: [],
  meta: {
    total: 0,
    page: 1,
    limit: 10,
  },
  category: "t-shirts",
  search: "",
  sortCategory: "newest",
  priceRange: "under-50",
  isLoading: true,
};
