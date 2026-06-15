import React from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C0C] text-white pt-20 pb-8">
      <div className="container mx-auto px-4 md:px-8">

        {/* Brand header */}
        <div className="border-b border-white/10 pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-3">Benkiz</h2>
            <p className="font-serif text-xs tracking-[0.4em] text-primary uppercase">Catering Company</p>
          </div>
          <p className="text-white/50 font-light max-w-xs leading-relaxed text-sm">
            Exceptional catering for every occasion. Creating unforgettable dining experiences with passion and the finest ingredients.
          </p>
        </div>

        {/* 4-column links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-medium mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[["Home","/"],["About","/about"],["Services","/services"],["Menu","/menu"],["Gallery","/gallery"]].map(([l,h])=>(
                <li key={h}><Link href={h}><span className="text-white/70 hover:text-primary text-sm font-light transition-colors cursor-pointer">{l}</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-medium mb-5">Services</h4>
            <ul className="space-y-3">
              {["Wedding Catering","Corporate Events","Private Dining","Birthday Parties","Outdoor Events"].map(s=>(
                <li key={s}><Link href="/services"><span className="text-white/70 hover:text-primary text-sm font-light transition-colors cursor-pointer">{s}</span></Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-medium mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>Kisii Mwembe,Homabay Town</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-light">
                <Phone size={14} className="text-primary shrink-0" />
                <span>+254 795 404 843 / +254 707 091 550</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm font-light">
                <Mail size={14} className="text-primary shrink-0" />
                <span>benkizbakers@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest text-white/40 font-medium mb-5">Follow Us</h4>
            <div className="flex flex-col gap-3">
              {[{icon:Facebook,label:"Facebook",link:"https://www.facebook.com/people/Benkiz-Kitchen-and-Bites/61578599433460/#"},
              {icon:Instagram,label:"Instagram",link:"#"},
              {icon:Linkedin,label:"LinkedIn",link:"#"}].map(({icon:Icon,label,link})=>(
                <a key={label} href={link} target="_blank" className="flex items-center gap-3 text-white/70 hover:text-primary text-sm font-light transition-colors group">
                  <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Icon size={12} />
                  </span>
                  {label}
                </a>
              ))}
              <a href="#" className="flex items-center gap-3 text-white/70 hover:text-primary text-sm font-light transition-colors group">
                <span className="w-7 h-7 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary transition-colors">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/></svg>
                </span>
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-light">
            &copy; {new Date().getFullYear()} Benkiz Catering Company. All rights reserved.
          </p>
          <Link href="/booking">
            <span className="text-primary text-xs uppercase tracking-widest font-medium hover:underline cursor-pointer">
              Book an Event &rarr;
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
