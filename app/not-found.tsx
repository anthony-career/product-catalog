import { Metadata } from "next";
import { ActionsButtons } from "./components/not-found/ActionsButtons";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
};

export default function NotFound() {
  return (
    <div className='w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
      <div className='mb-8'>
        <svg
          className='w-24 h-24 mx-auto text-primary'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>

      <h1 className='text-6xl font-bold text-primary tracking-tight mb-4'>
        404
      </h1>
      <h2 className='text-2xl font-medium text-secondary mb-6'>
        Page Not Found
      </h2>
      <p className='text-accent mb-8'>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <ActionsButtons />
    </div>
  );
}
