import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Demo Hub",
  description: "Sales demo hub for integration flows.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
