"use client";

import { Button, Checkbox } from "@usememos/mui";
import { ChevronLeftIcon, SendIcon, XIcon } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <Checkbox checked label="test" onChange={() => {}} />
      <Button color="primary" variant="contained">
        {"This is Button"}
      </Button>
      <Button color="primary" variant="contained" disabled>
        {"This is Button"}
      </Button>
      <Button color="primary" size="sm" variant="contained">
        {"This is Button"}
      </Button>
      <Button size="sm" variant="outlined">
        {"This is Button"}
      </Button>
      <Button color="primary" variant="outlined">
        {"This is Button"}
      </Button>

      <Button variant="plain">
        <ChevronLeftIcon className="w-5 h-auto opacity-70 mr-1" />
        Collapse
      </Button>
      <Button size="sm">
        <XIcon />
      </Button>
      <Button size="lg">Collapse</Button>

      <Button color="primary">
        <span>Save</span>
        <SendIcon className="ml-1" size={16} />
      </Button>
    </div>
  );
}
