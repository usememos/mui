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
      <body>{children}</body>
    </html>
  );
}
