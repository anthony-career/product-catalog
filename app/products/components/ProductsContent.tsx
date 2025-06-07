"use client";

import { ProductsSearch } from "./ProductsSearch";
import { ProductsFilters } from "./ProductsFilters";
import { ProductsGrid } from "./ProductsGrid";
import { ProductsPagination } from "./ProductsPagination";
import { Suspense } from "react";
import { LoadingProducts } from "./LoadingProducts";

export function ProductsContent() {
  return (
    <div className='flex flex-col h-full'>
      <div className='mb-8 flex-none'>
        <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center'>
          <div className='w-full lg:w-1/2'>
            <ProductsSearch />
          </div>
          <div className='w-full lg:w-1/2 flex flex-col items-end'>
            <ProductsFilters />
          </div>
        </div>
      </div>

      <div className='flex-1 overflow-y-auto min-h-0'>
        <Suspense fallback={<LoadingProducts />}>
          <ProductsGrid />
        </Suspense>
      </div>

      <div className='mt-8 flex-none'>
        <div className='flex justify-center'>
          <ProductsPagination />
        </div>
      </div>
    </div>
  );
}
