import React from "react";

const Footer = () => {
  return (
    <footer className='footer-gradient'>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 p-8 bg-footerDark'>
          <div>
            <h3 className='text-sm font-medium text-white mb-4'>About Us</h3>
            <p className='text-sm text-gray-400'>
              Premium quality products for the modern lifestyle.
            </p>
          </div>
          <div>
            <h3 className='text-sm font-medium text-white mb-4'>
              Customer Service
            </h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-medium text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  New Arrivals
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Best Sellers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-sm font-medium text-white mb-4'>Newsletter</h3>
            <div className='flex'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-3 py-2 bg-footerLight border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-600'
              />
              <button className='bg-white text-footerDark px-4 py-2 text-sm hover:bg-gray-100 transition-colors'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className='bg-footerLight text-center text-gray-400 text-sm py-6'>
          © 2024 ShopNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
