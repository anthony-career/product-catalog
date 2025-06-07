"use client";
import { Product } from "@prisma/client";
import { Typography } from "./Typography";

interface ProductCardProps {
  data: Product;
  onFavoriteClick?: () => void;
}

const PlaceHolderImage = "https://placehold.co/400x400";

export const ProductCard = ({ data, onFavoriteClick }: ProductCardProps) => {
  const { name, price, image } = data;
  return (
    <div className='bg-white overflow-hidden shadow-soft hover:shadow-hover transition-shadow cursor-pointer'>
      <div className='relative aspect-square'>
        <img
          src={image || PlaceHolderImage}
          alt={name}
          className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
        />
        <div className='absolute top-2 right-2 sm:top-4 sm:right-4'>
          <button
            onClick={onFavoriteClick}
            className='p-1.5 sm:p-2 bg-white/95 rounded-full shadow-subtle hover:bg-white transition-colors'
          >
            <svg
              className='w-4 h-4 sm:w-5 sm:h-5 text-accent'
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
          </button>
        </div>
      </div>
      <div className='p-2 sm:p-4'>
        <Typography variant='body1' className='font-medium mb-1 line-clamp-2'>
          {name}
        </Typography>
        <div className='flex items-baseline space-x-2 mb-1 sm:mb-2'>
          <Typography variant='body1' className='font-bold'>
            ${price.toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
};
