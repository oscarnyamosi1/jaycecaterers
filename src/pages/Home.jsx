import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "wouter";
import { Star, Award, Utensils, Heart, Sparkles, Clock } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

function Section({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      className={className}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div className="flex flex-col w-full bg-background">

      {/* ── HERO ── */}
      <section ref={heroRef} className="relative min-h-screen flex overflow-hidden">
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: imgY, scale: imgScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?w=1600&q=80"
            alt="Premium catering spread"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-20 max-w-3xl"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0 }}
            className="h-px w-12 bg-primary mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/60 uppercase tracking-[0.3em] text-[11px] font-medium mb-6"
          >
            Elevated Culinary Experiences
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[1.08] mb-8"
          >
            Catering<br />
            <em className="text-primary not-italic">For Every</em><br />
            Occasion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 font-light text-lg max-w-md mb-10 leading-relaxed"
          >
            Unforgettable dining experiences crafted with passion, precision, and the finest seasonal ingredients.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-[11px] uppercase tracking-widest font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
              >
                Book Your Event
              </motion.button>
            </Link>
            <Link href="/menu">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 glass text-white rounded-full text-[11px] uppercase tracking-widest font-medium hover:bg-white/20 transition-colors"
              >
                View Menu
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-white/30"
          />
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll</span>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <Section className="relative py-0 overflow-hidden">
        <div className="bg-[#0C0C0C] relative">
          {/* subtle bg image */}
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=60" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 container mx-auto px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
              {[
                { num: "500+", label: "Events Served" },
                { num: "10+", label: "Years of Excellence" },
                { num: "50", label: "Expert Chefs" },
                { num: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="text-center py-10 px-4 glass-dark"
                >
                  <p className="text-primary font-serif text-4xl md:text-5xl font-light mb-2">{stat.num}</p>
                  <p className="text-white/50 uppercase tracking-widest text-[10px] font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── SERVICES ── */}
      <Section className="py-32 bg-background">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">
              01 — What We Do Best
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-foreground">
              Our Services
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", title: "Weddings", desc: "Flawless execution, elegant presentation, and memories that last a lifetime." },
              { img: "https://images.unsplash.com/photo-1505362946985-78e71c667086?w=800&q=80", title: "Corporate", desc: "Professional catering that impresses clients and energises teams." },
              { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", title: "Private Dining", desc: "Intimate chef-curated experiences tailored to your exact vision." },
            ].map((srv, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                data-testid={`card-service-${i}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={srv.img}
                    alt={srv.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-white/50 text-xs font-mono mb-2 block">0{i + 1}</span>
                  <h3 className="font-serif text-2xl text-white mb-2">{srv.title}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeIn} className="text-center mt-14">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-border text-foreground rounded-full px-8 py-3 text-[11px] uppercase tracking-widest font-medium hover:border-primary hover:text-primary transition-colors"
              >
                All Services
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ── EDITORIAL SPLIT ── */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-[85vh]">
        <div className="relative overflow-hidden min-h-[50vw] md:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1200&q=80"
            alt="Featured dish"
            className="w-full h-full object-cover"
          />
          {/* floating glass badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-8 glass rounded-2xl px-6 py-4 max-w-[220px]"
          >
            <p className="text-white text-xs uppercase tracking-widest font-medium mb-1">Signature Dish</p>
            <p className="text-white/70 text-[11px] font-light">Herb-Crusted Wagyu Tenderloin</p>
          </motion.div>
        </div>
        <div className="bg-background flex flex-col justify-center px-10 md:px-16 lg:px-24 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-6">
              02 — Culinary Craft
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-foreground leading-tight mb-8">
              Masterpieces<br />On Every Plate
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground font-light leading-relaxed mb-10 text-lg max-w-md">
              Our chefs draw from classical technique and global inspiration, transforming seasonal ingredients into unforgettable dining moments.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/menu">
                <motion.span
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-semibold border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors cursor-pointer"
                >
                  Explore The Menu <span>&rarr;</span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <Section className="py-32 bg-secondary/30">
        <div className="container mx-auto px-8">
          <div className="text-center mb-20">
            <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">
              03 — Our Promise
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl text-foreground">Why Choose Benkiz</motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Star, title: "Premium Ingredients", desc: "Locally sourced, seasonally driven." },
              { icon: Award, title: "Expert Chefs", desc: "Classically trained culinary team." },
              { icon: Utensils, title: "Bespoke Menus", desc: "Customized to your exact vision." },
              { icon: Heart, title: "Impeccable Service", desc: "Attentive, discreet, professional." },
              { icon: Sparkles, title: "Stunning Presentation", desc: "Every plate is a work of art." },
              { icon: Clock, title: "Flawless Execution", desc: "Punctual and perfect, every time." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-8 transition-all duration-300"
              >
                <item.icon className="text-primary w-5 h-5 mb-5" strokeWidth={1.5} />
                <h3 className="font-sans font-medium text-foreground text-base mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── TESTIMONIALS ── */}
      <Section className="py-32 bg-[#0C0C0C] relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 opacity-[0.06]">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=60" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">
              04 — Kind Words
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl text-white">What Clients Say</motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { q: "An absolutely phenomenal experience. The food was the undeniable highlight of our wedding day.", a: "Sarah & James", e: "Wedding Reception" },
              { q: "Professional from first call to last bite. They elevated our annual gala to something truly extraordinary.", a: "TechCorp Inc.", e: "Corporate Gala" },
              { q: "The attention to detail and the flavour profiles were of Michelin-star quality. Simply exceptional.", a: "Michael T.", e: "Private Dinner" },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass rounded-2xl p-10 transition-all duration-400"
              >
                <span className="text-primary font-serif text-6xl leading-none block mb-2 opacity-60">"</span>
                <p className="text-white font-serif text-lg italic leading-relaxed mb-8">{t.q}</p>
                <div className="border-t border-white/10 pt-5">
                  <p className="font-medium text-xs text-white uppercase tracking-wider">{t.a}</p>
                  <p className="text-white/40 text-xs font-light mt-1">{t.e}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-6">
              05 — Ready?
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-white mb-12 leading-tight">
              Let's Create<br />Something Extraordinary
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 bg-primary text-primary-foreground rounded-full text-[11px] uppercase tracking-widest font-semibold shadow-xl shadow-primary/30"
                >
                  Get a Free Quote
                </motion.button>
              </Link>
              <Link href="/menu">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 glass text-white rounded-full text-[11px] uppercase tracking-widest font-medium"
                >
                  View Menu
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
