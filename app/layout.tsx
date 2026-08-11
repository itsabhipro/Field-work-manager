import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Field Service Manager",
  description:
    "Digitize field operations — job management, technician tracking, and real-time status updates.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
