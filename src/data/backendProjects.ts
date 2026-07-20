export interface BackendProject {
  id: string;
  title: string;
  description: string;
  overview: string;
  techStack: string[];
  features: string[];
  screenshots?: string[];
  appType?: "web" | "mobile" | "together";
  github?: string;
  githubClient?: string;
  live?: string;
  playStore?: string;
  appStore?: string;
}

export const backendProjects: BackendProject[] = [
  {
    id: "tuitioni",
    title: "Tuitioni - Tutor Booking & Learning Marketplace API",
    description:
      "A secure, scalable RESTful API powering user authentication, tutor discovery, booking workflows, payments, real-time chats, notifications, and admin moderation.",
    overview:
      "Tuitioni is a robust backend system designed to connect students with tutors. It supports three major roles (Student, Tutor, Admin) and is built with a clean modular architecture (Services, Controllers, Routes, Validations) for high maintainability.",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma ORM",
      "MongoDB",
      "Zod Validation",
      "JWT & bcrypt",
      "Stripe Payments",
      "Firebase Admin",
      "WebSocket",
      "Cloudinary / S3",
    ],
    features: [
      "Role-based authentication & authorization (Student, Tutor, Admin)",
      "Secure Cookie-based JWT sessions with token refresh mechanism",
      "Onboarding & approval workflows for new Tutors",
      "Tutor discovery engine with filtering by price, subject, and rating",
      "Stripe payment integration for tutor earnings and payment processing",
      "Real-time chat messaging using WebSocket with image attachments",
      "Push notification dispatch via Firebase Cloud Messaging (FCM)",
      "Admin dashboard with user moderation, warnings, and system metrics",
    ],
    screenshots: ["/tuitioni/1.jpg"],
    appType: "web",
    github: "https://github.com/kobirul5",
    appStore: "https://apps.apple.com/us/app/tuitioni/id6776081845",
  },
  {
    id: "together-backend",
    title: "Together App - Social Platform",
    description:
      "A full-stack social platform with a Next.js frontend and Express + TypeScript backend. Handles authentication, social activity, messaging, payments, media uploads, admin tools, and background cron jobs.",
    overview:
      "Together App is a full-stack social platform where both the web client and backend API are developed by me. The backend stores social data in MongoDB via Prisma, supports real-time chat via WebSocket, manages a virtual economy (coins, gifts, gift cards), and runs background cron jobs — all organized into domain-scoped feature modules.",
    techStack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Prisma ORM",
      "MongoDB",
      "WebSocket",
      "JWT & Bcrypt",
      "Stripe Payments",
      "Cloudinary",
      "DigitalOcean Spaces",
      "Firebase Admin",
      "Nodemailer",
      "node-cron",
    ],
    features: [
      "JWT access & refresh token authentication with OTP password reset flow",
      "Social feeds: memories, events, likes, comments, follows, and discovery",
      "Real-time chat with persistence and file upload support via WebSocket",
      "Virtual economy: coins, gifts, gift cards, and subscription plans",
      "Stripe payment integration for payment creation and tracking",
      "Admin moderation APIs: users, posts, reports, interests, and pricing",
      "Safety tools: report and block user flows",
      "Background cron jobs: keep-alive ping, daily boost decrements, event date shifts",
    ],
    screenshots: [
      "/together/1.png",
      "/together/2.png",
      "/together/3.png",
      "/together/4.png",
      "/together/5.png",
    ],
    // appType: "together",
    github: "https://github.com/kobirul5/together_app_server",
    playStore:
      "https://play.google.com/store/apps/details?id=com.togetherapps.together",
    appStore:
      "https://apps.apple.com/us/app/together-we-have-it-all/id6751863906",
  },
];
