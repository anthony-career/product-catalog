import { Product } from "@prisma/client";
import {
  ProductCategory,
  ProductPriceRange,
  ProductSortCategory,
} from "domain/product.model";

interface ProductsMeta {
  total: number;
  page: number;
  limit: number;
}

export interface ProductsState {
  page: number;
  limit: number;
  data: Product[];
  meta: ProductsMeta;
  category: ProductCategory;
  search: string;
  sortCategory: ProductSortCategory;
  priceRange: ProductPriceRange;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}
