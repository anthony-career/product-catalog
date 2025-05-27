import React from "react";

const Header = () => {
  return (
    <header className='header-gradient border-b border-gray-800 sticky top-0 z-50'>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-4'>
        <div className='flex items-center justify-between'>
          <a href='/' className='flex items-center space-x-2'>
            <svg
              className='w-8 h-8 text-white'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
            <span className='text-xl font-bold text-white tracking-tight'>
              ShopNow
            </span>
          </a>
          <nav className='hidden md:flex space-x-6'>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition-colors'
            >
              New Arrivals
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition-colors'
            >
              Collections
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white transition-colors'
            >
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
