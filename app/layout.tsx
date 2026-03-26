import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Share Your Experience | Hive Roofing and Solar",
  description: "Tell us about your experience with Hive Roofing and Solar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
