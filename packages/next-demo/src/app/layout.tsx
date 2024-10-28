import type { Metadata } from "next";
import "@usememos/mui/dist/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mui Demo",
  description: "The demo of Mui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-zinc-900">
        <div className="w-full flex flex-col justify-center items-center gap-8 px-20 py-10">{children}</div>
      </body>
    </html>
  );
}
