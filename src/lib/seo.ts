import type { Metadata } from "next";

export const siteConfig = {
  name: "Md. Kobirul Islam",
  shortName: "Kobirul Islam",
  title: "Md. Kobirul Islam | Full Stack Developer",
  description:
    "Md. Kobirul Islam is a Full Stack Developer specializing in Node.js, Express.js, TypeScript, React.js, and Next.js. Currently working as a Backend Developer at SM Technology. Based in Sirajganj, Bangladesh.",
  url: "https://kobirul.dev",
  ogImage: "/assets/kobirul4.png",
  locale: "en_US",
  creator: "@kobirul5",
  email: "kobirul05j@gmail.com",
  phone: "+8801990955633",
  location: "Sirajganj, Bangladesh",
  github: "https://github.com/kobirul5",
  linkedin: "https://www.linkedin.com/in/kobirul-islam/",
  facebook: "https://www.facebook.com/kobirul0k",
  keywords: [
    "Kobirul Islam",
    "Full Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "MongoDB",
    "Express.js",
    "Prisma ORM",
    "WebSocket",
    "Bangladesh Developer",
    "SM Technology",
    "Portfolio",
    "Web Developer Bangladesh",
  ],
} as const;

export const siteRoutes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/skills", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
];

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: `${siteConfig.shortName} - Portfolio`,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.creator,
      images: [image],
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.shortName} - Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.creator,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/kobirul4.png",
    apple: "/assets/kobirul4.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};
