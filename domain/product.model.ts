export type ProductPriceRange =
  | "all"
  | "under-50"
  | "50-100"
  | "100-plus"
  | "150-plus"
  | "200-plus";
export type ProductSortCategory =
  | "price-low-high"
  | "price-high-low"
  | "newest";

export type ProductCategory =
  | "all"
  | "t-shirts"
  | "hoodies"
  | "hats"
  | "accessories"
  | "footwear"
  | "outerwear"
  | "bottoms"
  | "formal"
  | "bags";

export interface ProductPriceRangeOption {
  value: ProductPriceRange;
  label: string;
}

export interface ProductSortCategoryOption {
  value: ProductSortCategory;
  label: string;
}

export interface ProductCategoryOption {
  value: ProductCategory;
  label: string;
}

export const ProductPriceRangeOptions: ProductPriceRangeOption[] = [
  { value: "all", label: "All" },
  { value: "under-50", label: "Under $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "100-plus", label: "$100+" },
  { value: "150-plus", label: "$150+" },
  { value: "200-plus", label: "$200+" },
];

export const ProductSortCategoryOptions: ProductSortCategoryOption[] = [
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

export const ProductCategoryOptions: ProductCategoryOption[] = [
  { value: "all", label: "All" },
  { value: "t-shirts", label: "T-Shirts" },
  { value: "hoodies", label: "Hoodies" },
  { value: "hats", label: "Hats" },
  { value: "accessories", label: "Accessories" },
  { value: "footwear", label: "Footwear" },
  { value: "outerwear", label: "Outerwear" },
  { value: "bottoms", label: "Bottoms" },
  { value: "formal", label: "Formal Wear" },
  { value: "bags", label: "Bags" },
];

export interface ProductFilters {
  category?: ProductCategory;
  priceRange?: ProductPriceRange;
  sortCategory?: ProductSortCategory;
  search?: string;
  pagination?: {
    page: number;
    limit: number;
  };
}
