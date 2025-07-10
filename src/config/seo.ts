import { Metadata } from "next";
import { APP_CONFIG } from "../constants/config";

export const siteConfig = {
  name: APP_CONFIG.NAME,
  description: APP_CONFIG.DESCRIPTION,
  url: APP_CONFIG.URL,
  ogImage: `${APP_CONFIG.URL}/og-image.png`,
  author: APP_CONFIG.AUTHOR,
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Web Development",
    "Modern Web App",
  ],
  creator: APP_CONFIG.AUTHOR,
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yourtwitterhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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

export function generatePageMetadata(
  title: string,
  description?: string,
  ogImage?: string
): Metadata {
  return {
    title,
    description: description || siteConfig.description,
    openGraph: {
      title,
      description: description || siteConfig.description,
      images: [ogImage || siteConfig.ogImage],
    },
    twitter: {
      title,
      description: description || siteConfig.description,
      images: [ogImage || siteConfig.ogImage],
    },
  };
}
