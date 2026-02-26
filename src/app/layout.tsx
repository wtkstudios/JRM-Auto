import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: `${siteConfig.businessName} - Premium Vehicle Care in Coventry`,
  description: siteConfig.tagline,
  keywords: ["mechanic", "Coventry", "garage", "MOT", "engine rebuild", "vehicle diagnostics"],
  authors: [{ name: siteConfig.businessName }],
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.tagline,
    url: siteConfig.googleProfileUrl,
    siteName: siteConfig.businessName,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen antialiased flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
