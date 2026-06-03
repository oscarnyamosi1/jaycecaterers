import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
const companyPhone = import.meta.env.VITE_CAOMPANY_PHONE_NUMBER

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const createMessage = ({firstname,lastname,email,eventtype,phonenumber,vision,date})=>{
  return `Hello Benkiz I would like to make a booking with you. Email : ${email} and number: ${phonenumber}. I want my event (${eventtype}) to be inspired in this way (vision: ${vision} ) on this date (${date})  . Thank you. ~ ${firstname} ${lastname}`
}
export default function Booking() {
  const [success, setSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const phonenumber = formData.get("phonenumber");
  const eventtype = formData.get("eventtype");
  const date = formData.get("date");
  const vision = formData.get("vision");

  const message = createMessage({
    firstname,
    lastname,
    email,
    eventtype,
    phonenumber,
    vision,
    date,
  });

  const encodedMessage = encodeURIComponent(message);

  window.open(
    `https://wa.me/${companyPhone}?text=${encodedMessage}`,
    "_blank"
  );

  setSuccess(true);
};

  return (
    <div className="bg-background min-h-screen">
      {/* Hero banner */}
      <section className="relative w-full bg-[#0C0C0C]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&q=80" 
            alt="Book Your Event" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center pt-40 pb-28 px-4 flex flex-col items-center">
          <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-semibold block mb-4">Reserve Your Date</span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">Book Your Event</h1>
          <p className="text-white/60 font-light text-lg">Tell us about your upcoming celebration</p>
        </div>
      </section>

      <div className="container mx-auto px-8 py-24">
        {success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto glass-card rounded-2xl p-16 text-center space-y-6"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-primary w-10 h-10" />
            </div>
            <h2 className="font-serif text-4xl text-foreground">Thank You</h2>
            <p className="text-muted-foreground font-light text-lg">
              Your inquiry has been received. Our event team will review your details and contact you shortly to begin planning your extraordinary event.
            </p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto items-start">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-1 space-y-8"
            >
              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 space-y-8">
                <div>
                  <h3 className="font-serif text-2xl mb-6 text-foreground">Contact Info</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Email</p>
                      <p className="font-light text-foreground">benkizbakers@gmail.com</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Phone</p>
                      <p className="font-light text-foreground">+254 795 404 843</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4">
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Office</p>
                      <p className="font-light text-foreground">Kisii Town<br/>Bosongo Kenya</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8">
                <h3 className="font-serif text-2xl mb-6 text-foreground">What to expect</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-muted-foreground font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <span>Initial consultation to understand your vision and requirements.</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <span>Custom proposal and menu draft tailored to your event.</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    <span>Private tasting session to refine your selections.</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-4xl mb-12 text-foreground">Event Details</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-10">
                  <input name='firstname' type="text" placeholder="First Name *" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" required />
                  <input name='lastname' type="text" placeholder="Last Name *" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" required />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <input name="email" type="email" placeholder="Email Address *" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" required />
                  <input name="phonenumber" type="tel" placeholder="Phone Number" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <input name='date' type="date" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none font-light" required />
                  <select name="eventtype" className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-muted-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none font-light" required>
                    <option value="">Event Type *</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate</option>
                    <option value="private">Private Dining</option>
                  </select>
                </div>

                <div>
                  <textarea name='vision' placeholder="Tell us about your vision..." rows={4} className="w-full bg-transparent border-0 border-b border-border pb-3 px-0 text-foreground focus:ring-0 focus:border-foreground transition-colors rounded-none placeholder:text-muted-foreground font-light resize-none"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, y: -2 }}
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full uppercase text-[11px] tracking-[0.2em] font-semibold hover:bg-primary/90 transition-colors"
                >
                  Submit Inquiry
                </motion.button>
              </form>
            </motion.div>

          </div>
        )}
      </div>
    </div>
  );
}
