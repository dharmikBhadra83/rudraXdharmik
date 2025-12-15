import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rudrx.dev | Custom SaaS, ERP Systems & Workflow Automation | Rudrax Techlabs | Rudrax",
  description: "Rudrx.dev (Rudrax Techlabs) builds custom SaaS platforms, ERP systems, and workflow automations for businesses. We design software that actually works—focused on clarity, control, and efficiency. Expert in custom ERP development, SaaS products, internal tools, and business automation.",
  keywords: [
    "Rudrx.dev",
    "Rudrax",
    "Rudrax Techlabs",
    "custom SaaS development",
    "ERP systems",
    "workflow automation",
    "custom software development",
    "business automation",
    "SaaS platform development",
    "ERP software",
    "internal tools development",
    "system integrations",
    "software development company",
    "custom ERP solutions",
    "SaaS product development",
    "business process automation",
    "enterprise software",
    "custom software solutions",
    "software studio",
    "operational automation",
  ],
  authors: [{ name: "Rudrx.dev" }],
  creator: "Rudrx.dev",
  publisher: "Rudrx.dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rudrx.dev",
    siteName: "Rudrx.dev",
    title: "Rudrx.dev | Custom SaaS, ERP Systems & Workflow Automation",
    description: "Rudrx.dev (Rudrax Techlabs) builds custom SaaS platforms, ERP systems, and workflow automations for businesses. We design software that actually works—focused on clarity, control, and efficiency.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rudrx.dev - Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrx.dev | Custom SaaS, ERP Systems & Workflow Automation",
    description: "Rudrx.dev (Rudrax Techlabs) builds custom SaaS platforms, ERP systems, and workflow automations for businesses.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rudrx.dev",
  },
  metadataBase: new URL("https://rudrx.dev"),
  category: "technology",
  classification: "Software Development, SaaS, ERP Systems, Business Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
