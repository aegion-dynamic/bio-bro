import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 p-4 flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Bio Bro</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-md px-4 py-2 focus:outline-none text-black"
          />
          <button className="bg-blue-600 rounded-r-md px-4 py-2 hover:bg-blue-700">
            <BsSearch color="white" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
