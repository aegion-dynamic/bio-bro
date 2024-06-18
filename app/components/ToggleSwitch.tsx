"use client";

import React, { useState } from "react";

interface ToggleSwitchProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        id={label}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className="hidden" // Visually hide the checkbox
      />
      <label
        htmlFor={label}
        className={`
          relative inline-flex items-center w-11 h-6 rounded-full p-1
          cursor-pointer transition-colors ease-in-out duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
          ${isChecked ? "bg-blue-600" : "bg-gray-200"}
        `}
      >
        <span
          className={`
            inline-block w-4 h-4 rounded-full bg-white
            shadow transform transition ease-in-out duration-200
            ${isChecked ? "translate-x-5" : "translate-x-1"}
          `}
        ></span>
      </label>
      <span className="ml-2 text-gray-700 text-sm font-medium">{label}</span>
    </div>
  );
};

export default ToggleSwitch;
