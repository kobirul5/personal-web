import { createMetadata } from "@/lib/seo";
import { ReactNode } from "react";

export const metadata = createMetadata({
  title: "Skills",
  description:
    "Technical skills of Kobirul Islam — React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, Prisma ORM, PostgreSQL, Redis, WebSocket, and more.",
  path: "/skills",
});

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
