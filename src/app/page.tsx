import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/intro";
import { Testimonial } from "@/components/testimonial";
import { Why } from "@/components/why";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { StickyTab } from "@/components/sticky-tab";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Intro />
      <Testimonial />
      <Why />
      <Footer />
      <BackToTop />
      {/*<StickyTab />*/}
    </main>
  );
}

