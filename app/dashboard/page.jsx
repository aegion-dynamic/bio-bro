"use client";

import React from "react";
import Card from "@/app/components/Card";
import WorkflowCard from "@/app/components/WorkflowCard";
import Button from "@/app/components/Button";
import PageContainer from "app/components/PageContainer";
import GridContainer from "app/components/GridContainer";
import { workflows } from "app/utils/workflowsData";

const Dashboard = () => {
  return (
    <PageContainer name="Dashboard">
      <Button onClick={() => console.log("Create new workflow")}>
        Create New Workflow
      </Button>

      <Card title="Recent Workflows">
        <GridContainer>
          {workflows.map((workflow, index) => {
            if (index + 1 == workflows.length) return;
            console.log(workflows.length);
            return <WorkflowCard key={workflow.name} {...workflow} />;
          })}
        </GridContainer>
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
