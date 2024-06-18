"use client";

import React from "react";

interface InputProps {
  label: string;
  type?: string; // Default to "text" if not specified
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-gray-700 text-sm font-medium mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="shadow-sm appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default Input;
