import { createMetadata } from "@/lib/seo";
import { ReactNode } from "react";

export const metadata = createMetadata({
  title: "About Me",
  description:
    "Learn about Kobirul Islam — Full Stack Developer from Sirajganj, Bangladesh. Experience at SM Technology, education, skills, and professional background in Node.js, React, and Next.js.",
  path: "/about",
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
