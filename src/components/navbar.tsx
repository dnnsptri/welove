"use client";

import { useState } from "react";
import { MenuIcon, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UploadModal } from "@/components/upload-modal";

const Navbar = () => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
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
    <section className="absolute top-0 left-0 right-0 z-30 py-4">
      <div className="container mx-auto max-w-[85rem]">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
          >
            <img
              src="/logo/bm_WeLove.svg"
              className="h-8"
              alt="We Love Car Insurance Logo"
            />
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="#intro"
              onClick={(e) => handleScroll(e, "intro")}
              className="text-sm font-medium text-white transition-all px-4 py-2 hover:rounded-full hover:border hover:border-white whitespace-nowrap"
            >
              Onze aanpak
            </a>
            <a
              href="#why"
              onClick={(e) => handleScroll(e, "why")}
              className="text-sm font-medium text-white transition-all px-4 py-2 hover:rounded-full hover:border hover:border-white whitespace-nowrap"
            >
              Over ons
            </a>
            <a
              href="#footer"
              onClick={(e) => handleScroll(e, "footer")}
              className="text-sm font-medium text-white transition-all px-4 py-2 hover:rounded-full hover:border hover:border-white whitespace-nowrap"
            >
              Neem contact op
            </a>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <Button 
              variant="outline" 
              className="h-10 bg-[var(--color-dark)] text-white border-[var(--color-dark)] hover:bg-[var(--color-dark)]/90 hover:text-white"
              onClick={() => setIsUploadModalOpen(true)}
            >
              Upload polis
            </Button>
            <Button asChild className="h-10 bg-[var(--color-dark)] text-white hover:bg-[var(--color-dark)]/90" size="icon">
              <a href="mailto:hello@welovecarinsurance.nl" aria-label="Stuur een e-mail">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="/"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="/logo/bm_WeLove.svg"
                      className="h-8"
                      alt="We Love Car Insurance Logo"
                    />
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  <a
                    href="#intro"
                    onClick={(e) => handleScroll(e, "intro")}
                    className="text-sm font-medium"
                  >
                    Onze aanpak
                  </a>
                  <a
                    href="#why"
                    onClick={(e) => handleScroll(e, "why")}
                    className="text-sm font-medium"
                  >
                    Over ons
                  </a>
                  <a
                    href="#footer"
                    onClick={(e) => handleScroll(e, "footer")}
                    className="text-sm font-medium"
                  >
                    Neem contact op
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline" onClick={() => setIsUploadModalOpen(true)}>Upload polis</Button>
                  <Button asChild size="icon">
                    <a href="mailto:hello@welovecarinsurance.nl" aria-label="Stuur een e-mail">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
      <UploadModal open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen} />
    </section>
  );
};

export { Navbar };

