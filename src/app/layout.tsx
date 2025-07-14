import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Serena Blake",
  description: "Personal website for a therapist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
