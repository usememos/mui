"use client";

import { useState } from "react";
import { Switch } from "@usememos/mui";

export default function SwitchPage() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Switch</h1>
        <p className="text-muted-foreground mt-2">
          A toggle switch component for boolean settings
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Examples</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <label htmlFor="airplane-mode" className="text-sm font-medium">
                Airplane Mode
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="controlled" checked={enabled} onCheckedChange={setEnabled} />
              <label htmlFor="controlled" className="text-sm font-medium">
                Controlled switch ({enabled ? "on" : "off"})
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="disabled" disabled />
              <label htmlFor="disabled" className="text-sm font-medium">
                Disabled switch
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}