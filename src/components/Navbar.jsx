import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Flame } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const themeIcons = { light: Sun, dark: Moon, warm: Flame };
const themeLabels = { light: "Light", dark: "Dark", warm: "Warm" };

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, cycleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false); }, [location]);

  const ThemeIcon = themeIcons[theme];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3 shadow-sm"
          : "glass py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <motion.div
              className="cursor-pointer flex flex-col leading-none"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`font-sans text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                Benkiz
              </span>
              <span className={`font-serif text-[0.6rem] tracking-[0.35em] mt-0.5 ${isScrolled ? "text-primary" : "text-white/70"}`}>
                CATERING
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-[11px] uppercase font-medium tracking-widest transition-colors cursor-pointer relative group ${
                    location === link.href
                      ? "text-primary"
                      : isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  {location === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                    />
                  )}
                </span>
              </Link>
            ))}

            {/* Theme Switcher */}
            <motion.button
              onClick={cycleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={`Switch to next theme (current: ${themeLabels[theme]})`}
              data-testid="button-theme-toggle"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isScrolled
                  ? "bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
                  : "bg-white/15 text-white hover:bg-white/30"
              }`}
            >
              <ThemeIcon size={14} />
            </motion.button>

            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-full px-5 py-2 text-[11px] uppercase tracking-widest font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white hover:text-foreground"
                }`}
              >
                Book Event
              </motion.button>
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={cycleTheme}
              whileTap={{ scale: 0.9 }}
              data-testid="button-theme-toggle-mobile"
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                isScrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white"
              }`}
            >
              <ThemeIcon size={14} />
            </motion.button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={isScrolled ? "text-foreground" : "text-white"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMobileMenuOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-[60px] glass-dark z-40 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 + 0.1 }}
                    className={`block font-serif text-4xl transition-colors cursor-pointer ${
                      location === link.href ? "text-primary" : "text-white hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1 }}
              >
                <Link href="/booking">
                  <button className="bg-primary text-primary-foreground rounded-full px-10 py-4 text-sm uppercase tracking-widest font-medium mt-4">
                    Book Event
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
