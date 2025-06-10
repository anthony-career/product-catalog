"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "components/design-system/Input";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className='min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        {/* Logo/Brand */}
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
            Create your account to get started.
          </p>
        </div>

        {/* Sign Up Form */}
        <div className='bg-white p-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.05)]'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
                >
                  First name
                </label>
                <Input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder='John'
                  className='w-full'
                />
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
                >
                  Last name
                </label>
                <Input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder='Doe'
                  className='w-full'
                />
              </div>
            </div>

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
                name='email'
                value={formData.email}
                onChange={handleChange}
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
                name='password'
                value={formData.password}
                onChange={handleChange}
                required
                placeholder='Create a password'
                className='w-full'
              />
            </div>

            <div>
              <label
                htmlFor='confirmPassword'
                className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
              >
                Confirm password
              </label>
              <Input
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder='Confirm your password'
                className='w-full'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-black text-white py-2 px-4 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'
            >
              Create account
            </button>
          </form>

          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-[#666666]'>
                  Or sign up with
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
            Already have an account?{" "}
            <Link
              href='/auth/login'
              className='font-medium text-blue-800 hover:text-blue-400'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
