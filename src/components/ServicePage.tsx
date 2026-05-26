import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, ShieldCheck, Quote } from "lucide-react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export interface ServicePageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  whatYouGet: string[];
  fees?: { name: string; price: string; note?: string }[];
  faq?: { q: string; a: string }[];
  testimonial?: { quote: string; attribution: string };
  related: { label: string; to: "/conveyancing" | "/commercial-property" | "/wills-probate" | "/immigration" }[];
}

export function ServicePage(p: ServicePageProps) {
  return (
    <div className="bg-ivory text-navy">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-ivory">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-20 lg:pb-24">
            <div className="lg:col-span-7 lg:pr-6">
              <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-navy/55">
                <Link to="/" className="hover:text-navy">Home</Link>
                <span>/</span>
                <span className="text-navy/80">{p.eyebrow}</span>
              </nav>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-card px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-navy/70">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {p.eyebrow}
              </div>
              <h1 className="mt-6 font-serif text-[2.4rem] leading-[1.05] text-navy sm:text-[3rem] lg:text-[3.5rem]">
                {p.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/70">{p.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" hash="contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-navy/90">
                  Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <a href="tel:01865590330" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-medium text-navy transition hover:border-navy">
                  <Phone className="h-4 w-4 text-gold" /> 01865 590330
                </a>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-navy/60">
                <ShieldCheck className="h-4 w-4 text-gold" /> Solicitor-led · SRA Regulated · No. 8012054
              </p>
            </div>
            <div className="relative lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
                <img src={p.heroImage} alt={p.heroAlt} className="h-[420px] w-full object-cover lg:h-[560px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Detail sections */}
        <section className="border-t border-navy/10 bg-card/40">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-3 lg:px-8 lg:py-24">
            <aside className="lg:col-span-1">
              <h2 className="font-serif text-3xl text-navy">What you receive</h2>
              <p className="mt-3 text-sm text-navy/65">A clear, considered scope of work, handled directly by a senior consultant lawyer.</p>
              <ul className="mt-6 space-y-3 text-sm text-navy/80">
                {p.whatYouGet.map((w) => (
                  <li key={w} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{w}</li>
                ))}
              </ul>
            </aside>

            <div className="space-y-10 lg:col-span-2">
              {p.sections.map((s, i) => (
                <article key={s.heading} className="border-b border-navy/10 pb-10 last:border-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-sm text-gold">0{i + 1}</span>
                    <h3 className="font-serif text-2xl text-navy">{s.heading}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-navy/75">{s.body}</p>
                  {s.bullets && (
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-navy/75"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Fees */}
        {p.fees && (
          <section className="border-t border-navy/10 bg-ivory">
            <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
              <div className="max-w-2xl">
                <h2 className="font-serif text-3xl text-navy lg:text-4xl">Transparent indicative fees</h2>
                <p className="mt-4 text-navy/65">Final quotes are tailored to your matter. We confirm fixed fees in writing before work begins.</p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {p.fees.map((f) => (
                  <div key={f.name} className="rounded-2xl border border-navy/10 bg-card p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">{f.name}</p>
                    <p className="mt-3 font-serif text-3xl text-navy">{f.price}</p>
                    {f.note && <p className="mt-2 text-xs text-navy/60">{f.note}</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {p.testimonial && (
          <section className="border-y border-navy/10 bg-navy text-ivory">
            <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
              <Quote className="mx-auto h-7 w-7 text-gold" />
              <p className="mt-5 font-serif text-2xl leading-snug text-ivory lg:text-3xl">"{p.testimonial.quote}"</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.22em] text-ivory/60">{p.testimonial.attribution}</p>
            </div>
          </section>
        )}

        {/* FAQ */}
        {p.faq && (
          <section className="bg-ivory">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-3 lg:px-8 lg:py-24">
              <div className="lg:col-span-1">
                <h2 className="font-serif text-3xl text-navy">Frequently asked</h2>
                <p className="mt-3 text-navy/65">If your question isn't covered, our team is happy to talk you through it.</p>
              </div>
              <div className="space-y-5 lg:col-span-2">
                {p.faq.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-navy/10 bg-card p-6 open:shadow-lg open:shadow-navy/5">
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-serif text-lg text-navy marker:hidden">
                      {f.q}
                      <span className="mt-1 text-gold transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-navy/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA + related */}
        <section className="border-t border-navy/10 bg-card/40">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="font-serif text-3xl text-navy lg:text-4xl">Speak to a senior solicitor today</h2>
              <p className="mt-4 max-w-lg text-navy/70">Tell us about your matter and we'll come back within one working day with a clear, fixed-fee quote.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/" hash="contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-ivory transition hover:bg-navy/90">
                  Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <a href="mailto:contact@truemanbailey.com" className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3.5 text-sm font-medium text-navy">
                  Email the team
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-navy/55">Related services</p>
              <ul className="mt-5 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-card">
                {p.related.map((r) => (
                  <li key={r.to}>
                    <Link to={r.to} className="group flex items-center justify-between px-6 py-5 text-navy transition hover:bg-ivory">
                      <span className="font-serif text-lg">{r.label}</span>
                      <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
