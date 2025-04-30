"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiCodeigniter,
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";
import { MonitorCog, LayoutDashboard, ClipboardList } from "lucide-react";

// Variants
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // fast-in smooth-out
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FeatureSection() {
  const techStack = [
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter className="text-[#ee4323]" size={20} />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="text-[#f9322c]" size={20} />,
    },
    { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-[#38bdf8]" size={20} />,
    },
    { name: "React", icon: <SiReact className="text-[#61dbfb]" size={20} /> },
  ];

  const roles = [
    {
      name: "Web Developer",
      icon: <MonitorCog className="text-blue-500" size={20} />,
    },
    {
      name: "Frontend Engineer",
      icon: <LayoutDashboard className="text-blue-500" size={20} />,
    },
    {
      name: "Project Manager",
      icon: <ClipboardList className="text-blue-500" size={20} />,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative bg-white rounded-t-[2rem] xs:rounded-t-[7rem] xl:min-h-[792px] xl:h-[85vh] pt-20 pb-10 xl:pb-0 px-6 lg:px-[6rem]"
    >
      <Image
        src="/index/person.webp"
        alt="Hashtag"
        width={800}
        height={800}
        className="absolute bottom-0  hidden lg:flex left-[50%] translate-x-[-50%] z-[2]"
      />
      <motion.div
        variants={cardVariants}
        className="grid lg:grid-cols-3 mx-auto z-[5] h-full"
      >
        <div className="relative h-full flex flex-col">
          <div className="py-5">
            <span className="2xl:text-7xl xl:text-6xl lg:text-5xl xs:text-8xl text-3xl font-semibold">
              LEARN
            </span>
            <span className="2xl:text-8xl xl:text-6xl lg:text-5xl xs:text-8xl text-3xl block font-bold">
              & GROW
            </span>
          </div>
          <p className="text-sm xs:text-lg text-left max-w-2xl text-black font-montserrat leading-relaxed">
            I craft thoughtful, user-centered experiences that not only solve
            problems but also enhance the way people interact with technology.
          </p>
          {/* KIRI BAWAH – Expertise */}
          <div className="mt-8 grid grid-cols-1 gap-3 max-w-full">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#F3F4F6] flex items-center gap-4 text-sm xs:text-base font-semibold px-4 py-3 rounded-xl shadow-sm"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=""></div>
        <div className="relative flex flex-col h-full">
          <div className="flex flex-col py-5 items-end">
            <h1 className="font-outfit 2xl:text-7xl xl:text-6xl lg:text-5xl xs:text-8xl text-3xl font-semibold">
              Hey there,
            </h1>
            <h1 className="font-outfit 2xl:text-7xl xl:text-6xl lg:text-5xl xs:text-8xl text-3xl font-bold">
              I’m Akbar <span className="xl:text-4xl text-3xl">👋</span>
            </h1>
          </div>
          <p className="text-sm xs:text-lg text-end max-w-2xl text-black font-montserrat leading-relaxed">
            I design and build purposeful web experiences with clean code, clear
            logic, and a strong sense of user empathy — drawing on my experience
            both as a <b>Web Developer</b> and a <b>Former Project Manager</b>.
          </p>
          {/* KANAN BAWAH – Roles */}
          <div className="mt-8 grid grid-cols-1 gap-3 max-w-full">
            {roles.map((role) => (
              <div
                key={role.name}
                className="bg-[#E0F2FE] flex items-center justify-end gap-3 text-sm xs:text-base font-semibold px-4 py-3 rounded-xl shadow-sm"
              >
                <span>{role.name}</span>
                {role.icon}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
