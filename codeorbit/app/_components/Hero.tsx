
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/dist/client/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background GIF */}
      <Image
        src="/hero.gif"
        alt="Animated gaming background"
        fill
        priority
        unoptimized
        className="object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-20 flex flex-col items-center px-4 text-center text-white">
        <h1 className="font-game text-4xl font-bold sm:text-6xl md:text-7xl">
          Start Your
        </h1>

        <h2
          className="mt-3 font-game text-4xl font-bold text-yellow-400 sm:text-6xl md:text-8xl"
          style={{
            textShadow:
              "3px 3px 0 #000, 6px 6px 0 #000",
          }}
        >
          Coding Adventure
        </h2>

        <p className="my-6 font-game text-sm sm:text-xl md:text-2xl">
          Beginner-Friendly Coding Courses.
        </p>


         <Link href="/sign-in">
        <Button
          variant="pixel"
          className="mt-5 p-6 font-game text-lg sm:text-2xl"
        >
          Get Started
        </Button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
