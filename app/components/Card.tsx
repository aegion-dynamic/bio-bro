"use client";
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h2 className="text-gray-800 text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
