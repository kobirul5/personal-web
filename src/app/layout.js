import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


export const metadata = {
  title: "Md. Kobirul Islam",
  description: "I’m a MERN Stack Developer, building responsive and scalable web apps with MongoDB, Express.js, React.js, and Node.js. Passionate about clean code and user-friendly design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`jetbrains-mono antialiased bg-background text-textColor pb-10`}
      >
        <Header></Header>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
