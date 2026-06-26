import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Wrench, Building2, Info, Phone } from 'lucide-react';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import TermsAndPrivacy from './pages/TermsAndPrivacy';
import FloatingSidebar from './components/FloatingSidebar';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);
  
  // Helper for precise active styling including state
  const isExactActive = (path, stateKey, stateValue) => {
    // If it's a hash link, check if the hash matches
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    if (location.pathname !== path) return false;
    if (stateKey !== undefined) {
      if (location.state && location.state[stateKey] === stateValue) return true;
      if (!location.state) {
        if (stateValue === 'completed' && path === '/projects') return true;
        if (stateValue === 0 && path === '/services') return true;
      }
      return false;
    }
    // Only return true for exact path matches without hash if path doesn't have a hash
    return !location.hash;
  };

  return (
    <div className="bg-[#001f3f] min-h-screen relative overflow-hidden w-full">
      
      {/* Decorative Minimalistic Geometry Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 md:hidden">
        <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] border-[1px] border-white/20 rounded-full" />
        <div className="absolute top-[-15%] right-[-25%] w-[350px] h-[350px] border-[1px] border-white/10 rounded-full" />
        <div className="absolute top-[40%] left-[-15%] w-[200px] h-[200px] border-[1px] border-white/20 rounded-full" />
        <div className="absolute bottom-[5%] right-[-10%] w-[400px] h-[400px] border-[1px] border-white/10 rounded-full" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-12" />
        <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12" />
      </div>

      {/* BACKGROUND MENU (Visible when app shrinks) */}
      <div className="absolute inset-0 z-0 pt-10 px-8 text-white overflow-y-auto w-[85vw] md:w-[65vw] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        <div className="flex items-center gap-3 mb-6 md:hidden mt-2">
          <img src="/LOGO.png" alt="Logo" className="h-14 w-14 object-contain" />
          <h2 className="text-[13px] font-black tracking-widest text-white leading-tight">JTL LINK<br/>BUILDERS</h2>
        </div>
        
        <div className="space-y-6 pb-10 md:hidden">
          <div>
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Wrench size={16} className="text-white/40" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40">SERVICES</h3>
            </div>
            <ul className="pl-6 space-y-4 text-[13px] font-light tracking-wide">
              <li><Link to="/services" state={{ index: 0 }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/services', 'index', 0) ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Design & Drafting</Link></li>
              <li><Link to="/services" state={{ index: 1 }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/services', 'index', 1) ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Structural Analysis</Link></li>
              <li><Link to="/services" state={{ index: 2 }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/services', 'index', 2) ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Design & Build</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Building2 size={16} className="text-white/40" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40">PROJECTS</h3>
            </div>
            <ul className="pl-6 space-y-4 text-[13px] font-light tracking-wide">
              <li><Link to="/projects" state={{ activeTab: 'completed' }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/projects', 'activeTab', 'completed') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Completed Projects</Link></li>
              <li><Link to="/projects" state={{ activeTab: 'ongoing' }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/projects', 'activeTab', 'ongoing') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Ongoing Projects</Link></li>
              <li><Link to="/projects" state={{ activeTab: 'proposed' }} onClick={closeMenu} className={`transition-colors block ${isExactActive('/projects', 'activeTab', 'proposed') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Proposed Projects</Link></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Info size={16} className="text-white/40" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40">ABOUT US</h3>
            </div>
            <ul className="pl-6 space-y-4 text-[13px] font-light tracking-wide">
              <li><Link to="/about-us#our-story" onClick={closeMenu} className={`transition-colors block ${isExactActive('/about-us#our-story') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Our Story</Link></li>
              <li><Link to="/about-us#vision-mission" onClick={closeMenu} className={`transition-colors block ${isExactActive('/about-us#vision-mission') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Vision & Mission</Link></li>
              <li><Link to="/about-us#milestones" onClick={closeMenu} className={`transition-colors block ${isExactActive('/about-us#milestones') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Milestones</Link></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
              <Phone size={16} className="text-white/40" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-white/40">CONTACT</h3>
            </div>
            <ul className="pl-6 space-y-4 text-[13px] font-light tracking-wide">
              <li><a href="https://www.facebook.com/jtlinkbuilders" target="_blank" rel="noreferrer" onClick={closeMenu} className={`transition-colors block ${isExactActive('/contact') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Facebook</a></li>
              <li><a href="https://www.facebook.com/messages/t/1049533971587267" target="_blank" rel="noreferrer" onClick={closeMenu} className={`transition-colors block ${isExactActive('/contact') ? 'font-bold text-white' : 'text-slate-400 hover:text-slate-200'}`}>Messenger</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3D WRAPPER */}
      <div 
        className={`relative z-10 min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-300 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left w-full
          ${isMenuOpen ? 'scale-[0.8] translate-x-[70vw] rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-none h-screen' : 'transform-none rounded-none shadow-none'}
        `}
      >
        {/* Overlay to catch clicks when menu is open and close it */}
        {isMenuOpen && (
          <div className="absolute inset-0 z-[9999] cursor-pointer pointer-events-auto" onClick={closeMenu} />
        )}

        <ScrollToTop />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
        <FloatingSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandprivacy" element={<TermsAndPrivacy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}