"use client";

import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import FAQItem from "../components/FAQItem";
import ContactForm from "../components/ContactForm";

const Help = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold flex items-center mb-4">
        <BsQuestionCircle className="mr-2" /> Help & Support
      </h1>

      {/* Help Content */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">FAQs</h2>
        <FAQItem
          question="How do I create a new workflow?"
          answer="To create a new workflow, click on the 'New Workflow' button on the dashboard and follow the wizard."
        />
        <FAQItem
          question="How do I interpret the results of a workflow?"
          answer="The results of a workflow depend on the specific analysis you ran. Generally, you'll find output files (e.g., tables, plots) in the workflow's results section. Our documentation provides detailed explanations for interpreting the output of each workflow type."
        />
      </section>

      <section>
        <h2 className="text-lg font-medium mb-2">Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Help;
