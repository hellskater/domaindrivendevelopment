import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domain Driven Development",
  description: "Buy that domain name first! Develop later",
  openGraph: {
    images: [
      {
        url: "https://memelogy-images.s3.amazonaws.com/425efd3d-0f67-400a-9c2d-d9422a5be683.jpg",
      },
    ],
  },
  keywords: [
    "domain",
    "development",
    "ddd",
    "domain driven development",
    "react",
    "nextjs",
  ],
  authors: {
    name: "K Srinivas Rao",
    url: "https://twitter.com/Srinu53168",
  },
  creator: "K Srinivas Rao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
