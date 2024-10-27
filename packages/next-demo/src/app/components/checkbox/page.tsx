"use client";

import { Checkbox } from "@usememos/mui";
import React from "react";

export default function Home() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="YES" />
      <Checkbox checked readOnly />
      <Checkbox disabled />
      <Checkbox size="sm" />
      <Checkbox size="lg" />
      <Checkbox label="YES" />
    </div>
  );
}
