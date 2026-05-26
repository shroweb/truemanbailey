import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import documentsImg from "@/assets/documents.jpg";

export const Route = createFileRoute("/wills-probate")({
  head: () => ({
    meta: [
      { title: "Wills & Probate Solicitor | Estate Planning — Trueman Bailey Law" },
      { name: "description", content: "Wills, LPAs, estate planning and probate solicitors. Sensitive, considered advice for individuals and families across Oxford, Didcot and the UK." },
      { property: "og:title", content: "Wills, Probate & Estate Planning — Trueman Bailey Law" },
      { property: "og:description", content: "Plan your estate with clarity and care. Wills, LPAs, trusts and probate handled by senior solicitors." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Wills, LPAs & Probate"
      title={<>Wills, estate planning and <em className="font-serif italic text-gold">probate</em>, handled with care.</>}
      intro="Sensitive, considered legal advice for the moments that matter most — protecting your family, providing for the future and supporting executors when the time comes."
      heroImage={documentsImg}
      heroAlt="Legal documents and estate planning materials"
      whatYouGet={[
        "Private, unhurried consultations",
        "Plain-English explanations of complex options",
        "Properly drafted and executed documents",
        "Secure long-term storage of your original will",
        "Continuity of advice for executors and beneficiaries",
      ]}
      sections={[
        {
          heading: "Wills & estate planning",
          body: "From straightforward single wills through to mirror wills, trusts and inheritance tax planning, we help you put a clear plan in place that reflects your wishes and protects your beneficiaries.",
          bullets: ["Single & mirror wills", "Life interest & discretionary trusts", "Inheritance tax planning", "Guardianship provisions"],
        },
        {
          heading: "Lasting Powers of Attorney",
          body: "Property & Financial Affairs and Health & Welfare LPAs let trusted people make decisions for you if you lose capacity. We draft, certify and register them correctly so they are ready when needed.",
          bullets: ["Property & Financial Affairs LPAs", "Health & Welfare LPAs", "OPG registration", "Certificate provider service"],
        },
        {
          heading: "Probate & estate administration",
          body: "When someone passes away, we guide executors through the grant of probate and full estate administration — handling HMRC, asset collection, distribution and final accounts.",
          bullets: ["Grant-only applications", "Full estate administration", "Inheritance tax returns", "Deeds of variation"],
        },
        {
          heading: "Trusts & vulnerable beneficiaries",
          body: "Where additional protection is needed — for a vulnerable beneficiary, a second marriage or business assets — we design and administer the right trust structure.",
          bullets: ["Disabled & vulnerable persons trusts", "Bare trusts for minors", "Personal injury trusts", "Trust administration"],
        },
      ]}
      fees={[
        { name: "Single Will", price: "from £350 + VAT", note: "Standard will, in-person or remote" },
        { name: "Mirror Wills", price: "from £550 + VAT", note: "For couples" },
        { name: "LPA (per document)", price: "from £450 + VAT", note: "Excludes OPG registration fee" },
        { name: "Grant of Probate", price: "from £1,500 + VAT", note: "Grant-only applications" },
      ]}
      testimonial={{ quote: "They guided us through a very difficult time with patience and clarity. We always knew where we stood.", attribution: "Executor · Estate administration" }}
      faq={[
        { q: "How often should I review my will?", a: "We recommend reviewing your will every 3–5 years, and whenever your circumstances change — marriage, divorce, a new child, property purchase or significant change in assets." },
        { q: "Do I need an LPA if I already have a will?", a: "Yes. A will takes effect on death; an LPA covers decisions made during your lifetime if you lose mental capacity. They serve different and equally important purposes." },
        { q: "Can you handle the whole probate process?", a: "Yes. We can act on a grant-only basis or take on the full estate administration, including HMRC returns, asset collection, distribution and final estate accounts." },
      ]}
      related={[
        { label: "Residential Conveyancing", to: "/conveyancing" },
        { label: "Commercial Property", to: "/commercial-property" },
        { label: "Immigration", to: "/immigration" },
      ]}
    />
  );
}
