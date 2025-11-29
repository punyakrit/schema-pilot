import React from "react";
import GreenTag from "./global/GreenTag";

function Hero() {
  return (
    <section className="container mx-auto px-10 ">
      <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="col-span-1">
            <div className="flex gap-4">
              <GreenTag>Visual Schema Builder</GreenTag>
              <GreenTag>Prisma Ready</GreenTag>
              <GreenTag>SQL Export</GreenTag>
            </div>
            <h1 className="text-6xl font-extrabold py-5">
              Design your database{" "}
              <span className="text-green-500">visually</span> - generate Prisma
              & SQL code <span className="text-green-500">instantly</span>
            </h1>
            <p className="text-white/70 text-lg mt-4">
              Drag & drop tables, edit columns, connect relationships, then
              export clean Prisma schema and SQL migrations. Import an existing
              Prisma file and modify it visually.
            </p>
          </div>
          <div className="col-span-1">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
