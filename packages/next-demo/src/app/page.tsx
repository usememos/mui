import { Button } from "@usememos/mui";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button className="w-64 justify-center" color="primary">
          {"This is Button"}
        </Button>
      </main>
    </div>
  );
}
