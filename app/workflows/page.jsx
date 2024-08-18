import React from "react";
import WorkflowCard from "@/app/components/WorkflowCard";
import { workflows } from "app/utils/workflowsData";
import PageContainer from "app/components/PageContainer";
import GridContainer from "app/components/GridContainer";

const Workflows = () => {
  return (
    <PageContainer name="Workflows">
      <GridContainer>
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.name} {...workflow} />
        ))}
      </GridContainer>
    </PageContainer>
  );
};

export default Workflows;
