import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, CheckCircle } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600&q=80" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Get In Touch</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Contact</h1>
          <p className="text-white/60 font-light text-lg">We would love to hear from you</p>
        </div>
      </section>

      <div className="container mx-auto px-8 py-24">
        
        {/* Contact Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 max-w-6xl mx-auto"
        >
          {[
            { i: Phone, l: "Call Us", v: "+254 795 404 843" },
            { i: Mail, l: "Email", v: "benkizbakers@gmail.com" },
            { i: Phone, l: "WhatsApp", v: "+254 795 404 843" },
            { i: MapPin, l: "Visit", v: "123 Culinary Ave, NY" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} whileHover={{ y: -4 }} className="glass-card rounded-2xl p-8 text-center flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <item.i size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold mb-2 text-foreground">{item.l}</h3>
              <p className="font-light text-muted-foreground text-sm">{item.v}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Left col */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="glass-card rounded-2xl aspect-[4/3] flex items-center justify-center relative overflow-hidden bg-secondary/30">
              <MapPin size={40} strokeWidth={1} className="text-primary z-10" />
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8">
                <h3 className="font-serif text-2xl mb-4 text-foreground">Business Hours</h3>
                <ul className="space-y-2 text-sm text-muted-foreground font-light">
                  <li className="flex justify-between"><span>Mon - Fri</span><span>9:00 - 18:00</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>10:00 - 15:00</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 flex flex-col items-center justify-center gap-6">
                <h3 className="font-serif text-xl text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"><Instagram size={18} /></div>
                  <div className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"><Facebook size={18} /></div>
                  <div className="w-10 h-10 rounded-full border border-border text-foreground flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"><Linkedin size={18} /></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right col */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {success ? (
              <div className="glass-card rounded-2xl p-16 text-center space-y-6 h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl text-foreground">Message Sent</h2>
                <p className="text-muted-foreground font-light">
                  Thank you for reaching out. We will get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="font-serif text-4xl mb-4 text-foreground">Send a Message</h2>
                <p className="text-muted-foreground font-light mb-10">Have a general question? Fill out the form below and we'll be in touch.</p>
                
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-10">
                    <input type="text" placeholder="Name *" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" required />
                    <input type="email" placeholder="Email *" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" required />
                  </div>
                  <input type="text" placeholder="Subject" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" />
                  <textarea placeholder="Message *" rows={4} className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light resize-none" required></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    type="submit" 
                    className="w-full bg-primary text-primary-foreground py-4 rounded-full uppercase text-[11px] tracking-[0.2em] font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
