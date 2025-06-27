"use client";

import { useState } from "react";
import { Checkbox } from "@usememos/mui";

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-muted-foreground mt-2">
          A checkbox component for boolean selections
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Examples</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="controlled" checked={checked} onCheckedChange={setChecked} />
              <label htmlFor="controlled" className="text-sm font-medium">
                Controlled checkbox ({checked ? "checked" : "unchecked"})
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <label htmlFor="disabled" className="text-sm font-medium">
                Disabled checkbox
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}