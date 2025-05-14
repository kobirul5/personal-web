import CanvasCursor from "@/components/Corsor";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Head from "next/head";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Md. Kobirul Islam",
  description: "I’m a MERN Stack Developer, building responsive and scalable web apps with MongoDB, Express.js, React.js, and Node.js. Passionate about clean code and user-friendly design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/" />
      </Head>
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
