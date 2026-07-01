import { createMetadata } from "@/lib/seo";
import { ReactNode } from "react";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Explore Kobirul Islam's portfolio projects — Friendzo social platform, Al Huda Islamic learning app, SwiftLearn LMS, EzyTicket, Work Nest, and more full-stack web applications.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
