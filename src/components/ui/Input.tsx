import { forwardRef } from "react";

interface InputProps {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      type = "text",
      placeholder,
      required = false,
      disabled = false,
      className = "",
      id,
      name,
      value,
      onChange,
      onBlur,
    },
    ref
  ) => {
    const inputId = id || name;

    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          type={type}
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
          block w-full px-4 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
          border border-slate-200/50 dark:border-gray-600/50 rounded-xl shadow-sm text-sm
          placeholder-slate-400 dark:placeholder-slate-500 
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
          transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-800/90
          disabled:opacity-50 disabled:cursor-not-allowed
          dark:text-white
          ${
            error
              ? "border-red-300 focus:ring-red-500 dark:border-red-600 bg-red-50/50 dark:bg-red-900/20"
              : ""
          }
        `}
        />
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
