import type { Metadata } from "next";
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
