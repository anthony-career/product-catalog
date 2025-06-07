"use client";

import { Select } from "components/ui/Select";
import { useState, ChangeEvent } from "react";
import { useProductsActions } from "../hooks/useProductsActions";
import {
  ProductCategory,
  ProductCategoryOptions,
  ProductPriceRange,
  ProductPriceRangeOptions,
  ProductSortCategory,
  ProductSortCategoryOptions,
} from "domain/product.model";
import { useSelectorStates } from "../hooks/useSelectorStates";

export function ProductsFilters() {
  const { category, sortCategory, priceRange } = useSelectorStates();
  const { setCategory, setSortCategory, setPriceRange } = useProductsActions();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const now = performance.now();
    const { name, value } = e.target;
    switch (name) {
      case "category":
        setCategory(value as ProductCategory);
        break;
      case "priceRange":
        setPriceRange(value as ProductPriceRange);
        break;
      case "sortBy":
        setSortCategory(value as ProductSortCategory);
        break;
    }
    const end = performance.now();
    console.log(`Time taken: ${end - now} milliseconds`);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
      <Select
        name='category'
        value={category}
        onChange={handleChange}
        label='Category'
        options={ProductCategoryOptions}
      />

      <Select
        name='priceRange'
        value={priceRange}
        onChange={handleChange}
        label='Price Range'
        options={ProductPriceRangeOptions}
      />

      <Select
        name='sortBy'
        value={sortCategory}
        onChange={handleChange}
        label='Sort by'
        options={ProductSortCategoryOptions}
      />
    </div>
  );
}
