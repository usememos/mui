"use client";

import { Input } from "@usememos/mui";

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-muted-foreground mt-2">
          A text input component for user data entry
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Examples</h3>
          <div className="space-y-4 max-w-sm">
            <div>
              <label className="text-sm font-medium block mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Password</label>
              <Input type="password" placeholder="Enter your password" />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">Disabled</label>
              <Input placeholder="Disabled input" disabled />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">File</label>
              <Input type="file" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}