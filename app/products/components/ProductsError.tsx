"use client";

import { AlertCircle } from "lucide-react";

interface ErrorProps {
  error?: Error;
  reset?: () => void;
}

export function ProductsError({ error, reset }: ErrorProps) {
  return (
    <div className='flex flex-col items-center justify-center p-8 text-center bg-blue-400'>
      <div className='mb-4 rounded-full bg-red-100 p-3'>
        <AlertCircle className='h-6 w-6 text-red-600' />
      </div>

      <h2 className='mb-2 text-lg font-semibold text-gray-900'>
        Something went wrong!
      </h2>

      <p className='mb-6 text-sm text-gray-600'>
        {error?.message || "We couldn't load the products. Please try again."}
      </p>

      {reset && (
        <button
          onClick={reset}
          className='rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2'
        >
          Try again
        </button>
      )}
    </div>
  );
}
