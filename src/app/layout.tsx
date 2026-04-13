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
  title: "Rudrx.dev | Custom SaaS, ERP Systems & Workflow Automation | Rudrax Techlabs",
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
        url: "/main_cropped_whiteR.svg",
        width: 1200,
        height: 1200,
        alt: "Rudrx.dev logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudrx.dev | Custom SaaS, ERP Systems & Workflow Automation",
    description: "Rudrx.dev (Rudrax Techlabs) builds custom SaaS platforms, ERP systems, and workflow automations for businesses.",
    images: ["/main_cropped_whiteR.svg"],
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