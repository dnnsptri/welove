import { Check } from "lucide-react";

const Why = () => {
  return (
    <section id="why" className="mx-6 rounded-lg bg-[#3CB2D0] py-28">
      <div className="container mx-auto max-w-[85rem] max-[1399px]:px-[120px] max-[1039px]:px-[72px]">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl text-white">
              Insurance & insights
            </h1>
            <p className="text-white mb-8 max-w-xl lg:text-lg">
              WeLoveCarInsurance is de onafhankelijke partij die jouw autoverzekering écht onder de loep neemt. We beoordelen jouw huidige of nieuw af te sluiten polis en laten zien waar jij winst kunt behalen; in premie, dekking of gemak.
            </p>
            <p className="text-white mb-8 max-w-xl lg:text-lg">
            Geen vergelijkingssite waar je alles zelf moet doen, maar persoonlijk advies op maat. Zonder poespas, zonder hoge kosten. Wij werken hard voor onze klanten. No-nonsense, eerlijk en transparant.
            </p>
            <p className="text-white mb-8 max-w-xl lg:text-lg">
              Werkzaam vanuit de prachtige watertoren in Breda, bedienen we het hele land. Dus ook jou helpen we graag verder!
            </p>
            <h4 className="text-white mb-3 max-w-xl lg:text-lg font-bold">
              Benieuwd naar ons verhaal?
            </h4>
            <p className="text-white mb-8 max-w-xl lg:text-lg">
              Neem dan contact met ons op via telefoonnummer 076-2301301 of <a href="mailto:hello@welovecarinsurance.nl" className="text-white underline hover:text-white/80">stuur een e-mail</a>.<br /><br />
              Team WeLoveCarInsurance
            </p>
          </div>
          <img
            src="/images/content-visual.png"
            alt="Website components showcase"
            className="rounded-md lg:pl-[110px]"
          />
        </div>
      </div>
    </section>
  );
};

export { Why };
