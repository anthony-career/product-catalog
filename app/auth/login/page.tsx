"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "components/design-system/Input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div className='min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center space-x-2 mb-4'>
            <svg
              className='w-8 h-8 text-black'
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
            <span className='text-2xl font-bold text-black tracking-tight'>
              ShopNow
            </span>
          </div>
          <p className='text-[#666666] mt-2'>
            Welcome back! Please sign in to your account.
          </p>
        </div>

        <div className='bg-white p-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.05)]'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
              >
                Email address
              </label>
              <Input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='Enter your email'
                className='w-full'
              />
            </div>

            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
              >
                Password
              </label>
              <Input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Enter your password'
                className='w-full'
              />
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='remember'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='h-4 w-4 text-black focus:ring-black border-gray-200'
                />
                <label
                  htmlFor='remember'
                  className='ml-2 block text-sm text-[#666666]'
                >
                  Remember me
                </label>
              </div>
              <Link
                href='/auth/forgot-password'
                className='text-sm font-medium text-blue-800 hover:text-blue-400'
              >
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white py-2 px-4 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'
            >
              Sign in
            </button>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-[#666666]'>
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type='button'
              className='w-full mt-6 inline-flex justify-center py-2 px-4 border border-gray-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] bg-white text-sm font-medium text-[#666666] hover:bg-[#F0F0F0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z' />
              </svg>
            </button>
          </div>

          <p className='mt-8 text-center text-sm text-[#666666]'>
            Don't have an account?{" "}
            <Link
              href='/auth/signup'
              className='font-medium text-blue-800 hover:text-blue-400'
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
