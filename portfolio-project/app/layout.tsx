import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alireza — Computer Science Student",
  description:
    "Alireza's portfolio. A Computer Science student building modern web experiences with clean design and animations.",
  keywords: [
    "Alireza",
    "Developer",
    "Computer Science",
    "Next.js",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Alireza" }],
  creator: "Alireza",
  openGraph: {
    title: "Alireza — Computer Science Student",
    description:
      "Building things until they feel right.",
    type: "website",
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