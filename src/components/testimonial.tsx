"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import { ChevronRight, Star, Zap } from "lucide-react";

import { useRef } from "react";

import { Card } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "9,1",
    role: "Afsluiten nieuwe verzekering",
    content:
      "Fantastische kerel, snel, vlot en eerlijk. Heel prettig allemaal.",
  },
  {
    name: "9,9",
    role: "Afsluiten nieuwe verzekering",
    content:
      "Top geholpen, gewoonweg een zeer goed gevoel erbij",
  },
  {
    name: "9,1",
    role: "Afsluiten nieuwe verzekering",
    content:
      "Prima adviseur, ter zake kundig en snel van handelen.",
  },
];

const Testimonial = () => {
  const plugin = useRef(
    AutoScroll({
      startDelay: 500,
      speed: 0.7,
    }),
  );

  return (
    <section className="py-12 mb-[120px]">
      <div className="container mx-auto max-w-[85rem] flex flex-col items-center gap-4">
        <h2 className="text-center text-3xl font-semibold lg:text-4xl">
          Testimonials van onze tevreden klanten:
        </h2>
      </div>
      <div className="container mx-auto max-w-[85rem]">
        <div className="mt-16 space-y-4 flex justify-center">
          <Carousel
            opts={{
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseLeave={() => plugin.current.play()}
            className="before:bg-linear-to-r before:from-background after:bg-linear-to-l after:from-background relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-36 before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-36 after:to-transparent"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto">
                  <Card className="max-w-96 select-none p-6">
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="font-medium text-[var(--color-dark)]">{testimonial.name}</p>
                        <p className="text-[var(--color-dark)] text-sm opacity-70">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Star className="size-5 fill-[var(--color-light-blue)] text-[var(--color-light-blue)]" />
                        <Star className="size-5 fill-[var(--color-light-blue)] text-[var(--color-light-blue)]" />
                        <Star className="size-5 fill-[var(--color-light-blue)] text-[var(--color-light-blue)]" />
                        <Star className="size-5 fill-[var(--color-light-blue)] text-[var(--color-light-blue)]" />
                        <Star className="size-5 fill-[var(--color-light-blue)] text-[var(--color-light-blue)]" />
                      </div>
                    </div>
                    <q className="text-[var(--color-dark)] leading-7">
                      {testimonial.content}
                    </q>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Testimonial };

