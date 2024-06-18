import React from "react";
import WorkflowCard from "@/app/components/WorkflowCard";

const Workflows = () => {
  const workflows = [
    { name: "RNA Sequencing Analysis", status: "running" },
    { name: "Variant Calling", status: "completed" },
    // ... more workflows
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Workflows</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.name} {...workflow} />
        ))}
      </div>
    </div>
  );
};

export default Workflows;
