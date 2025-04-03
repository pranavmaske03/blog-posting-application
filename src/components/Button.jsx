import React from 'react';

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    hoverColor = 'hover:bg-blue-700',
    activeColor = 'active:bg-blue-800',
    borderRadius = 'rounded-md',
    padding = 'px-6 py-2',
    fontSize = 'text-base',
    fontWeight = 'font-semibold',
    isLoading = false,
    disabled = false,
    className = '',
    ...props
}) {
    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            className={`
                ${padding} ${borderRadius} ${fontSize} ${fontWeight}
                transition-all duration-300 ease-in-out transform 
                ${bgColor} ${textColor} ${hoverColor} ${activeColor} 
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:ring-4 focus:outline-none focus:ring-blue-300 
                shadow-md hover:shadow-lg
                ${className}
            `}
            {...props}
        >
            {isLoading ? (
                <span className="flex items-center justify-center">
                    <svg
                        className="animate-spin h-5 w-5 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
}

export default Button;
