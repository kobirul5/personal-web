import CanvasCursor from "@/components/Corsor";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";
import { PersonJsonLd, ProfilePageJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { ReactNode } from "react";

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PersonJsonLd />
        <WebSiteJsonLd />
        <ProfilePageJsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`jetbrains-mono antialiased bg-background text-textColor `}
        suppressHydrationWarning
      >
        {/* fab icon */}

        <Header></Header>
        {/* <div className=" pt-20"></div> */}
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        {/* cursor effect */}
        <CanvasCursor />
        <Footer />
      </body>
    </html>
  );
}
