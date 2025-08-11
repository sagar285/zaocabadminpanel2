import React from 'react';

const Input = React.forwardRef(({ className = "", type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={`
        flex h-10 w-full rounded-md border border-gray-200
        bg-white px-3 py-2 text-sm text-gray-900 
        placeholder:text-gray-500
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        disabled:cursor-not-allowed disabled:opacity-50
        ${className}
      `}
      value={props.value}
      onChange={props.onChange}
      ref={ref}
      {...props}
     
    />
  );
});

Input.displayName = "Input";

export default Input;