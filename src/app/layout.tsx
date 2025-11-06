import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "We Love Car Insurance",
  description: "Onafhankelijk advies. Slim verzekerd.",
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

