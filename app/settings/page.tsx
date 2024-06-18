"use client";

import React, { SetStateAction, useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import Input from "../components/Input";

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Settings Sections */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">Account</h2>
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
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">Notifications</h2>
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
      </section>

      <section>
        <h2 className="text-lg font-medium mb-2">Integrations</h2>
        {/* ... Integration settings components */}
      </section>
    </div>
  );
};

export default Settings;
