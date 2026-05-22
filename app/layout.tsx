import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishnu Datt Jangid | Senior Software Engineer",
  description:
    "Portfolio of Vishnu Datt Jangid - Senior Software Engineer with deep frontend expertise. Full-stack capable; React, Next.js, Node, web performance, design systems, scalable architecture."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
