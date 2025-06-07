import { forwardRef } from "react";
import { cn } from "../../lib/utils/cn";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      options,
      label,
      error,
      placeholder,
      value,
      defaultValue,
      ...props
    },
    ref
  ) => {
    return (
      <div className='w-full'>
        <div
          className={cn(
            "relative w-full px-2 py-1 bg-white border border-gray-200 shadow-subtle text-sm rounded-md h-7 min-w-[120px]",
            "focus-within:outline-none focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary",
            error &&
              "border-red-500 focus-within:border-red-500 focus-within:ring-red-500/20",
            className
          )}
        >
          <select
            ref={ref}
            className='w-full h-full bg-transparent border-none focus:outline-none focus:ring-0 p-0 text-sm text-primary appearance-none cursor-pointer'
            value={value}
            defaultValue={defaultValue}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className='pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-500' />
        </div>
        {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
