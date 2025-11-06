"use client";

import { ArrowDown, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToIntro = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("intro");
    if (element) {
      const offset = -96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative h-svh max-h-[1400px] w-full overflow-hidden bg-[url('/images/hero-visual@2x.png')] bg-cover bg-center bg-no-repeat py-12 after:absolute after:left-0 after:top-0 after:block after:h-full after:w-full after:bg-[var(--color-dark)]/12 after:content-[''] md:py-20 dark">
      <div className="container relative z-20 mx-auto h-full w-full max-w-[85rem]">
        <div className="flex h-full w-full flex-col justify-end gap-12 pb-[23%]">
          <div className="flex max-w-[61.375rem] flex-col gap-1">
            <h1 className="leading-snug! text-white text-3xl md:text-4xl lg:text-6xl">
              Onafhankelijk advies.<br />Slim verzekerd.
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-white max-w-[50%] text-base">
            WeLoveCarInsurance combineert de voordelen van een superkleine organisatie met de kennis en contacten van een groot intermediair in autoverzekeringen.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <button
          onClick={handleScrollToIntro}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-blue)] text-white shadow-lg transition-all hover:bg-[var(--color-dark)] hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to intro"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export { Hero };

