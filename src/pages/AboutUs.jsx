import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function AboutUs() {
  const location = useLocation();
  const images = ['/vis1.jpg', '/vis2.jpg', '/vis3.jpg', '/vis4.jpg'];
  const [currentImg, setCurrentImg] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Wait for the 500ms 3D menu transition to fully complete!
        // If we calculate position or use scrollIntoView while it is transitioning/scaled, 
        // the browser will scroll the hidden-overflow body horizontally and break the layout.
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 550);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden pt-40 pb-24">
      {/* Very subtle elegant background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Split Layout */}
        <div id="our-story" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-16 md:mb-32 scroll-mt-24">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#001f3f] leading-[1.1]">
              BUILDING<br />VISIONS<br />
              SINCE 2009
            </h1>
            <h2 className="text-2xl font-bold text-[#001f3f]">Building Icons. Engineering Excellence.</h2>
            
            <div className="space-y-6 text-lg text-slate-800 font-light leading-relaxed max-w-lg border-l-2 border-[#001f3f] pl-6 ml-2">
              <p>
                JTL Link Builders is a premier design and construction firm powered by a professional team of engineers and professionals. We don't just build structures; we transform visionary ideas into enduring landmarks.
              </p>
              <p>
                Fully registered with the DTI and BIR, we combine uncompromising compliance with elite craftsmanship to deliver projects you can trust.
              </p>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImg}
                src={images[currentImg]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541888088320-bf1b138e6e5a?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/80 via-transparent to-transparent opacity-60 mix-blend-multiply" />
            
            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-8 flex gap-3 z-20">
              {images.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImg(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer hover:bg-white ${idx === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        </div>

      {/* Vision & Mission Section with Distinguishing Background */}
      <div id="vision-mission" className="relative py-16 md:py-32 bg-slate-100 border-y border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#001f3f] mb-12 md:mb-20 text-center tracking-tight">
            VISION <span className="font-light text-slate-400 italic font-serif">&</span> MISSION
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Vision Card */}
            <div 
              onClick={() => setActiveCard(activeCard === 'vision' ? null : 'vision')}
              className={`bg-white p-12 lg:p-16 rounded-[2rem] shadow-xl border border-slate-100 transition-all duration-500 cursor-pointer ${activeCard === 'vision' ? '-translate-y-6 shadow-2xl shadow-blue-500/20 ring-4 ring-blue-50' : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200'}`}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl font-black text-blue-600">V</span>
              </div>
              <h3 className="text-2xl font-bold text-[#001f3f] mb-6">Our Vision</h3>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  To expand our footprint across all parts of the Philippines, establishing JTL Link Builders as a leading nationwide construction firm. We aim to shape the country’s landscape through modern, innovative, and highly functional designs that turn our clients' architectural dreams into reality, setting a new benchmark for structural reliability and contemporary style.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div 
              onClick={() => setActiveCard(activeCard === 'mission' ? null : 'mission')}
              className={`bg-white p-12 lg:p-16 rounded-[2rem] shadow-xl border border-slate-100 transition-all duration-500 cursor-pointer ${activeCard === 'mission' ? '-translate-y-6 shadow-2xl shadow-slate-500/20 ring-4 ring-slate-50' : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200'}`}
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-2xl font-black text-slate-800">M</span>
              </div>
              <h3 className="text-2xl font-bold text-[#001f3f] mb-6">Our Mission</h3>
              <div className="space-y-4 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  To drive progress through safe, sustainable construction that meets the highest engineering standards and design trends. We deliver every project with absolute transparency and compliance, building trusted relationships alongside enduring structures. Beyond the build, we are dedicated to uplifting communities, creating stable, meaningful careers where local talent can thrive and grow with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div id="milestones" className="relative py-16 md:py-32 bg-[#f8fafc] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#001f3f] mb-12 md:mb-20 text-center tracking-tight">
            COMPANY <span className="font-light text-slate-400 italic font-serif">MILESTONES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div 
              onClick={() => setActiveCard(activeCard === 'm1' ? null : 'm1')}
              className={`bg-white p-12 rounded-[2rem] border border-slate-200 text-center transition-all duration-500 cursor-pointer flex flex-col justify-center items-center h-64 ${activeCard === 'm1' ? '-translate-y-4 shadow-2xl shadow-[#001f3f]/20 ring-4 ring-[#001f3f]/10 border-[#001f3f]/20' : 'hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50'}`}
            >
              <div className="text-6xl md:text-7xl font-black text-[#001f3f] mb-4">50+</div>
              <div className="text-sm md:text-base font-bold tracking-widest text-slate-400 uppercase">Projects Completed</div>
            </div>

            {/* Box 2 */}
            <div 
              onClick={() => setActiveCard(activeCard === 'm2' ? null : 'm2')}
              className={`bg-white p-12 rounded-[2rem] border border-slate-200 text-center transition-all duration-500 cursor-pointer flex flex-col justify-center items-center h-64 ${activeCard === 'm2' ? '-translate-y-4 shadow-2xl shadow-[#001f3f]/20 ring-4 ring-[#001f3f]/10 border-[#001f3f]/20' : 'hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50'}`}
            >
              <div className="text-6xl md:text-7xl font-black text-[#001f3f] mb-4 flex items-end justify-center">
                15<span className="text-4xl md:text-5xl font-bold ml-1">Yrs+</span>
              </div>
              <div className="text-sm md:text-base font-bold tracking-widest text-slate-400 uppercase">In Service</div>
            </div>

            {/* Box 3 */}
            <div 
              onClick={() => setActiveCard(activeCard === 'm3' ? null : 'm3')}
              className={`bg-white p-12 rounded-[2rem] border border-slate-200 text-center transition-all duration-500 cursor-pointer flex flex-col justify-center items-center h-64 ${activeCard === 'm3' ? '-translate-y-4 shadow-2xl shadow-[#001f3f]/20 ring-4 ring-[#001f3f]/10 border-[#001f3f]/20' : 'hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50'}`}
            >
              <div className="text-6xl md:text-7xl font-black text-[#001f3f] mb-4">10+</div>
              <div className="text-sm md:text-base font-bold tracking-widest text-slate-400 uppercase">Team of Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
