import CanvasCursor from "@/components/Corsor";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Md. Kobirul Islam | Full Stack Developer",
  description: "Md. Kobirul Islam is a Full Stack Developer specializing in Node.js, Express.js, TypeScript, React.js, and Next.js. Currently working as a Backend Developer at SM Technology. Based in Sirajganj, Bangladesh.",
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
  ],
  authors: [{ name: "Md. Kobirul Islam", url: "https://github.com/kobirul5" }],
  creator: "Md. Kobirul Islam",
  openGraph: {
    title: "Md. Kobirul Islam | Full Stack Developer",
    description: "Full Stack Developer specializing in Node.js, Express.js, TypeScript, React.js & Next.js. Currently Backend Developer at SM Technology, Bangladesh.",
    url: "https://kobirul.dev",
    siteName: "Kobirul Islam - Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Kobirul Islam | Full Stack Developer",
    description: "Full Stack Developer specializing in Node.js, Express.js, TypeScript, React.js & Next.js.",
    creator: "@kobirul5",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`jetbrains-mono antialiased bg-background text-textColor `}
      >
        {/* fab icon */}

        <Header></Header>
        <div className=" pt-20"></div>
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
        {/* cursor effect */}
        <CanvasCursor />
        <Footer/>
      </body>
    </html>
  );
}
