"use client";

import { Input } from "components/design-system/Input";
import { Fragment, useState, useCallback } from "react";
import { useProductsActions } from "../hooks/useProductsActions";
import { debounce } from "lib/utils/debounce";

export function ProductsSearch() {
  const [search, setLocalSearch] = useState("");
  const { setSearch } = useProductsActions();

  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 300),
    [setSearch]
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    debouncedSetSearch(value);
  };

  return (
    <Fragment>
      <div className='relative'>
        <Input
          className='w-full'
          onChange={handleSearchChange}
          value={search}
          leftIcon={
            <svg
              className='w-5 h-5 text-accent'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          }
          placeholder='Enter your name'
        />
        {search && (
          <div className='absolute inset-y-0 right-0 pr-4 flex items-center'>
            <button
              onClick={() => setSearch("")}
              className='text-accent hover:text-primary transition-colors'
            >
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='1.5'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className='mt-2 flex flex-wrap gap-2'>
        <span className='text-xs text-accent'>Popular searches:</span>
        <button className='text-xs text-accent hover:text-primary transition-colors'>
          T-shirts
        </button>
        <button className='text-xs text-accent hover:text-primary transition-colors'>
          Jeans
        </button>
        <button className='text-xs text-accent hover:text-primary transition-colors'>
          Sneakers
        </button>
        <button className='text-xs text-accent hover:text-primary transition-colors'>
          Accessories
        </button>
      </div>
    </Fragment>
  );
}
