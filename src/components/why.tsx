import { Check } from "lucide-react";

const Why = () => {
  return (
    <section id="why" className="mx-8 rounded-lg bg-[var(--color-light-grey)] py-40">
      <div className="container mx-auto max-w-[85rem]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl">
              Insurance & insights voor jou
            </h1>
            <p className="text-[var(--color-dark)] mb-8 max-w-xl lg:text-lg">
              WeLoveCarInsurance is de onafhankelijke partij die jouw autoverzekering écht onder de loep neemt. We beoordelen jouw huidige of nieuw af te sluiten polis en laten zien waar jij winst kunt behalen; in premie, dekking of gemak.
            </p>
            <p className="text-[var(--color-dark)] mb-8 max-w-xl lg:text-lg">
            Geen vergelijkingssite, maar persoonlijk advies op maat. Zonder poespas, zonder hoge kosten. Wij werken hard voor onze klanten. No-nonsense, eerlijk en transparant.
            </p>
            <p className="text-[var(--color-dark)] mb-8 max-w-xl lg:text-lg">
              We zitten niet voor niets in de watertoren aan de Wilhelminasingel in Breda, hét toonbeeld van transparant werken. Mouwen oprollen engeen gezeur.
            </p>
            <p className="text-[var(--color-dark)] mb-8 max-w-xl lg:text-lg">
              Benieuwd naar ons verhaal?<br />Neem dan <a href="mailto:hello@welovecarinsurance.nl" className="text-[var(--color-light-blue)] hover:underline">contact met ons op</a>.
            </p>
          </div>
          <img
            src="/images/content-visual.png"
            alt="Website components showcase"
            className="rounded-md lg:pl-[120px]"
          />
        </div>
      </div>
    </section>
  );
};

export { Why };
