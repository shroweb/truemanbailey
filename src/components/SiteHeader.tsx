import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, ShieldCheck, Clock, Scale, ArrowRight, Menu, X } from "lucide-react";

const nav = [
  { label: "Residential Conveyancing", to: "/conveyancing" as const },
  { label: "Commercial Property", to: "/commercial-property" as const },
  { label: "Wills & Probate", to: "/wills-probate" as const },
  { label: "Immigration", to: "/immigration" as const },
];

function UtilityBar() {
  return (
    <div className="hidden border-b border-navy/10 bg-navy text-ivory/80 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-gold" /> Authorised & Regulated by the SRA · No. 8012054</span>
          <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> Mon–Fri 9:00–17:30 · Appointments by arrangement</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="mailto:contact@truemanbailey.com" className="inline-flex items-center gap-2 hover:text-ivory"><Mail className="h-3.5 w-3.5" /> contact@truemanbailey.com</a>
          <a href="tel:01865590330" className="inline-flex items-center gap-2 hover:text-ivory"><Phone className="h-3.5 w-3.5" /> 01865 590330</a>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-ivory/90 backdrop-blur-md">
      <UtilityBar />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8 lg:py-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-navy/15 bg-card">
            <Scale className="h-4 w-4 text-gold" strokeWidth={1.6} />
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-[1.35rem] text-navy">Trueman Bailey</span>
            <span className="block text-[10px] tracking-[0.32em] text-gold">OXFORD SOLICITORS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] text-navy/75 xl:flex">
          <Link to="/" className="transition hover:text-navy" activeOptions={{ exact: true }} activeProps={{ className: "text-navy font-medium" }}>Home</Link>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="transition hover:text-navy" activeProps={{ className: "text-navy font-medium" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/" hash="contact" className="transition hover:text-navy">Contact</Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/" hash="contact" className="group inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-ivory transition hover:bg-navy/90">
            Request a Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-ivory lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-navy/80">Home</Link>
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-navy/80">
                {n.label}
              </Link>
            ))}
            <Link to="/" hash="contact" onClick={() => setOpen(false)} className="py-2 text-navy/80">Contact</Link>
            <a href="tel:01865590330" className="mt-2 flex items-center gap-2 text-navy/80"><Phone className="h-4 w-4" /> 01865 590330</a>
            <Link to="/" hash="contact" onClick={() => setOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-medium text-ivory">
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
