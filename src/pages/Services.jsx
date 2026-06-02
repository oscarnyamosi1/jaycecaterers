import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

const services = [
  {
    title: "Wedding Catering",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
    desc: "Your special day demands absolute perfection. From elegant multi-course plated dinners to lavish artisanal buffets, our wedding catering is designed to reflect your unique love story.",
    features: ["Custom menu design", "Full setup & decoration", "Dedicated coordinator"]
  },
  {
    title: "Corporate Events",
    img: "https://images.unsplash.com/photo-1505362946985-78e71c667086?w=900&q=80",
    desc: "Impress clients and reward your team. We provide sophisticated, seamless catering for product launches, galas, and board meetings.",
    features: ["Dietary accommodations", "Branded presentations", "Same-day delivery"]
  },
  {
    title: "Birthday Parties",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&q=80",
    desc: "Celebrate life's milestones with extraordinary food and drinks that delight your guests and leave a lasting impression.",
    features: ["Custom cake design", "Theme matching menus", "Entertainment packages"]
  },
  {
    title: "Graduation Events",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
    desc: "Mark the achievement with family and friends through a well-curated culinary experience.",
    features: ["Budget-friendly packages", "Family-style service", "Outdoor options"]
  },
  {
    title: "Private Dining",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    desc: "Bring the Michelin-star experience home. Our chefs curate intimate, highly personalized tasting menus in your own dining room.",
    features: ["In-home chef service", "Personalized menus", "Wine pairing"]
  },
  {
    title: "Outdoor Catering",
    img: "https://images.unsplash.com/photo-1533143708019-ea5cfa80213e?w=900&q=80",
    desc: "Experience gourmet dining in nature. We deliver spectacular food regardless of the venue or elements.",
    features: ["Weather-proof setup", "BBQ & grill stations", "Full equipment provided"]
  }
];

export default function Services() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80" 
            alt="Our Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Expertise</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Our Services</h1>
          <p className="text-white/60 font-light text-lg">Tailored Catering Solutions</p>
        </div>
      </section>

      {/* Services List */}
      <div className="py-24">
        {services.map((service, idx) => {
          const isEven = idx % 2 !== 0;
          return (
            <motion.section 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="container mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              <div className={`relative ${isEven ? 'md:order-2' : ''}`}>
                <motion.div variants={fadeUp} className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                  <motion.img 
                    whileHover={{ scale: 1.06 }} 
                    transition={{ duration: 0.6 }}
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 glass rounded-full px-6 py-2">
                    <span className="text-white text-xs uppercase tracking-widest font-semibold">0{idx + 1}</span>
                  </div>
                </motion.div>
              </div>

              <div className={`space-y-6 ${isEven ? 'md:order-1' : ''}`}>
                <motion.span variants={fadeUp} className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">
                  0{idx + 1} — {service.title}
                </motion.span>
                <motion.h2 variants={fadeUp} className="font-serif text-4xl lg:text-5xl text-foreground">
                  {service.title}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground font-light leading-relaxed text-lg mb-8">
                  {service.desc}
                </motion.p>
                <motion.ul variants={stagger} className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <motion.li key={fIdx} variants={fadeUp} className="flex items-center gap-3 text-muted-foreground font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div variants={fadeUp}>
                  <Link href="/booking">
                    <span className="inline-flex items-center text-primary text-[11px] uppercase tracking-[0.2em] font-semibold hover:text-foreground transition-colors cursor-pointer group">
                      Inquire Now <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-[#0C0C0C] py-24 text-center px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-white mb-10">Let us cater your next event</motion.h2>
          <motion.div variants={fadeUp}>
            <Link href="/booking">
              <motion.button 
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-[11px] uppercase tracking-widest font-semibold"
              >
                Book Your Event
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
