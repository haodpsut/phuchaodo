"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg leading-relaxed">
        I am a dedicated and detail-oriented{" "}
        <span className="font-bold">Software Engineer</span> with a passion for
        building high-performance{" "}
        <span className="italic">mobile and web applications</span>. My
        expertise lies in{" "}
        <span className="font-medium">Flutter, NestJS, and PostgreSQL</span>,
        with a strong background in{" "}
        <span className="font-medium">
          backend development, system architecture, and DevOps
        </span>
        .
      </p>

      <p className="mb-3 text-lg leading-relaxed">
        I have{" "}
        <span className="font-bold">
          {new Date().getFullYear() - 2021} years
        </span>{" "}
        of experience working on real-world projects, including{" "}
        <span className="font-medium">
          business management platforms, CRM systems, and e-commerce solutions
        </span>
        . My development approach follows{" "}
        <span className="underline">Clean Architecture</span>,{" "}
        <span className="underline">SOLID principles</span>, and best practices
        to ensure maintainability and scalability.
      </p>

      <p className="text-lg leading-relaxed">
        I am always eager to{" "}
        <span className="italic">
          learn new technologies, optimize workflows, and solve complex problems
        </span>
        to deliver{" "}
        <span className="font-medium">
          efficient and scalable software solutions
        </span>
        . My goal is to grow as a{" "}
        <span className="font-bold">Full Stack Professional Developer</span> and
        contribute to impactful projects.
      </p>
    </motion.section>
  );
}
