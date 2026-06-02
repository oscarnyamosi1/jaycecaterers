import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const categories = ["All", "Events", "Plating"];

const images = [
  { c: "Events", s: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80" },
  { c: "Plating", s: "https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80" },
  { c: "Events", s: "https://images.unsplash.com/photo-1505362946985-78e71c667086?w=900&q=80" },
  { c: "Plating", s: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" },
  { c: "Events", s: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=900&q=80" },
  { c: "Plating", s: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80" },
  { c: "Events", s: "https://images.unsplash.com/photo-1519657337289-077653f724ed?w=900&q=80" },
  { c: "Plating", s: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=900&q=80" },
  { c: "Events", s: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&q=80" }
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? images : images.filter(i => i.c === active);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519657337289-077653f724ed?w=1600&q=80" 
            alt="Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Visual Portfolio</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Gallery</h1>
          <p className="text-white/60 font-light text-lg">Glimpses of our craft and experiences</p>
        </div>
      </section>

      {/* Sticky Filter */}
      <div className="sticky top-[68px] z-30 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-8 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-8 py-3 text-[11px] uppercase tracking-widest font-medium transition-all duration-300 ${
                active === cat 
                ? "bg-primary text-primary-foreground border border-primary" 
                : "border border-border text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={img.s + i}
                className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightbox(img.s)}
              >
                <motion.img 
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                  src={img.s} 
                  alt="Gallery item" 
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <ZoomIn className="text-white w-8 h-8" strokeWidth={1.5} />
                  <span className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold">{img.c}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>
            <motion.img 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={lightbox} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" 
              onClick={e => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
