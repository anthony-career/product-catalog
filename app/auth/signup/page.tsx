"use client";

import { Input } from "components/design-system/Input";
import { useSignupForm } from "./hooks/useSignupForm";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const { handleOnSubmit, getFieldProps, isLoading, isSuccess } =
    useSignupForm();
  const router = useRouter();

  if (isSuccess) {
    router.push("/products/all");
  }

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
            Create your account to get started.
          </p>
        </div>

        <div className='bg-white p-8 shadow-[0_2px_4px_0_rgba(0,0,0,0.05)]'>
          <form onSubmit={handleOnSubmit} className='space-y-6'>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-black uppercase tracking-wide mb-1'
                >
                  First name
                </label>
                <Input
                  {...getFieldProps("firstName")}
                  className='w-full'
                  placeholder='John'
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
                  {...getFieldProps("lastName")}
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
                {...getFieldProps("email")}
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
                {...getFieldProps("password")}
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
                {...getFieldProps("confirmPassword")}
                placeholder='Confirm your password'
                className='w-full'
              />
            </div>

            <button
              disabled={isLoading}
              type='submit'
              className='w-full bg-black text-white py-2 px-4 hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors shadow-[0_2px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]'
            >
              Create account
            </button>
          </form>

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
