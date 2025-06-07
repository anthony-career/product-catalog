"use client";
import { ProductCard } from "../../../components/design-system/ProductCard";
import { useProductsPageState } from "../hooks/useProductsPageState";
import { EmptyProducts } from "./EmptyProducts";
import { ProductsError } from "./ProductsError";
import { LoadingProducts } from "./LoadingProducts";

export function ProductsGrid() {
  const { data: products, isLoading, isError } = useProductsPageState();

  if (isLoading) {
    return <LoadingProducts />;
  }

  if (isError) {
    return <ProductsError />;
  }

  if (!products?.length) {
    return <EmptyProducts />;
  }

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4'>
      {products.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
}
