"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadModal } from "@/components/upload-modal";

const Intro = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  
  return (
    <section id="intro" className="py-12">
      <div className="flex items-center justify-center py-20 text-center md:p-20">
        <div className="container mx-auto max-w-[85rem]">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
              Jouw autoverzekering,<br />opnieuw uitgevonden
            </h2>
            <p className="md:text-lg">
            Niet zelf een premie berekenen en vergelijken. Dat doen wij voor jou, allemaal na het uploaden van jouw huidige polis of voorstel.<br />En zit je goed, dan laten we je dat uiteraard weten.
            </p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              <Button 
                size="lg" 
                className="bg-[var(--color-light-blue)] text-white hover:bg-[var(--color-light-blue)]/90"
                onClick={() => setIsUploadModalOpen(true)}
              >
                Upload polis
              </Button>
            </div>
            <div className="mt-4 flex justify-center">
              <a href="mailto:hello@welovecarinsurance.nl" className="text-sm font-medium text-[var(--color-light-blue)] hover:underline">
                Ik stuur toch liever een e-mail
              </a>
            </div>
          </div>
        </div>
      </div>
      <UploadModal open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen} />
    </section>
  );
};

export { Intro };
