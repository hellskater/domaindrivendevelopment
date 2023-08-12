import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";

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
        url: "https://domaindrivendevelopment.xyz/og.jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain Driven Development",
    description: "Buy that domain name first! Develop later",
    images: ["https://domaindrivendevelopment.xyz/og.jpeg"],
    creator: "@Srinu53168",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("bg-black text-white", inter.className)}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
