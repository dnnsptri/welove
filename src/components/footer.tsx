import React from "react";

interface FooterProps {
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const Footer = ({
  copyright = `© ${new Date().getFullYear()} - WeLoveCarInsurance.nl, powered by InsuranceMe.<br />Onderdeel van de InsuranceMe Group`,
  legalLinks = [],
}: FooterProps) => {
  return (
    <section id="footer" className="py-16">
      <div className="container mx-auto max-w-[85rem] max-[1399px]:px-[120px] max-[1039px]:px-[72px]">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr_1fr] lg:gap-6 lg:items-start lg:text-left">
          <div className="flex w-full flex-col gap-6 lg:items-start">
            <h2 className="text-3xl font-semibold lg:text-4xl whitespace-nowrap">
              Zo kun je ons bereiken
            </h2>
            <p className="text-[var(--color-dark)] max-w-xl text-sm lg:text-base">
              Hiernaast vind je alle gegevens voor meer informatie, inspiratie of een persoonlijke kennismaking.
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-[var(--color-dark)]">WeLoveCarInsurance.nl</p>
              <p className="text-[var(--color-dark)] text-sm">KvK: 57298149</p>
              <p className="text-[var(--color-dark)] text-sm">AFM: 12042573</p>
            </div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="flex w-full flex-col gap-6 lg:items-start">
            <div className="flex flex-col gap-1">
              <p className="font-medium text-[var(--color-dark)]">Wilhelminasingel 19</p>
              <p className="text-[var(--color-dark)] text-sm">4818 AC Breda</p>
              <p className="text-[var(--color-dark)] text-sm">076-2301301</p>
              <a href="mailto:hello@welovecarinsurance.nl" className="text-[var(--color-light-blue)] hover:underline hover:text-[#286F81] text-sm">
                hello@welovecarinsurance.nl
              </a>
            </div>
            <div>
              <a href="http://www.insuranceme.nl/" target="_blank" rel="noopener noreferrer">
                <img src="/logo/ins_logo.png" alt="InsuranceMe Logo" className="w-[80px] h-[80px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-[var(--color-dark)] mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1" dangerouslySetInnerHTML={{ __html: copyright }} />
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[var(--color-light-blue)] hover:underline hover:text-[#286F81]">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };

