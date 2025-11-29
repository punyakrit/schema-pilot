import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import LandingFlow from "./LandingFlow";

function Hero() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <Badge variant="outline" className="px-3 py-1 rounded-full text-sm border-primary/20 bg-primary/5">
              v1.0 Public Beta
            </Badge>
            <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm">
              Open Source
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Visual Database Design <br className="hidden lg:block" />
            <span className="text-muted-foreground">Made Simple.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Stop writing schemas by hand. Drag & drop tables, define fields, and 
            generate production-ready <span className="text-foreground font-medium">Prisma</span> & <span className="text-foreground font-medium">SQL</span> code instantly. 
            Import, edit, and export with zero errors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/main" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base gap-2">
                Start Designing <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link href="https://github.com/punyakrit/schema-pilot" target="_blank" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base gap-2">
                <Github className="size-4" /> Star on GitHub
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-emerald-500" />
              <span>Prisma Compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-blue-500" />
              <span>SQL Export</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-orange-500" />
              <span>Visual Editor</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-[600px] lg:max-w-none">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl opacity-50" />
            
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
              <LandingFlow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
