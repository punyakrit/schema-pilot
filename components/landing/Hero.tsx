import React from "react";
import GreenTag from "./global/GreenTag";
import LandingFlow from "./LandingFlow";

function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-10">
      <div className="flex items-center justify-center min-h-screen py-24 sm:py-32 lg:py-0 lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
          <div className="col-span-1 flex flex-col justify-center space-y-6 sm:space-y-8">
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <GreenTag>Visual Schema Builder</GreenTag>
              <GreenTag>Prisma Ready</GreenTag>
              <GreenTag>SQL Export</GreenTag>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Design your database{" "}
              <span className="text-green-500">visually</span> - generate Prisma
              & SQL code <span className="text-green-500">instantly</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              Drag & drop tables, edit columns, connect relationships, then
              export clean Prisma schema and SQL migrations. Import an existing
              Prisma file and modify it visually.
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center mt-12 lg:mt-0">
            <div className="w-full h-[400px] sm:h-[500px] lg:h-full">
              <LandingFlow/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
