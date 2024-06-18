"use client";

import React from "react";
import Card from "@/app/components/Card";
import WorkflowCard from "@/app/components/WorkflowCard";
import Button from "@/app/components/Button";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <Button onClick={() => console.log("Create new workflow")}>
        Create New Workflow
      </Button>

      <Card title="Recent Workflows">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WorkflowCard name="RNA Sequencing Analysis" status="running" />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
