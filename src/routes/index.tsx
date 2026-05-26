import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Mail, MapPin, ArrowRight, ArrowUpRight, Check, ShieldCheck,
  Home as HomeIcon, Building2, FileText, Globe2, Star,
  Quote, HelpCircle, Plus, Minus, Calendar,
} from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import documentsImg from "@/assets/documents.jpg";
import officeImg from "@/assets/office.jpg";
import consultationImg from "@/assets/consultation.jpg";
import founderImg from "@/assets/founder.jpg";
import oxfordImg from "@/assets/oxford.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ─────────────────────────────  HERO  ───────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-20 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pr-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-card px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-navy/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Boutique UK Solicitors · Oxford · Didcot · London
          </div>
          <h1 className="mt-7 font-serif text-[2.5rem] leading-[1.04] text-navy sm:text-[3.25rem] lg:text-[4rem]">
            Considered legal counsel for <em className="font-serif italic text-gold">property, family wealth</em> and life's important decisions.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">
            Trueman Bailey Law is a boutique firm of solicitors and consultant lawyers providing
            clear, personal and practical advice across conveyancing, wills, probate, estate
            planning and immigration — for clients in Oxford, Didcot and across the UK.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-navy/90">
              Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a href="tel:01865590330" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-medium text-navy transition hover:border-navy">
              <Phone className="h-4 w-4 text-gold" /> Speak to the Team
            </a>
          </div>

          {/* Trust badges */}
          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-navy/10 pt-8 sm:grid-cols-4">
            {[
              { k: "30+", v: "Years of combined legal experience" },
              { k: "4.2★", v: "Trustpilot client rating" },
              { k: "UK-wide", v: "Plus international clients" },
              { k: "SRA", v: "Regulated · No. 8012054" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-2xl text-navy">{s.k}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-navy/60">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image card */}
        <div className="relative lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
            <img src={heroImg} alt="A premium English residential property at golden hour" width={1024} height={1280} className="h-[520px] w-full object-cover lg:h-[640px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
            <div className="absolute left-5 right-5 bottom-5 rounded-2xl border border-ivory/15 bg-navy/85 p-5 text-ivory backdrop-blur-md">
              <Quote className="h-5 w-5 text-gold" />
              <p className="mt-2 font-serif text-base leading-snug">
                "Helpful, courteous and clear from start to finish — they made our property purchase feel completely smooth."
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ivory/70">Residential client · Conveyancing</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  SERVICES  ───────────────────────────── */
const services = [
  { n: "01", icon: HomeIcon, title: "Residential Conveyancing", body: "Buying, selling, remortgaging, transfer of equity, new builds, lease extensions and complex title issues." },
  { n: "02", icon: Building2, title: "Commercial Property", body: "Legal support for commercial transactions, development finance, investors, landlords and business property matters." },
  { n: "03", icon: FileText, title: "Wills, LPAs & Probate", body: "Protect your family, plan your estate and receive sensitive support through probate and inheritance matters." },
  { n: "04", icon: Globe2, title: "Immigration", body: "Clear legal guidance for individuals, families and businesses navigating UK immigration requirements." },
];

function Services() {
  return (
    <section id="services" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Our Practice Areas</span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl lg:text-[3.5rem]">
              Considered legal advice across the moments that matter most.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-navy/70 lg:col-span-5">
            Each instruction is handled by a senior consultant lawyer who is genuinely
            interested in the outcome — not a process queue. You get clarity, responsiveness
            and a calm professional standing alongside you.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-[1.25rem] border border-navy/10 bg-card p-8 transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-navy/10">
              <div className="flex items-start justify-between">
                <span className="font-serif text-sm text-gold">{s.n}</span>
                <s.icon className="h-6 w-6 text-navy/40 transition group-hover:text-gold" strokeWidth={1.4} />
              </div>
              <h3 className="mt-12 font-serif text-2xl leading-tight text-navy">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">{s.body}</p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-navy transition group-hover:text-gold">
                View service <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FOUNDER / TRUST  ───────────────────────────── */
function Founder() {
  return (
    <section className="bg-beige/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={founderImg} alt="Senior solicitor at Trueman Bailey Law" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="-mt-10 ml-auto w-fit rounded-2xl border border-navy/10 bg-card px-5 py-4 shadow-xl shadow-navy/10">
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold">Senior Counsel</div>
            <div className="mt-1 font-serif text-lg text-navy">Trueman Bailey Law</div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— A Different Kind of Firm</span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl">
            Built around the client, not the billing model.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/70">
            Trueman Bailey was founded to offer something rare in modern legal practice — direct
            access to a senior solicitor who genuinely knows your matter. No queues, no handoffs,
            no surprises. Just thoughtful advice from professionals who treat each instruction
            as if it were their own.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { t: "Direct senior contact", b: "Speak with the solicitor on your file — not a call centre." },
              { t: "Fixed-fee quotations", b: "Clear costs agreed in writing before work begins." },
              { t: "Modern, calm process", b: "Video, phone, email or in-person — at your convenience." },
              { t: "Discreet and personal", b: "Sensitive matters handled with care and confidentiality." },
            ].map((f) => (
              <div key={f.t} className="border-t border-navy/15 pt-4">
                <div className="flex items-start gap-2.5 font-serif text-lg text-navy">
                  <Check className="mt-1 h-4 w-4 flex-none text-gold" strokeWidth={2.5} /> {f.t}
                </div>
                <p className="mt-1.5 pl-6 text-sm leading-relaxed text-navy/65">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  PROPERTY FOCUS  ───────────────────────────── */
const propertyChecklist = [
  "Auction purchase and sale", "Remortgage", "Transfer of equity",
  "Sale and purchase", "New build purchases", "Buy to let",
  "Lease extension", "Unregistered land", "Complex title issues",
  "Right to buy", "Bridging & development finance",
];

function PropertyFocus() {
  return (
    <section id="property" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Property Law</span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl">
              Making property moves feel effortless.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy/70">
              Whether you are buying your first home, selling a property, investing, remortgaging
              or untangling a complex title issue, we move your transaction forward with the
              certainty and pace you'd expect from a senior firm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory hover:bg-navy/90">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#fees" className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3.5 text-sm font-medium text-navy hover:border-navy">
                View Fee Guide
              </a>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img src={officeImg} alt="Modern boutique law firm office in Oxford" width={1280} height={960} loading="lazy" className="h-72 w-full object-cover" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] border border-navy/10 bg-card p-8 shadow-sm lg:p-12">
              <div className="flex items-center justify-between border-b border-navy/10 pb-5">
                <h3 className="font-serif text-2xl text-navy">Conveyancing matters we handle</h3>
                <span className="hidden text-[11px] uppercase tracking-[0.22em] text-navy/50 sm:inline">A — Z</span>
              </div>
              <ul className="mt-6 divide-y divide-navy/10">
                {propertyChecklist.map((item, i) => (
                  <li key={item} className="flex items-center justify-between gap-4 py-3.5 text-navy">
                    <span className="flex items-center gap-4">
                      <span className="font-serif text-xs text-gold">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-base">{item}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-navy/30" />
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold">
                Discuss your property matter <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  COVERAGE  ───────────────────────────── */
function Coverage() {
  const cities = ["Oxford", "Didcot", "London", "Birmingham", "Reading", "Bicester", "Abingdon", "International"];
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <img src={oxfordImg} alt="Oxford skyline at dusk" width={1600} height={800} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-28">
        <div className="lg:col-span-6">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Coverage</span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-5xl">
            Rooted in Oxfordshire. Working across the UK and internationally.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">
            We act for individuals, families, landlords, developers and businesses wherever
            they are based — using a calm, modern process that doesn't depend on you being in
            the same room.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {cities.map((c) => (
              <div key={c} className="flex items-center rounded-xl border border-ivory/15 bg-ivory/5 px-5 py-4 text-sm backdrop-blur">
                <span className="inline-flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> {c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  REVIEWS  ───────────────────────────── */
const reviews = [
  { body: "Helpful and courteous throughout. The team kept us informed at every step and made our property purchase feel completely straightforward.", name: "Residential client", topic: "Conveyancing" },
  { body: "Quick, professional and clear guidance from start to finish. Responsive communication that genuinely put us at ease.", name: "Buy-to-let investor", topic: "Property" },
  { body: "Sensitive and supportive handling of our family's probate matter. They explained each step carefully and made a difficult process manageable.", name: "Probate client", topic: "Wills & Probate" },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— What Clients Say</span>
            <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl">
              The kind of service clients quietly recommend.
            </h2>
          </div>
          <div className="rounded-2xl border border-navy/10 bg-card p-5 lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[0,1,2,3].map(i => <Star key={i} className="h-5 w-5 fill-gold text-gold" />)}
                <Star className="h-5 w-5 fill-gold/40 text-gold" />
              </div>
              <span className="font-serif text-2xl text-navy">4.2</span>
              <span className="text-sm text-navy/60">on Trustpilot</span>
            </div>
            <p className="mt-2 text-xs text-navy/60">Rated 4.2 on Trustpilot from early client reviews.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col rounded-[1.25rem] border border-navy/10 bg-card p-8">
              <Quote className="h-7 w-7 text-gold" strokeWidth={1.4} />
              <blockquote className="mt-4 flex-1 font-serif text-xl leading-snug text-navy">
                "{r.body}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-navy/10 pt-4 text-sm">
                <div>
                  <div className="font-medium text-navy">{r.name}</div>
                  <div className="text-navy/60">{r.topic}</div>
                </div>
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(s => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FEES  ───────────────────────────── */
function Fees() {
  return (
    <section id="fees" className="bg-beige/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="relative lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={documentsImg} alt="Solicitor reviewing a legal document" width={1280} height={960} loading="lazy" className="h-[460px] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-navy/10 bg-card px-5 py-4 shadow-xl shadow-navy/10 sm:block lg:-right-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-gold">Fixed-fee available</div>
            <div className="mt-1 font-serif text-lg text-navy">Quotes in writing, in plain English</div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Transparent Fees</span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl">
            Clear fees. No last-minute surprises.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/70">
            We believe legal fees should be explained clearly before work begins. You'll be
            kept updated if anything changes, so you always understand what you're paying for
            and why.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Fixed-fee quotations wherever possible",
              "Itemised breakdown of disbursements",
              "Written update before any fee change",
              "No hidden admin or success fees",
            ].map(i => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-card p-4 text-sm text-navy">
                <Check className="mt-0.5 h-4 w-4 flex-none text-gold" strokeWidth={2.5} />{i}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory hover:bg-navy/90">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-medium text-navy hover:border-navy">
              View Full Fee Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  CONSULTANTS  ───────────────────────────── */
function Consultants() {
  const benefits = [
    { t: "Flexible working", b: "Practise on terms that suit your life and ambitions." },
    { t: "Competitive fee sharing", b: "A transparent commercial model that rewards your work." },
    { t: "Admin & compliance support", b: "A full operational backbone so you can focus on clients." },
    { t: "Collaborative environment", b: "Senior peers across multiple specialisms." },
    { t: "Grow your client base", b: "Backing, brand and infrastructure to build your practice." },
  ];
  return (
    <section id="consultants" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy text-ivory">
          <div className="grid gap-12 p-8 lg:grid-cols-12 lg:gap-16 lg:p-16">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Consultant Lawyers</span>
              <h2 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-5xl">
                Join Trueman Bailey's consultant lawyer network.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory/80">
                For experienced solicitors looking for flexibility, autonomy and proper
                professional support — a consultant model designed around modern legal practice.
              </p>
              <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy hover:bg-gold/90">
                Apply as a Consultant Lawyer <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <ul className="grid gap-3 self-center lg:col-span-7">
              {benefits.map((b, i) => (
                <li key={b.t} className="flex items-start gap-5 rounded-xl border border-ivory/10 bg-ivory/5 p-5">
                  <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="font-serif text-lg text-ivory">{b.t}</div>
                    <div className="mt-0.5 text-sm text-ivory/70">{b.b}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  FAQ  ───────────────────────────── */
const faqs = [
  { q: "How quickly can you start work on my matter?", a: "In most cases we can have a conversation within one working day and open a file as soon as identification and an engagement letter are in place — often within 48 hours." },
  { q: "Do you offer fixed-fee quotes for conveyancing?", a: "Yes. Wherever possible we provide a clear, written fixed-fee quotation up front, with all known disbursements itemised so there are no surprises." },
  { q: "Can we work together if I'm not local to Oxford?", a: "Absolutely. We act for clients across the UK and internationally, using secure video and document portals to keep everything moving without the need to meet in person." },
  { q: "Are you regulated?", a: "Trueman Bailey Law Limited is authorised and regulated by the Solicitors Regulation Authority, SRA No. 8012054." },
  { q: "Do you handle complex or unusual title issues?", a: "Yes. Our consultant lawyers have deep experience with unregistered land, lease extensions, transfer of equity and other complex conveyancing matters." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-beige/50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Frequently Asked</span>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] text-navy sm:text-5xl">
            Sensible answers to the questions clients ask first.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/70">
            Don't see your question? Send us a short note and a senior solicitor will reply
            personally — usually within one working day.
          </p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold">
            <HelpCircle className="h-4 w-4 text-gold" /> Ask a question <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-navy/15 rounded-[1.5rem] border border-navy/10 bg-card">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="block w-full px-6 py-6 text-left lg:px-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="font-serif text-lg text-navy lg:text-xl">{f.q}</h3>
                    <span className="mt-1 grid h-7 w-7 flex-none place-items-center rounded-full border border-navy/15 text-navy">
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy/70">{f.a}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────  CONTACT  ───────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-card shadow-xl shadow-navy/5">
          <div className="grid gap-0 lg:grid-cols-12">
            {/* Left */}
            <div className="relative bg-navy p-8 text-ivory lg:col-span-5 lg:p-12">
              <img src={consultationImg} alt="Solicitor consultation" width={1280} height={960} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/80 to-navy" />
              <div className="relative">
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">— Get In Touch</span>
                <h2 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-5xl">
                  Start with a simple conversation.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ivory/80">
                  Tell us a little about your matter and a senior solicitor will get back to
                  you with clear next steps. No obligation. No pressure.
                </p>
                <ul className="mt-10 space-y-5">
                  <li className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10"><Phone className="h-4 w-4 text-gold" /></span> <a href="tel:01865590330" className="hover:text-gold">01865 590330</a></li>
                  <li className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10"><Mail className="h-4 w-4 text-gold" /></span> <a href="mailto:contact@truemanbailey.com" className="hover:text-gold">contact@truemanbailey.com</a></li>
                  <li className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10"><MapPin className="h-4 w-4 text-gold" /></span> Didcot · Oxford · UK-wide & International</li>
                  <li className="flex items-center gap-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-ivory/10"><Calendar className="h-4 w-4 text-gold" /></span> Mon–Fri 9:00–17:30 · Appointments by arrangement</li>
                </ul>
                <div className="mt-10 rounded-2xl border border-ivory/15 bg-ivory/5 p-5">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ivory/70">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" /> Regulated · Confidential · Personal
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                    All enquiries are treated in confidence under our SRA-regulated practice
                    (No. 8012054).
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="p-8 lg:col-span-7 lg:p-12"
            >
              <h3 className="font-serif text-2xl text-navy">Request a Callback</h3>
              <p className="mt-1 text-sm text-navy/60">Typically a response within one working day.</p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-[0.18em] text-navy/55">Service needed</label>
                  <select className="rounded-lg border border-navy/15 bg-ivory px-4 py-3 text-sm text-navy outline-none transition focus:border-gold">
                    <option>Residential Conveyancing</option>
                    <option>Commercial Property</option>
                    <option>Wills, LPAs & Probate</option>
                    <option>Immigration</option>
                    <option>Consultant Lawyer Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-[0.18em] text-navy/55">Tell us about your matter</label>
                <textarea rows={5} className="rounded-lg border border-navy/15 bg-ivory px-4 py-3 text-sm text-navy outline-none transition focus:border-gold" placeholder="A few sentences is enough — we'll take it from there." />
              </div>
              <button type="submit" className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-ivory transition hover:bg-navy/90">
                {sent ? "Thanks — we'll be in touch shortly" : "Request a Callback"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <p className="mt-4 text-center text-xs text-navy/55">
                By submitting you agree to be contacted about your enquiry. We never share your details.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] uppercase tracking-[0.18em] text-navy/55">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-lg border border-navy/15 bg-ivory px-4 py-3 text-sm text-navy outline-none transition focus:border-gold"
      />
    </div>
  );
}

function Index() {
  return (
    <div className="bg-ivory text-navy">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Founder />
        <PropertyFocus />
        <Coverage />
        <Reviews />
        <Fees />
        <Consultants />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
