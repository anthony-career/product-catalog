import { forwardRef, InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = "",
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseInputStyles = `
      px-4 
      py-3 
      bg-white 
      border 
      text-sm 
      text-primary
      placeholder-gray-400 
      focus:outline-none 
      focus:ring-1 
      transition-colors
      disabled:bg-gray-50 
      disabled:text-gray-500 
      disabled:cursor-not-allowed
    `;

    const stateStyles = error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500"
      : "border-gray-200 focus:border-primary focus:ring-primary";

    const widthStyles = fullWidth ? "w-full" : "";

    const inputClasses = twMerge(
      baseInputStyles,
      stateStyles,
      widthStyles,
      leftIcon && "pl-10",
      rightIcon && "pr-10",
      className
    );

    return (
      <div className={`flex flex-col gap-1 ${widthStyles}`}>
        {label && (
          <label className='text-sm font-medium text-primary'>{label}</label>
        )}
        <div className='relative'>
          {leftIcon && (
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={inputClasses}
            disabled={disabled}
            {...props}
          />
          {rightIcon && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
              {rightIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Usage examples:
/*
// Basic input
<Input placeholder="Enter your name" />

// With label and helper text
<Input 
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

// With error
<Input 
  label="Password"
  type="password"
  error="Password is required"
/>

// With icons
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

<Input 
  placeholder="Search..."
  leftIcon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
  rightIcon={<XMarkIcon className="w-5 h-5 text-gray-400" />}
/>

// Full width
<Input 
  placeholder="Full width input"
  fullWidth
/>

// Disabled
<Input 
  placeholder="Disabled input"
  disabled
/>
*/
