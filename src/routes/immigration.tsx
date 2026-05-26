import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import consultationImg from "@/assets/consultation.jpg";

export const Route = createFileRoute("/immigration")({
  head: () => ({
    meta: [
      { title: "Immigration Solicitor UK | Visa, Settlement & Citizenship — Trueman Bailey Law" },
      { name: "description", content: "UK immigration solicitors advising on visas, sponsorship, settlement (ILR), naturalisation and family routes. Personal, considered advice for individuals and businesses." },
      { property: "og:title", content: "UK Immigration Solicitors — Trueman Bailey Law" },
      { property: "og:description", content: "Visa, settlement, citizenship and sponsorship advice from senior UK immigration solicitors." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Immigration"
      title={<>UK immigration advice for <em className="font-serif italic text-gold">individuals, families</em> and businesses.</>}
      intro="Clear, strategic guidance through every stage of the UK immigration system — from initial visa applications through to settlement, citizenship and business sponsorship."
      heroImage={consultationImg}
      heroAlt="A professional immigration consultation"
      whatYouGet={[
        "Eligibility assessment from a senior immigration solicitor",
        "Strategy tailored to your circumstances and timeline",
        "Document review and full application preparation",
        "Submission and Home Office liaison",
        "Honest advice on prospects — never overpromised",
      ]}
      sections={[
        {
          heading: "Work & business visas",
          body: "From Skilled Worker and Health & Care Worker visas through to Global Talent, Innovator Founder and the Senior or Specialist Worker route — we structure applications to give you the strongest case.",
          bullets: ["Skilled Worker", "Global Talent", "Innovator Founder", "Senior or Specialist Worker"],
        },
        {
          heading: "Family & partner routes",
          body: "Bringing a partner, spouse, fiancé(e) or dependent family member to the UK requires careful preparation of relationship, financial and accommodation evidence. We help you get it right first time.",
          bullets: ["Spouse & partner visas", "Fiancé(e) visas", "Parent & child routes", "Adult dependent relatives"],
        },
        {
          heading: "Settlement & citizenship",
          body: "Applications for Indefinite Leave to Remain (ILR), naturalisation as a British citizen and registration of children — including dual nationality considerations.",
          bullets: ["Indefinite Leave to Remain", "Naturalisation (AN)", "Registration of children", "EU Settlement Scheme"],
        },
        {
          heading: "Business sponsorship & compliance",
          body: "We help UK employers obtain and maintain a sponsor licence, prepare for Home Office compliance visits, and structure right-to-work systems that meet UKVI standards.",
          bullets: ["Sponsor licence applications", "Compliance audits", "Right-to-work systems", "Certificates of Sponsorship"],
        },
      ]}
      fees={[
        { name: "Initial Consultation", price: "from £250 + VAT", note: "Up to 1 hour, fee credited against any subsequent instruction" },
        { name: "Visa Application", price: "from £1,500 + VAT", note: "Per applicant, route-dependent" },
        { name: "Sponsor Licence", price: "from £2,750 + VAT", note: "Includes preparation & submission" },
      ]}
      testimonial={{ quote: "Calm, knowledgeable and proactive throughout — our visa was granted without complications.", attribution: "Skilled Worker client" }}
      faq={[
        { q: "Do you offer a fixed fee for visa applications?", a: "Yes. Once we have understood your circumstances, we provide a fixed fee in writing covering our professional charges. Home Office, IHS and biometric fees are payable separately." },
        { q: "Can you advise on settlement after a visa?", a: "Yes. We routinely advise clients through their full UK journey — initial visa, extensions, settlement and citizenship — providing continuity at each stage." },
        { q: "Do you act for UK employers?", a: "Yes. We advise UK businesses on sponsor licence applications, ongoing compliance and recruiting overseas talent under the points-based system." },
      ]}
      related={[
        { label: "Residential Conveyancing", to: "/conveyancing" },
        { label: "Commercial Property", to: "/commercial-property" },
        { label: "Wills, LPAs & Probate", to: "/wills-probate" },
      ]}
    />
  );
}
