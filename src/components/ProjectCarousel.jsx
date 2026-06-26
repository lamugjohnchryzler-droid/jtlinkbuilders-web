import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectCarousel({ items, themeColor }) {
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
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } // Even softer, slower cinematic ease
    },
    exit: (dir) => ({
      opacity: 0,
      scale: 1.05,
      filter: 'blur(10px)',
      x: dir > 0 ? -60 : 60,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full min-h-[500px]" style={{ perspective: 2000 }}>
      
      {/* Left Side: Content & Controls */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 z-10 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(5px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-6"
          >
            <h3 
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none"
              style={{ color: themeColor || '#001f3f' }}
            >
              {items[currentIndex].title}
            </h3>
            <p className="text-slate-700 leading-relaxed text-lg max-w-md font-light">
              {items[currentIndex].caption}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Minimalist Controls */}
        <div className="flex items-center space-x-4 pt-4">
          <button 
            onClick={handlePrev}
            className="bg-white hover:bg-slate-50 transition-colors p-4 rounded-xl shadow-sm border border-slate-200 group z-20"
          >
            <ChevronLeft size={24} className="text-slate-400 group-hover:text-slate-800 transition-colors" />
          </button>
          <button 
            onClick={handleNext}
            className="bg-white hover:bg-slate-50 transition-colors p-4 rounded-xl shadow-sm border border-slate-200 group z-20"
          >
            <ChevronRight size={24} className="text-slate-400 group-hover:text-slate-800 transition-colors" />
          </button>
          <div className="ml-6 flex space-x-2">
            {items.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8' : 'w-2 opacity-30'}`}
                style={{ backgroundColor: themeColor || '#001f3f' }}
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
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
              className="max-w-full max-h-full object-cover rounded-[2rem] shadow-2xl" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'; 
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  );
}
