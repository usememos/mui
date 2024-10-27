import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] dark:bg-zinc-900 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link href="/components/button">Button</Link>
        <Link href="/components/checkbox">Checkbox</Link>
      </main>
    </div>
  );
}
