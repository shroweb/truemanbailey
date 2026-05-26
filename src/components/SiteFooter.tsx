import { Link } from "@tanstack/react-router";
import { Scale } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory/80">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-ivory/20">
                <Scale className="h-4 w-4 text-gold" strokeWidth={1.6} />
              </span>
              <span className="leading-tight">
                <span className="block font-serif text-xl text-ivory">Trueman Bailey</span>
                <span className="block text-[10px] tracking-[0.32em] text-gold">OXFORD SOLICITORS</span>
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/70">
              Trueman Bailey Law Limited is a boutique UK firm delivering clear, personal
              legal advice for property, wills, probate, estate planning and immigration matters.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-ivory/55">
              Authorised and regulated by the Solicitors Regulation Authority.<br />
              SRA No. 8012054 · Trueman Bailey Law Limited · Registered in England & Wales.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base text-ivory">Services</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/conveyancing" className="hover:text-gold">Residential Conveyancing</Link></li>
              <li><Link to="/commercial-property" className="hover:text-gold">Commercial Property</Link></li>
              <li><Link to="/wills-probate" className="hover:text-gold">Wills, LPAs & Probate</Link></li>
              <li><Link to="/immigration" className="hover:text-gold">Immigration</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base text-ivory">Firm</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link to="/" hash="reviews" className="hover:text-gold">Reviews</Link></li>
              <li><Link to="/" hash="fees" className="hover:text-gold">Fees</Link></li>
              <li><Link to="/" hash="contact" className="hover:text-gold">Contact</Link></li>
              <li><a href="#" className="hover:text-gold">Complaints Procedure</a></li>
              <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base text-ivory">Contact</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><a href="tel:01865590330" className="hover:text-gold">01865 590330</a></li>
              <li><a href="mailto:contact@truemanbailey.com" className="hover:text-gold">contact@truemanbailey.com</a></li>
              <li className="text-ivory/70">Didcot · Oxford · London · Birmingham</li>
              <li className="text-ivory/70">UK-wide & international</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Trueman Bailey Law Limited. All rights reserved.</span>
          <span>Conveyancing solicitors Oxford · Didcot conveyancing · UK-wide property law firm</span>
        </div>
      </div>
    </footer>
  );
}
