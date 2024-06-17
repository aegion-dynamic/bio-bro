import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/workflows">Workflows</Link>
        </li>
        <li>
          <Link href="/data">Data</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
