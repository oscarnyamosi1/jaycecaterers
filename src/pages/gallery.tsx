import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CATEGORIES = ["All", "Events", "Food", "Venues"];

const IMAGES = [
  { id: 1, src: "https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538237/IMG-20260615-WA0096_xu0yp5.jpg", category: "Events", title: "Gala Dinner Setup" },
  { id: 2, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538234/IMG-20260615-WA0093_qu9jed.jpg`, category: "Venues", title: "Outdoor Reception" },
  { id: 3, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538218/IMG-20260615-WA0085_ckvtpk.jpg`, category: "Events", title: "Corporate Buffet" },
  { id: 4, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538218/IMG-20260615-WA0088_wgocmu.jpg`, category: "Food", title: "Slow Braised Stew" },
  { id: 5, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538213/IMG-20260615-WA0075_mlh4k0.jpg`, category: "Food", title: "Appetizer" },
  { id: 6, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538208/IMG-20260615-WA0066_hkqrnv.jpg`, category: "Venues", title: "Intimate Dining" },
  { id: 7, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538206/IMG-20260615-WA0060_osr7tp.jpg`, category: "Food", title: "Artisanal Dessert" },
  { id: 8, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538205/IMG-20260615-WA0063_dymnhy.jpg`, category: "Events", title: "Signature Wedding Setup" },
  { id: 9, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538220/IMG-20260615-WA0086_jiiep0.jpg`, category: "Events", title: "Event Coverage" },
  { id: 10, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538205/IMG-20260615-WA0062_ofuwhk.jpg`, category: "Events", title: "Event Coverage" },
  { id: 11, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538205/IMG-20260615-WA0061_ouzl8l.jpg`, category: "Events", title: "Event Coverage" },
  { id: 12, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538204/IMG-20260615-WA0057_dvypci.jpg`, category: "Events", title: "Event Setup" },
  { id: 13, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538204/IMG-20260615-WA0058_rrqtvt.jpg`, category: "Food", title: "Appetizer" },
  { id: 14, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538202/IMG-20260615-WA0056_zppmin.jpg`, category: "Events", title: "Event Coverage" },
  { id: 15, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538202/IMG-20260615-WA0053_vj8t3u.jpg`, category: "Food", title: "Appetizer" },
  { id: 16, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538199/IMG-20260615-WA0052_dqqn0m.jpg`, category: "Food", title: "Premium Buffet" },
  { id: 17, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538199/IMG-20260615-WA0054_uhw2mm.jpg`, category: "Food", title: "Choma" },
  { id: 18, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538199/IMG-20260615-WA0028_dyxctb.jpg`, category: "Events", title: "Corporate Event Setup" },
  { id: 19, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538197/IMG-20260615-WA0032_lndxzt.jpg`, category: "Personell", title: "The Chef" },
  { id: 20, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538192/IMG-20260615-WA0022_itzigs.jpg`, category: "Activity", title: "Grilling" },
  { id: 21, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538192/IMG-20260615-WA0025_hr82yt.jpg`, category: "Activity", title: "Grilling" },
  { id: 22, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538191/IMG-20260615-WA0027_oikuco.jpg`, category: "Food", title: "Bakes" },
  { id: 23, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538188/IMG-20260615-WA0024_z1fi2v.jpg`, category: "Food", title: "BBQ" },
  { id: 24, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538187/IMG-20260615-WA0026_cpu0pt.jpg`, category: "Food", title: "Bakes" },
  { id: 25, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538183/IMG-20260615-WA0021_kki6qe.jpg`, category: "Food", title: "Manadazi" },
  { id: 26, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538178/IMG-20260615-WA0020_kwgjpp.jpg`, category: "Food", title: "Bakes" },
  { id: 27, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538177/IMG-20260615-WA0019_chokmx.jpg`, category: "Food", title: "Bakes" },
  { id: 28, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538174/IMG-20260615-WA0014_fmbmeu.jpg`, category: "Food", title: "Appetizer" },
  { id: 29, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538173/IMG-20260615-WA0016_emgyxh.jpg`, category: "Food", title: "Appetizer" },
  { id: 30, src: `https://res.cloudinary.com/dw0l7b86h/image/upload/v1781538170/IMG-20260615-WA0017_rlnuqy.jpg`, category: "Food", title: "Appetizer" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImg, setSelectedImg] = useState<typeof IMAGES[0] | null>(null);

  const filteredImages = IMAGES.filter(img => 
    activeCategory === "All" || img.category === activeCategory
  );

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary tracking-[0.2em] text-sm font-medium uppercase mb-4 block">Portfolio</span>
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Event Gallery</h1>
          <p className="text-lg text-muted-foreground">
            A visual journey through our most memorable events and exquisite dishes.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {CATEGORIES.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className={`rounded-full ${activeCategory === cat ? 'shadow-md' : 'bg-background/50 backdrop-blur-sm'}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer glass"
                onClick={() => setSelectedImg(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <ZoomIn className="w-8 h-8 text-white mb-2" />
                  <span className="text-white font-medium text-center">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black/90 border-0 glass">
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImg && (
            <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title} 
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md text-white p-4 rounded-xl text-center">
                <h3 className="font-serif text-2xl">{selectedImg.title}</h3>
                <p className="text-white/70 text-sm uppercase tracking-wider">{selectedImg.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
