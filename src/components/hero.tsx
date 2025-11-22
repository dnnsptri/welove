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
      <div className="container relative z-20 mx-auto h-full w-full max-w-[85rem] max-[1399px]:px-[120px] max-[1039px]:px-[72px]">
        <div className="flex h-full w-full flex-col justify-center gap-6">
          <div className="flex max-w-[62rem] flex-col gap-1">
            <h1 className="leading-snug! text-white text-3xl md:text-4xl lg:text-6xl">
              Persoonlijk advies.<br />Slim verzekerd.
            </h1>
          </div>
          <div className="flex w-full flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-white max-w-[60%] text-[20px]">
              WeLoveCarInsurance combineert de voordelen van een superkleine organisatie met de kennis en contacten van een groot intermediair in autoverzekeringen. Meer dan 30 jaar liefde én ervaring in het verzekeren van auto’s zorgen er voor dat wij op zoek gaan naar de beste verzekering voor jou!
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <button
          onClick={handleScrollToIntro}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-light-blue)] text-white shadow-lg transition-all hover:bg-[#286F81] hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to intro"
        >
          <ArrowDown className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export { Hero };

