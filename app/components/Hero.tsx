"use client";

import Image from "next/image";
import { SiCodeigniter, SiNextdotjs } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative group overflow-hidden bg-[#0052FF] text-white py-48 px-6 md:px-10">
      {/* Grid background */}
      <div className="absolute top-[250px] left-[50%] opacity-20 -translate-x-[50%] rotate-[10deg] scale-[2]">
        <Image
          src="/icons/bg-grid.png"
          alt="Hashtag"
          width={600}
          height={600}
        />
      </div>

      {/* Arrow atas kanan */}
      <div className="absolute top-[100px] left-[380px] rotate-[10deg] scale-[2]">
        <Image src="/icons/hashtag.svg" alt="Hashtag" width={90} height={90} />
      </div>

      {/* Judul */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-2">
        <h1 className="text-[3.5rem] md:text-[12rem] font-black font-outfit leading-none tracking-tight">
          <span className="block">IT&apos;S TIME</span>
          <span className="block">TO</span>
          <span className="block">CODE!</span>
        </h1>
      </div>

      {/* Arrow atas kanan */}
      <div className="absolute top-[250px] right-[380px] z-10 group">
        <Image
          src="/icons/topRight.svg"
          alt="Arrow Top Right"
          width={90}
          height={90}
          className="rotate-[10deg] scale-[2.5] transition-transform duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:animate-pulse"
        />
      </div>

      {/* Arrow bawah kiri */}
      <div className="absolute bottom-[220px] left-[280px] z-10 group">
        <Image
          src="/icons/bottomLeft.svg"
          alt="Arrow Bottom Left"
          width={90}
          height={90}
          className="rotate-[10deg] scale-[2.5] transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6 group-hover:animate-pulse"
        />
      </div>

      {/* Avatar pearl.eth */}
      <div className="absolute top-[350px] right-[500px] z-10 flex flex-col items-center">
        <div className="rounded-2xl backdrop-blur-md bg-white/10 px-10 -rotate-[25deg] hover:rotate-0 py-8 shadow-xl border border-white/20 transition-all ease-in-out">
          {/* <Avatar.Root className="inline-flex h-[90px] w-[90px] select-none items-center justify-center overflow-hidden rounded-xl align-middle">
            <Avatar.Image
              className="h-full w-full object-cover"
              src="https://api.dicebear.com/7.x/micah/svg?seed=pearl"
              alt="pearl.eth"
            />
            <Avatar.Fallback className="text-white text-sm">P</Avatar.Fallback>
          </Avatar.Root> */}
          <SiCodeigniter size={90} className="text-[#ee4323] text-center" />
          <p className="text-center text-xs mt-2">
            <span className="text-lg font-semibold">Codeigniter</span>
            <br />
            Popular
          </p>
        </div>
      </div>

      {/* Avatar baseclub.eth */}
      <div className="absolute bottom-[250px] left-[430px] z-10 flex flex-col items-center">
        <div className="rounded-2xl backdrop-blur-md bg-white/10 px-10 py-8 rotate-[15deg] hover:rotate-0 shadow-xl border border-white/20 transition-all ease-in-out">
          {/* <Avatar.Root className="inline-flex h-[90px] w-[90px] select-none items-center justify-center overflow-hidden rounded-xl align-middle">
            <Avatar.Image
              className="h-full w-full object-cover"
              src="https://api.dicebear.com/7.x/micah/svg?seed=baseclub"
              alt="baseclub.eth"
            />
            <Avatar.Fallback className="text-white text-sm">B</Avatar.Fallback>
          </Avatar.Root> */}
          <div className="aspect-square rounded-full bg-white">
            <SiNextdotjs className="text-black" size={90} />
          </div>
          <p className="text-center text-xs mt-2">
            <span className="text-lg font-semibold">NextJS</span>
            <br />
            Popular
          </p>
        </div>
      </div>

      {/* Get Started Button */}
      <div className="absolute bottom-[150px] right-[400px] z-10">
        <div className="w-[120px] h-[120px] bg-lime-400 rounded-full flex items-center justify-center rotate-[-15deg] text-xs font-bold text-black text-center shadow-xl">
          <span className="leading-tight">
            GUARANTEED <br /> DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
}
