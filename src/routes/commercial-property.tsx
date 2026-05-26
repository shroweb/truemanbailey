import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import officeImg from "@/assets/office.jpg";

export const Route = createFileRoute("/commercial-property")({
  head: () => ({
    meta: [
      { title: "Commercial Property Lawyer Oxford | Trueman Bailey Law" },
      { name: "description", content: "Commercial property solicitors advising on acquisitions, disposals, commercial leases, landlord & tenant matters and development across Oxford, London and the UK." },
      { property: "og:title", content: "Commercial Property Lawyers — Trueman Bailey Law" },
      { property: "og:description", content: "Senior commercial property advice for landlords, tenants, investors and developers." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Commercial Property"
      title={<>Commercial property advice for <em className="font-serif italic text-gold">owners, investors</em> and occupiers.</>}
      intro="We act for landlords, tenants, investors and SMEs across the full lifecycle of commercial property — from acquisition and leasing through to refinancing, restructuring and disposal."
      heroImage={officeImg}
      heroAlt="A modern commercial office building"
      whatYouGet={[
        "Direct access to a senior commercial property solicitor",
        "Commercially-minded advice that focuses on your deal terms",
        "Heads of terms review and negotiation",
        "Title due diligence and risk reporting",
        "Coordinated completion and post-completion compliance",
      ]}
      sections={[
        {
          heading: "Acquisitions & disposals",
          body: "We handle freehold and long-leasehold sales and purchases of offices, retail, industrial and mixed-use property — managing due diligence, SPA negotiations and completion to your timetable.",
          bullets: ["Investment purchases", "Owner-occupier acquisitions", "Portfolio disposals", "Auction & private treaty"],
        },
        {
          heading: "Commercial leases",
          body: "Whether you're granting or taking a lease, we negotiate terms that protect your position — break clauses, rent reviews, alienation, repair obligations and security of tenure.",
          bullets: ["New leases & agreements for lease", "Lease renewals & 1954 Act", "Assignments & underlettings", "Licences for alterations"],
        },
        {
          heading: "Landlord & tenant",
          body: "Ongoing portfolio support: rent reviews, dilapidations, consents, surrenders and dispute prevention — keeping landlord obligations met and tenant relationships professional.",
          bullets: ["Dilapidations advice", "Surrenders & forfeiture", "Licences to assign", "Service charge queries"],
        },
        {
          heading: "Development & finance",
          body: "Acting on conditional contracts, option agreements, overage, secured lending and corporate property support — coordinated with planning and tax advisers as needed.",
          bullets: ["Option & conditional contracts", "Overage agreements", "Secured lending", "Corporate support transactions"],
        },
      ]}
      fees={[
        { name: "Commercial Lease", price: "from £1,500 + VAT", note: "New lease, landlord or tenant side" },
        { name: "Commercial Purchase", price: "from £2,500 + VAT", note: "Freehold, subject to value & due diligence" },
        { name: "Portfolio Work", price: "Bespoke", note: "Retainer or matter-based pricing" },
      ]}
      testimonial={{ quote: "Commercially sharp and quick to respond — they understood the deal and protected our position throughout.", attribution: "SME client · Commercial lease" }}
      faq={[
        { q: "Do you act for both landlords and tenants?", a: "Yes — though never on the same transaction. We're experienced acting on either side and tailor our advice accordingly." },
        { q: "Can you support an urgent acquisition?", a: "Absolutely. We are used to working to tight investor and developer timetables, including auction completions and conditional exchanges." },
        { q: "Do you work alongside other professional advisers?", a: "Routinely. We coordinate with surveyors, agents, planners, accountants and tax advisers to deliver a joined-up outcome." },
      ]}
      related={[
        { label: "Residential Conveyancing", to: "/conveyancing" },
        { label: "Wills, LPAs & Probate", to: "/wills-probate" },
        { label: "Immigration", to: "/immigration" },
      ]}
    />
  );
}
