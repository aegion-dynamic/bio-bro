"use client";

import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left focus:outline-none"
      >
        <h3 className="text-gray-700 text-sm font-medium">{question}</h3>
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

export default FAQItem;
