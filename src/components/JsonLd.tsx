import { siteConfig } from "@/lib/seo";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: "Full Stack Developer",
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sirajganj",
      addressCountry: "BD",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.facebook],
    worksFor: {
      "@type": "Organization",
      name: "SM Technology",
    },
    knowsAbout: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "React.js",
      "Next.js",
      "MongoDB",
      "Prisma ORM",
      "WebSocket",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.shortName} - Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfilePageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
      jobTitle: "Full Stack Developer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
