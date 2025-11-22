import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "We Love Car Insurance - Persoonlijk advies. Slim verzekerd.",
  description: "Persoonlijk advies. Slim verzekerd.",
  icons: {
    icon: [
      { url: '/favicon.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png?v=2', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png?v=2',
  },
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

