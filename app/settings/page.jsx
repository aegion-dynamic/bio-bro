"use client";

import React, { SetStateAction, useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import Input from "../components/Input";
import PageContainer from "app/components/PageContainer";
import PageSection from "app/components/PageSection";

const Settings = () => {
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] =
    useState(true);
  const [smsNotificationsEnabled, setSmsNotificationsEnabled] = useState(false);

  const handleEmailToggle = () => {
    setEmailNotificationsEnabled(!emailNotificationsEnabled);
  };

  const handleSmsToggle = () => {
    setSmsNotificationsEnabled(!smsNotificationsEnabled);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer name="Settings">
      <PageSection name="Account">
        {" "}
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </PageSection>
      <PageSection name="Notifications">
        <ToggleSwitch
          label="Email Notifications"
          checked={emailNotificationsEnabled}
          onChange={handleEmailToggle}
        />
        <ToggleSwitch
          label="SMS Notifications"
          checked={smsNotificationsEnabled}
          onChange={handleSmsToggle}
        />
      </PageSection>
      <PageSection name="Integrations">
        {/* ... Integration settings components */}
      </PageSection>
    </PageContainer>
  );
};

export default Settings;
