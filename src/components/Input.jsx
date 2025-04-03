import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          className="block mb-2 text-sm font-medium text-gray-700"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      {/* Input Field */}
      <input
        type={type}
        id={id}
        ref={ref}
        className={`px-4 py-2 rounded-lg w-full border border-gray-300 bg-white text-black shadow-sm outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200 ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
