"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const ActionsButtons = () => {
  const [isReady, setIReady] = useState(false);

  useEffect(() => {
    setIReady(true);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
      {isReady && (
        <Link
          href='/'
          className='inline-flex items-center justify-center px-6 py-3 bg-primary text-white hover:bg-secondary transition-colors shadow-soft hover:shadow-hover'
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
              strokeWidth='1.5'
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            />
          </svg>
          Go Home
        </Link>
      )}
      <button
        onClick={() => window.history.back()}
        className='inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors shadow-subtle hover:shadow-soft'
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
            strokeWidth='1.5'
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        Go Back
      </button>
    </div>
  );
};
