"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Workflows", href: "/workflows" },
    { label: "Data", href: "/data" },
    { label: "Settings", href: "/settings" },
    { label: "Help", href: "/help" },
  ];

  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-200">
      {" "}
      {/* White bg, right border */}
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`
                block px-4 py-2 rounded-md text-gray-700 
                hover:bg-gray-100 transition-colors duration-200 
                ${
                  pathname === link.href
                    ? "bg-blue-100 text-blue-600" // Active link (lighter blue)
                    : ""
                }
              `}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
