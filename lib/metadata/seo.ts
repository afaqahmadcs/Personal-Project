import { Metadata } from "next";

export const SITE_URL = "https://afaqahmad-cs.github.io"; // Root domain for portfolio

export const DEFAULT_SEO = {
  title: "Afaq Ahmad — AI & Full Stack Developer",
  description: "Bespoke personal portfolio of Afaq Ahmad, an AI & Full Stack Developer building real-world applications and exploring modern AI integrations from Peshawar, Pakistan.",
  siteName: "Afaq Ahmad Portfolio",
  locale: "en_US",
  twitterHandle: "@afaqahmadcs",
};

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  path = "",
  image = "/images/profile/navy-headshot.jpg",
  noIndex = false,
}: GenerateMetadataProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${DEFAULT_SEO.siteName}` : DEFAULT_SEO.title;
  const pageDescription = description || DEFAULT_SEO.description;
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: DEFAULT_SEO.siteName,
      locale: DEFAULT_SEO.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      creator: DEFAULT_SEO.twitterHandle,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    metadataBase: new URL(SITE_URL),
  };
}
