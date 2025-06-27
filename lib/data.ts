import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ssmartImage from "@/public/ssmart.png";
import dauWebsiteImg from "@/public/dauWebsiteImg.png";
import topCheckinImg from "@/public/topCheckinImg.png";
import vsoftImg from "@/public/vsoftImg.jpg";
import ledScrollingImg from "@/public/ledScrollingImg.png";
import yalyCoutureImg from "@/public/yalyCoutureImg.png";
import translationApiImg from "@/public/translationApiImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated with Excellence",
    location: "Da Nang Architecture University, Vietnam",
    description:
      "I completed my Bachelor's degree in Information Technology with a GPA of 3.74/4. I also participated in scientific research and programming competitions.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2023",
  },
  {
    title: "Internship Flutter Developer",
    location: " SDC - Software Development Centre, Vietnam",
    description: "Worked as a flutter developer.",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Software Engineer",
    location: "Enlab Software, Vietnam",
    description:
      "Worked as a software engineer, developing mobile and web applications using Flutter, Angular, and NestJS. I gained experience in CI/CD, REST API development, and database management.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer",
    location: "PNL Software, Vietnam",
    description:
      "Focused on mobile and backend development using Flutter, NestJS, and Docker. Built project architectures, implemented CI/CD pipelines, and deployed software solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "SSmart",
    link: "https://play.google.com/store/apps/details?id=com.spsolution.ssmart&pcampaignid=web_share",
    description:
      "Smart - The ultimate app for store management, membership cards, rewards earning and booking services.",
    tags: ["Flutter", "Nest.js", "Next.js", "Docker", "Firebase"],
    imageUrl: ssmartImage,
  },
  {
    title: "Translation API",
    link: "https://translate.vnv.io.vn",
    description:
      "Powerful multilingual translation solution with flexible API for text, documents, images and more.",
    tags: ["Python", "PostgreSQL", "TypeScript", "NextJS"],
    imageUrl: translationApiImg, // Thay bằng đường dẫn hoặc biến hình ảnh phù hợp
  },
  {
    title: "YalyCouture",
    link: "https://yalycouture.com",
    description:
      "An international e-commerce platform for Yaly Couture, providing a seamless shopping experience with integrated payment and global shipping solutions.",
    tags: ["NestJS", "PostgreSQL", "TypeScript", "PayPal"],
    imageUrl: yalyCoutureImg,
  },
  {
    title: "Da Nang Architecture University Website",
    link: "https://dau.edu.vn",
    description:
      "A university website providing faculty and club information. Includes an admin panel for managing the system and user roles.",
    tags: ["Flask", "Python", "MySQL", "REST API", "Web Development"],
    imageUrl: dauWebsiteImg,
  },
  {
    title: "LED Scrolling",
    link: "https://led-scrolling-web.vercel.app",
    description:
      "A real-time LED text display application that allows users to customize scrolling messages with various effects.",
    tags: [
      "Flutter",
      "Next.js",
      "Tailwind CSS",
      "Firebase",
      "Web & Mobile Development",
    ],
    imageUrl: ledScrollingImg, // Thay bằng đường dẫn hoặc biến hình ảnh phù hợp
  },
  {
    title: "TopCheckin",
    link: "#", // Thay bằng link thực tế nếu có
    description:
      "A mobile and web application for managing employee check-ins and attendance tracking. It features real-time location tracking, automatic check-in reminders, data analytics...",
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API"],
    imageUrl: topCheckinImg, // Thay bằng đường dẫn hoặc biến hình ảnh phù hợp
  },
  {
    title: "VTECT Mobile App",
    link: "#", // Thay bằng link thực tế nếu có
    description:
      "A mobile application for remote store management, including customer management, inventory tracking, order processing, real-time attendance tracking, and various business features...",
    tags: ["Flutter", "Dart", "SQL Server", "Firebase"],
    imageUrl: vsoftImg, // Thay bằng đường dẫn hoặc biến hình ảnh phù hợp
  },
] as const;

export const skillsData = [
  "Flutter",
  "Node.js",
  "Nest.js",
  "Next.js",
  "Git",
  "Docker",
  "Nginx",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
  "Java",
  "Firebase",
  "AppWrite",
] as const;
