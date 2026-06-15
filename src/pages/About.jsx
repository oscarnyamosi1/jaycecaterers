import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1600&q=80" 
            alt="About Benkiz" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Discover</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">About Benkiz</h1>
          <p className="text-white/60 font-light text-lg">A legacy built on passion, precision, and people</p>
        </div>
      </section>

      {/* Story Split */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-8 py-32 grid md:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <motion.div variants={fadeUp} className="relative aspect-square overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80" alt="Our Story" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">01 — Our Story</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl text-foreground">The Benkiz Philosophy</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground font-light leading-relaxed text-lg">
            Founded on the belief that every event deserves to be memorable, Benkiz Catering Company has been redefining culinary experiences for over a decade. Our journey started with a simple passion for bringing people together over exceptional food.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground font-light leading-relaxed text-lg">
            We believe that food is more than sustenance — it is an art form, a conversation starter, and a way to forge lasting connections. Our approach marries classical techniques with modern, editorial presentation, ensuring that every dish tells a story.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-8 grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-12">
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h3 className="font-serif text-3xl mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              To deliver uncompromising culinary excellence and impeccable service, transforming ordinary gatherings into extraordinary, unforgettable events through the power of exceptional food.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-12">
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h3 className="font-serif text-3xl mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              To be the premier standard for luxury catering and baking, constantly innovating and pushing the boundaries of flavor, presentation, and hospitality in every dish we serve.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-[#0C0C0C] py-24">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {[
            { n: "6+", l: "Years" },
            { n: "300+", l: "Events" },
            { n: "30", l: "Chefs" },
            { n: "98%", l: "Happy Clients" }
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div className="font-serif text-5xl md:text-6xl text-primary mb-4">{s.n}</div>
              <div className="text-white uppercase tracking-widest text-xs font-semibold">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="container mx-auto px-8 py-32"
      >
        <div className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">03 — Our Team</motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl text-foreground">Culinary Leaders</motion.h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: "Marco Bianchi", t: "Chef de Cuisine", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80" },
            { n: "Sophie Laurent", t: "Pastry Chef", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
            { n: "James Okafor", t: "Sous Chef", img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80" }
          ].map((m, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -6, scale: 1.02 }} className="glass-card rounded-2xl overflow-hidden p-6 text-center">
              <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6">
                <motion.img 
                  whileHover={{ scale: 1.06 }} 
                  transition={{ duration: 0.6 }}
                  src={m.img} 
                  alt={m.n} 
                  className="w-full h-full object-cover transition-all duration-500" 
                />
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-1">{m.n}</h4>
              <p className="text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">{m.t}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Strip */}
      <section className="bg-[#0C0C0C] py-24 text-center px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-10">Ready to work with us?</motion.h2>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <Link href="/booking">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-semibold"
                data-testid="about-book-btn"
              >
                Book an Event
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                className="glass text-white rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-medium"
                data-testid="about-contact-btn"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
