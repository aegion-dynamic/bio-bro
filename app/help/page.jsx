"use client";

import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import FAQItem from "../components/FAQItem";
import ContactForm from "../components/ContactForm";
import PageContainer from "app/components/PageContainer";
import PageSection from "app/components/PageSection";

const Help = () => {
  return (
    <PageContainer name="Help & Support">
      {/* Help Content */}
      <PageSection name="FAQs">
        <FAQItem
          question="How do I create a new workflow?"
          answer="To create a new workflow, click on the 'New Workflow' button on the dashboard and follow the wizard."
        />
        <FAQItem
          question="How do I interpret the results of a workflow?"
          answer="The results of a workflow depend on the specific analysis you ran. Generally, you'll find output files (e.g., tables, plots) in the workflow's results section. Our documentation provides detailed explanations for interpreting the output of each workflow type."
        />
      </PageSection>

      <PageSection name="Contact Us">
        <ContactForm />
      </PageSection>
    </PageContainer>
  );
};

export default Help;
