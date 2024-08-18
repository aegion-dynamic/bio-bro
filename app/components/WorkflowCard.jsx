import React from "react";

const WorkflowCard = ({ name, status }) => {
  const statusColor = {
    running: "bg-yellow-400",
    completed: "bg-green-400",
    failed: "bg-red-400",
  }[status];

  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h3 className="text-gray-800 text-base font-semibold mb-2">{name}</h3>
      <div
        className={`text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ${statusColor}`}
      >
        {status}
      </div>
    </div>
  );
};

export default WorkflowCard;
