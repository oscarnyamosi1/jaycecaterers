import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

const categories = ["All", "Appetizers", "Mains", "Desserts"];

const menuItems = [
  { category: "Appetizers", name: "Scallop Crudo", desc: "Citrus, micro cilantro, smoked sea salt.", price: "$22", img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=600&q=80" },
  { category: "Appetizers", name: "Beef Tartare", desc: "Quail egg yolk, capers, truffle toast.", price: "$26", img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?w=600&q=80" },
  { category: "Appetizers", name: "Burrata & Fig", desc: "Heirloom tomato, aged balsamic glaze.", price: "$18", img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80" },
  { category: "Mains", name: "Wagyu Tenderloin", desc: "Pomme purée, wild mushrooms, bone marrow jus.", price: "$85", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
  { category: "Mains", name: "Seared Sea Bass", desc: "Saffron risotto, charred asparagus, lemon butter.", price: "$55", img: "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=80" },
  { category: "Mains", name: "Herb Rack of Lamb", desc: "Mint crust, glazed root veg, port reduction.", price: "$65", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
  { category: "Desserts", name: "Dark Chocolate Dome", desc: "Gold leaf, raspberry coulis, vanilla bean.", price: "$16", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&q=80" },
  { category: "Desserts", name: "Classic Crème Brûlée", desc: "Caramelized sugar, seasonal berries.", price: "$14", img: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=600&q=80" }
];

export default function Menu() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter(i => i.category === active);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80" 
            alt="The Menu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Culinary Excellence</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">The Menu</h1>
          <p className="text-white/60 font-light text-lg">Curated selections for the discerning palate</p>
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

      <div className="container mx-auto px-8 py-24">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.name}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card rounded-2xl overflow-hidden border border-border/50 group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.06 }} 
                    transition={{ duration: 0.6 }}
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 glass px-4 py-1.5 rounded-full">
                    <span className="text-white text-[10px] uppercase tracking-widest font-semibold">{item.category}</span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-2">{item.category}</span>
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
                    <span className="font-sans text-sm font-semibold text-primary mt-1">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CTA */}
      <section className="bg-secondary/30 py-24 text-center px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-foreground mb-10">Bespoke menus for your occasion</motion.h2>
          <motion.div variants={fadeUp}>
            <Link href="/booking">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-semibold"
              >
                Inquire Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
