import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Domain Driven Development",
  description: "Buy that domain name first! Develop later",
  keywords: [
    "domain",
    "development",
    "ddd",
    "domain driven development",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: {
    name: "K Srinivas Rao",
    url: "https://twitter.com/Srinu53168",
  },
  creator: "K Srinivas Rao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://domaindrivendevelopment.xyz",
    title: "Domain Driven Development",
    description: "Buy that domain name first! Develop later",
    siteName: "Domain Driven Development",
    images: [
      {
        url: "https://memelogy-images.s3.amazonaws.com/425efd3d-0f67-400a-9c2d-d9422a5be683.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain Driven Development",
    description: "Buy that domain name first! Develop later",
    images: [
      "https://memelogy-images.s3.amazonaws.com/425efd3d-0f67-400a-9c2d-d9422a5be683.jpg",
    ],
    creator: "@Srinu53168",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
