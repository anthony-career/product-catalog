import Link from "next/link";

export const ProductNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[400px] px-4 py-8 text-center'>
      <div className='mb-6'>
        <svg
          className='w-16 h-16 text-gray-400'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <h1 className='text-2xl font-semibold text-gray-900 mb-2'>
        Product Not Found
      </h1>
      <p className='text-gray-600 mb-6 max-w-md'>
        We couldn't find the product you're looking for. It might have been
        removed or the link might be incorrect.
      </p>
      <Link
        href='/products'
        className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      >
        Browse All Products
      </Link>
    </div>
  );
};
