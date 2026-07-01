import { createMetadata } from "@/lib/seo";
import { ReactNode } from "react";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Kobirul Islam — Full Stack Developer available for hire. Contact via email, phone, or the contact form. Based in Sirajganj, Bangladesh.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
