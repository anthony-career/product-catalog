"use client";

import { Button } from "components/design-system/Button";
import { Input } from "components/design-system/Input";
import { Typography } from "components/design-system/Typography";
import { use, useEffect, useMemo, useState } from "react";
import { ProductInformation } from "./components/ProductInformation";
import { RelatedProducts } from "./components/RelatedProducts";
import { useProduct } from "./hooks/useProduct";
import Loading from "./components/Loading";
import { ProductNotFound } from "./components/ProductNotFound";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { product, isLoading, error } = useProduct({ id });
  const [selectedImage, setSelectedImage] = useState<number>(-1);

  const [quantity, setQuantity] = useState(1);

  const productImages = useMemo(() => {
    if (!product) return [];
    return [product!.image, ...(product!.images ?? [])];
  }, [product]);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  useEffect(() => {
    if (product) {
      setSelectedImage(0);
    }
  }, [product]);

  if (isLoading) {
    return <Loading />;
  }
  if (error || (!isLoading && !product)) {
    return <ProductNotFound />;
  }

  return (
    <main className='flex-1 bg-main-pattern w-full'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-8'>
        <div className='mb-6'>
          <Link href='/products'>
            <Button
              variant='ghost'
              className='text-primary hover:text-primary/80'
            >
              <svg
                className='w-5 h-5 mr-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              Back to Products
            </Button>
          </Link>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='space-y-4'>
            <div className='relative aspect-square bg-white overflow-hidden shadow-soft'>
              <img
                src={
                  productImages[selectedImage] ?? "https://placehold.co/600x600"
                }
                alt={product!.name}
                className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
            <div className='flex space-x-2 overflow-x-auto pb-2'>
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 overflow-hidden cursor-pointer border ${
                    index === selectedImage
                      ? "border-2 border-primary"
                      : "border-gray-200"
                  } shadow-subtle hover:border-primary transition-colors`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image || "https://placehold.co/200x200"}
                    alt={product!.name}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-8 bg-white p-6 shadow-soft'>
            <Typography variant='h1' color='primary'>
              {product!.name}
            </Typography>

            <div className='flex items-baseline space-x-2'>
              <Typography variant='h2' color='primary'>
                ${product!.price}
              </Typography>
            </div>

            <div className='flex items-center space-x-4'>
              <Typography
                variant='body2'
                color='primary'
                className='uppercase font-medium'
              >
                Quantity
              </Typography>
              <div className='flex items-center border border-gray-200 shadow-subtle'>
                <Button
                  variant='ghost'
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className='px-3 py-1'
                >
                  -
                </Button>
                <Input
                  type='number'
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className='w-14 max-w-40 text-center text-primary border-x border-gray-200'
                  min={1}
                />
                <Button
                  variant='ghost'
                  onClick={() => setQuantity(quantity + 1)}
                  className='px-3 py-1'
                >
                  +
                </Button>
              </div>
            </div>

            <div className='flex space-x-4'>
              <Button variant='primary' className='flex-1 py-3 rounded-none'>
                Add to Cart
              </Button>
              <Button variant='outline' className='flex-1 py-3 rounded-none'>
                Buy Now
              </Button>
            </div>

            <div className='flex space-x-4 text-sm'>
              <Button
                variant='ghost'
                className='text-accent hover:text-primary'
              >
                <svg
                  className='w-5 h-5 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                  />
                </svg>
                Save for Later
              </Button>
              <Button
                variant='ghost'
                className='text-accent hover:text-primary'
              >
                <svg
                  className='w-5 h-5 mr-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='1.5'
                    d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
                  />
                </svg>
                Share
              </Button>
            </div>
          </div>
        </div>
        <ProductInformation />
        <RelatedProducts id={Number(id)} />
      </div>

      <div className='fixed bottom-0 left-0 right-0 bg-footerDark border-t border-gray-800 p-4 lg:hidden z-50'>
        <div className='flex space-x-4'>
          <Button variant='primary' className='flex-1'>
            Add to Cart
          </Button>
          <Button variant='outline' className='flex-1 text-white border-white'>
            Buy Now
          </Button>
        </div>
      </div>
    </main>
  );
}
