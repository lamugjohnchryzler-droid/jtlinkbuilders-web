import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DynamicCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  // Smooth, elegant modern variants for the image
  const imageVariants = {
    initial: (dir) => ({
      opacity: 0,
      scale: 0.95,
      filter: 'blur(10px)',
      x: dir > 0 ? 60 : -60,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Apple-like smooth cubic-bezier
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      x: dir > 0 ? -60 : 60,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <motion.div 
      className="w-full flex flex-col lg:flex-row items-center justify-between min-h-[60vh] py-12 px-6 relative overflow-hidden"
      animate={{ backgroundColor: currentItem.bgColor }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{ perspective: 2000 }}
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10 scale-90 origin-center">
        
        {/* Left Side: Content & Controls */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 z-10 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <h3 
                className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-tight"
                style={{ color: currentItem.textColor || '#001f3f' }}
              >
                {currentItem.title}
              </h3>
              <p className="text-slate-800 leading-relaxed text-lg max-w-md font-medium mix-blend-color-burn">
                {currentItem.caption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Controls */}
          <div className="flex items-center space-x-4 pt-8">
            <button 
              onClick={handlePrev}
              className="bg-white/80 backdrop-blur hover:bg-white transition-colors p-4 rounded-full shadow-lg border border-white/20 group z-20"
            >
              <ChevronLeft size={24} className="text-slate-700 group-hover:text-slate-900 transition-colors" />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/80 backdrop-blur hover:bg-white transition-colors p-4 rounded-full shadow-lg border border-white/20 group z-20"
            >
              <ChevronRight size={24} className="text-slate-700 group-hover:text-slate-900 transition-colors" />
            </button>
            <div className="ml-6 flex space-x-3">
              {items.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-2 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-10' : 'w-2 opacity-40'}`}
                  style={{ backgroundColor: currentItem.textColor || '#001f3f' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Floating Image with 3D Revolve */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] flex items-center justify-center transform-gpu">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full flex items-center justify-center drop-shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-w-full max-h-full object-contain" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'; 
                  e.target.className = "max-w-full max-h-full object-cover rounded-3xl shadow-2xl"; 
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </motion.div>
  );
}
