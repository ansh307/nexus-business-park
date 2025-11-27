import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import { ReactLenis } from "@/utils/lenis";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexus Business Park",
  description: "Where Growth Meets Opportunity",
};

const interTight = localFont({
  src: [
    {
      path: "../public/Fonts/Inter_Tight/static/InterTight-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/Fonts/Inter_Tight/static/InterTight-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/Fonts/Inter_Tight/static/InterTight-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-interTight",
});

const interBody = localFont({
  src: [
    {
      path: "../public/Fonts/Inter/static/Inter_18pt-Medium.ttf",
      weight: "300",
    },
    {
      path: "../public/Fonts/Inter/static/Inter_18pt-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-interBody",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable}  ${interTight.variable} ${interBody.variable}  antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
