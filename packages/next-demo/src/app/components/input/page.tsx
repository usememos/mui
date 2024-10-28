"use client";

import { Input } from "@usememos/mui";
import { SearchIcon } from "lucide-react";
import React from "react";

export default function Home() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Input size="lg" value={value} onChange={(e) => setValue(e.target.value)} />

      <Input
        value={value}
        startDecorator={<SearchIcon className="w-4 h-auto" />}
        endDecorator="asdasd"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
