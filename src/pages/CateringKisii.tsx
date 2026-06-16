import { motion } from "framer-motion";
import { Utensils, Heart, Users, Cake, MapPin, Star } from "lucide-react";

export default function CateringKisiiPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">

      {/* HERO */}
      <section className="container mx-auto px-4 md:px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase block">
              Catering Services in Kisii
            </span>

            <h1 className="font-serif text-5xl md:text-6xl leading-tight">
              Premium <br />
              <span className="text-muted-foreground italic">
                Event Catering
              </span>
              <br />
              in Kisii
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Benkiz Catering is a trusted catering company in Kisii offering
              professional catering for weddings, birthdays, corporate events,
              private parties and custom food experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We focus on fresh ingredients, elegant presentation, and reliable
              service tailored to your event needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-2 rounded-[2rem]"
          >
            <img
              src="https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538196/IMG-20260615-WA0031_apsxwp.jpg"
              alt="Catering services in Kisii"
              className="rounded-[1.5rem] w-full aspect-square object-cover"
              loading="lazy"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES (same style as values section) */}
      <section className="bg-card/50 py-24">
        <div className="container mx-auto px-4 md:px-6">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl mb-4">
              Our Catering Services in Kisii
            </h2>
            <p className="text-muted-foreground">
              Complete food solutions for every type of event.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: Heart,
                title: "Wedding Catering",
                desc: "Elegant wedding menus and full event food service."
              },
              {
                icon: Users,
                title: "Corporate Events",
                desc: "Professional catering for meetings and business events."
              },
              {
                icon: Cake,
                title: "Birthday Parties",
                desc: "Custom menus for private celebrations and birthdays."
              },
              {
                icon: Utensils,
                title: "Custom Catering",
                desc: "Tailored menus for any special occasion."
              }
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-3xl text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-serif text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (timeline-style section like your layout) */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">

          <h2 className="font-serif text-4xl mb-16 text-center">
            Why Choose Benkiz Catering in Kisii
          </h2>

          <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:w-0.5 before:bg-border">

            {[
              {
                title: "Fresh Ingredients",
                desc: "We use high-quality fresh ingredients for every meal we prepare in Kisii events."
              },
              {
                title: "Professional Service",
                desc: "Our team ensures smooth catering setup, serving and coordination."
              },
              {
                title: "Custom Menus",
                desc: "We design menus based on your event type, budget and guest preferences."
              },
              {
                title: "Reliable Delivery",
                desc: "We arrive on time and ensure everything is ready for your event."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:odd:flex-row-reverse group"
              >

                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary z-10">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>

                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                  <h4 className="font-serif text-xl mb-2">
                    {item.title}
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Q&A SECTION */}
    <section className="py-24">
    <div className="container mx-auto px-4 md:px-6 max-w-5xl">

        <h2 className="font-serif text-4xl mb-16 text-center">
        Common Questions About Catering Services in Kisii
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

        {[
            {
            q: "What is the best catering service in Kisii?",
            a: "Benkiz Catering is one of the trusted catering services in Kisii, offering professional food service for weddings, birthdays, corporate events and private parties."
            },
            {
            q: "How much does catering cost in Kisii?",
            a: "Catering prices in Kisii depend on the number of guests, menu type and event size. Benkiz Catering offers flexible packages to fit different budgets."
            },
            {
            q: "Do you offer wedding catering in Kisii?",
            a: "Yes, we provide full wedding catering services including buffet setup, plated meals, drinks and full event food coordination."
            },
            {
            q: "Can I order catering for a small event?",
            a: "Yes. We handle both small private events and large functions with customized menus based on your needs."
            },
            {
            q: "Do you offer cakes in Kisii?",
            a: "Yes, we provide custom cakes for birthdays, weddings and special celebrations with personalized designs and flavors."
            },
            {
            q: "How do I book catering services in Kisii?",
            a: "You can book by contacting Benkiz Catering through our contact page or WhatsApp to get a custom quote for your event."
            },
            {
            q: "Do you offer corporate catering in Kisii?",
            a: "Yes, we provide professional catering for meetings, conferences, company events and business functions."
            },
            {
            q: "What areas do you serve besides Kisii?",
            a: "We primarily serve Kisii and surrounding regions, offering flexible delivery and event catering solutions."
            }
        ].map((item, i) => (
            <div
            key={i}
            className="glass-card p-6 rounded-3xl"
            >
            <h3 className="font-serif text-lg mb-3">
                {item.q}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.a}
            </p>
            </div>
        ))}

        </div>
    </div>
    </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">

          <div className="space-y-6">
            <h2 className="font-serif text-4xl">
              Book Catering Services in Kisii
            </h2>

            <p className="text-muted-foreground">
              Get a custom catering package for your wedding, event or celebration today.
            </p>

            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-2xl"
            >
              Request Catering
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}