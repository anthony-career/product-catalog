"use client";
import { Metadata } from "next";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
      {/* 404 Illustration */}
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

      {/* Error Message */}
      <h1 className='text-6xl font-bold text-primary tracking-tight mb-4'>
        404
      </h1>
      <h2 className='text-2xl font-medium text-secondary mb-6'>
        Page Not Found
      </h2>
      <p className='text-accent mb-8'>
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Action Buttons */}
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
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
    </div>
  );
}
