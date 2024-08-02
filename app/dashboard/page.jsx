"use client";
import React from "react";
import Card from "@/app/components/Card";
import WorkflowCard from "@/app/components/WorkflowCard";
import Button from "@/app/components/Button";
import PageContainer from "app/components/PageContainer";
import PageSection from "app/components/PageSection";
import GridContainer from "app/components/GridContainer";
import { workflows } from "app/utils/workflowsData";
import Link from "node_modules/next/link";

const Dashboard = () => {
  return (
    <PageContainer name="Dashboard">
      <PageSection name="Recent Workflows">
        <GridContainer>
          {workflows.map((workflow, index) => {
            if (index + 1 == workflows.length) return;
            console.log(workflows.length);
            return <WorkflowCard key={workflow.name} {...workflow} />;
          })}
        </GridContainer>
        <GridContainer>
          <Button onClick={() => console.log("Create new workflow")}>
            Create New Workflow
          </Button>
          <Link
            href="/workflows"
            className="px-4 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-ou bg-gray-200 hover:bg-gray-300 text-gray-700"
            style={{ "text-align": "center" }}
          >
            View All Workflows
          </Link>
        </GridContainer>
      </PageSection>
    </PageContainer>
  );
};

export default Dashboard;
