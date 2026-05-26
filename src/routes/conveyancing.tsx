import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/conveyancing")({
  head: () => ({
    meta: [
      { title: "Residential Conveyancing Solicitors Oxford | Trueman Bailey Law" },
      { name: "description", content: "Conveyancing solicitors in Oxford & Didcot for residential property sales, purchases, remortgages, transfers of equity, new builds, auctions and lease extensions. Fixed fees." },
      { property: "og:title", content: "Residential Conveyancing Solicitors — Trueman Bailey Law" },
      { property: "og:description", content: "Clear, fixed-fee residential conveyancing across Oxford, Didcot, London and UK-wide." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <ServicePage
      eyebrow="Residential Conveyancing"
      title={<>Conveyancing solicitors for <em className="font-serif italic text-gold">sales, purchases</em> and remortgages.</>}
      intro="From your first offer to completion day, our residential property solicitors handle the legal detail with care — keeping you informed at every stage and protecting your position throughout."
      heroImage={heroImg}
      heroAlt="A premium English residential property"
      whatYouGet={[
        "Named solicitor as your single point of contact",
        "Fixed-fee quote agreed in writing before we begin",
        "Proactive updates at each stage of the transaction",
        "Searches, enquiries and contract review handled in-house",
        "Direct liaison with lenders, agents and the other side",
      ]}
      sections={[
        {
          heading: "Buying your home",
          body: "Whether it's your first property, a family upsize or an investment purchase, we manage searches, enquiries, contract review, mortgage conditions and completion — flagging risks early and explaining every document in plain English.",
          bullets: ["Freehold and leasehold purchases", "Help to Buy & shared ownership", "First-time buyers", "Buy-to-let purchases"],
        },
        {
          heading: "Selling your property",
          body: "We prepare the contract pack, respond to buyer enquiries promptly, and coordinate with your estate agent and onward purchase so the chain holds together.",
          bullets: ["Freehold & leasehold sales", "Probate sales", "Chain-coordinated completions", "Related-party transactions"],
        },
        {
          heading: "Remortgages & transfers of equity",
          body: "Switching lender, releasing equity, removing or adding a name to a title — we handle the legal work efficiently with minimal disruption.",
          bullets: ["Remortgage to a new lender", "Equity release", "Transfer of equity on separation", "Gifted deposits & declarations of trust"],
        },
        {
          heading: "New builds, auctions & lease extensions",
          body: "Specialist transactions need specialist solicitors. We work to developer deadlines, 28-day auction completions, and statutory lease extension timetables with confidence.",
          bullets: ["New-build reservations & exchange deadlines", "Auction purchases (pre & post-auction)", "Statutory & informal lease extensions", "Right to manage & enfranchisement"],
        },
      ]}
      fees={[
        { name: "Sale or Purchase", price: "from £950 + VAT", note: "Freehold residential, subject to value & complexity" },
        { name: "Remortgage", price: "from £550 + VAT", note: "Standard residential remortgage" },
        { name: "Lease Extension", price: "from £1,250 + VAT", note: "Statutory or informal route" },
      ]}
      testimonial={{ quote: "Helpful, courteous and clear from start to finish — they made our property purchase feel completely smooth.", attribution: "Residential client · Oxford" }}
      faq={[
        { q: "How long does a typical conveyancing transaction take?", a: "Most freehold sales and purchases complete within 8–12 weeks. Leasehold and new-build matters can take longer depending on management packs and developer timelines. We give you a realistic timetable at the outset." },
        { q: "Do you offer fixed fees?", a: "Yes. We provide a fixed-fee quote in writing before we begin, covering our legal charges, with disbursements (searches, Land Registry, etc.) itemised separately." },
        { q: "Can you act for my lender?", a: "We are on the panel of most major UK lenders. If your lender requires separate representation, we will let you know at the quote stage." },
      ]}
      related={[
        { label: "Commercial Property", to: "/commercial-property" },
        { label: "Wills, LPAs & Probate", to: "/wills-probate" },
        { label: "Immigration", to: "/immigration" },
      ]}
    />
  );
}
