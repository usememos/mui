"use client";

import { Textarea } from "@usememos/mui";

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
        <p className="text-muted-foreground mt-2">
          A multiline text input component for longer content
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Examples</h3>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="text-sm font-medium block mb-2">Message</label>
              <Textarea placeholder="Type your message here..." />
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Disabled</label>
              <Textarea placeholder="This textarea is disabled" disabled />
            </div>

            <div>
              <label className="text-sm font-medium block mb-2">With default value</label>
              <Textarea defaultValue="This is a default value in the textarea." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}