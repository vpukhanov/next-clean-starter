import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Clean Starter",
  description: "A starter template for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
