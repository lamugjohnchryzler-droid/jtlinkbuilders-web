import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ThumbnailCarousel({ items, hideThumbnails = false, externalIndex, onIndexChange }) {
  const [localIndex, setLocalIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const isControlled = externalIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : localIndex;

  const handleNext = () => {
    setDirection(1);
    const nextIdx = (currentIndex + 1) % items.length;
    if (isControlled) onIndexChange(nextIdx);
    else setLocalIndex(nextIdx);
  };

  const handlePrev = () => {
    setDirection(-1);
    const prevIdx = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    if (isControlled) onIndexChange(prevIdx);
    else setLocalIndex(prevIdx);
  };

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  // Reorder items so the active item is always first in the array visually
  const orderedItems = [
    ...items.slice(currentIndex),
    ...items.slice(0, currentIndex)
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* Blurred Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={currentItem.image} 
            alt="background" 
            className="w-full h-full object-cover" 
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80'; 
            }}
          />
          {/* Dark gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 mt-32">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start space-y-6">
          {/* Optional pagination indicator */}
          <div className="flex flex-col gap-2 absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden lg:flex z-30">
            {items.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  if (isControlled) onIndexChange(idx);
                  else setLocalIndex(idx);
                }}
                className={`w-2 rounded-full transition-all duration-300 cursor-pointer hover:bg-white ${idx === currentIndex ? 'h-8 bg-white' : 'h-2 bg-white/30'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight whitespace-pre-line leading-tight">
                {currentItem.title}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                {currentItem.caption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Controls */}
          <div className="flex lg:hidden gap-4 pt-4 z-30">
            <button 
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Right Side: Thumbnail Cards (hidden if hideThumbnails is true) */}
        {!hideThumbnails && (
          <div className="hidden lg:flex w-full lg:w-7/12 flex-col justify-end items-end relative overflow-visible h-[450px]">
            <div className="flex gap-6 absolute right-0 top-0">
              <AnimatePresence mode="popLayout" custom={direction}>
                {orderedItems.slice(0, 3).map((item, idx) => {
                  const isActive = idx === 0;
                  return (
                    <motion.div
                      key={item.title}
                      layout
                      initial={{ opacity: 0, x: 100, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        scale: 1,
                        width: isActive ? 300 : 200,
                        height: isActive ? 400 : 300,
                        marginTop: isActive ? 0 : 50 // center smaller cards vertically
                      }}
                      exit={{ opacity: 0, x: -50, scale: 0.8 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 group cursor-pointer"
                      onClick={() => {
                        if (!isActive) handleNext(); // Clicking a small card moves to the next
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1541888088320-bf1b138e6e5a?auto=format&fit=crop&w=800&q=80'; 
                        }}
                      />
                      {/* Card overlay text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                        <div className="space-y-1">
                          <h4 className="text-white font-bold text-lg">{item.title}</h4>
                          <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Services</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 right-0 flex gap-4 pr-[100px]">
              <button 
                onClick={handlePrev}
                className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white z-20"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white z-20"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Absolute Nav Controls for Projects (fixed position to avoid layout shifts) */}
        {hideThumbnails && (
          <div className="hidden lg:flex absolute bottom-12 left-6 lg:left-12 gap-4 z-30">
            <button 
              onClick={handlePrev}
              className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/20 hover:bg-white/40 backdrop-blur transition-colors p-3 rounded-full text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
