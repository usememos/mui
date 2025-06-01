"use client";

import { Checkbox, Switch } from "@usememos/mui";
import React from "react";

export default function Home() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="YES" />
      <Checkbox checked readOnly />
      <Checkbox disabled />
      <Checkbox size="sm" />
      <Checkbox size="lg" />
      <Checkbox label="YES" />
      <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </div>
  );
}
