import { Typography } from "components/design-system/Typography";
import { useRelatedProducts } from "../hooks/useRelatedProducts";
import { ProductCard } from "components/design-system/ProductCard";

export const RelatedProducts = ({ id }: { id: number }) => {
  const { relatedProducts, isLoading, error } = useRelatedProducts(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='mt-12 flex flex-col gap-4'>
      <Typography variant='h2' color='primary' className='mb-6'>
        Related Products
      </Typography>
      <div className='bg-white w-full flex gap-4 overflow-x-auto shadow-soft hover:shadow-hover transition-shadow'>
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className='shrink-0 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4'
          >
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
