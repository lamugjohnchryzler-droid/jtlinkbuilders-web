import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';

export default function Navbar({ isMenuOpen, toggleMenu }) {
  const location = useLocation();
  const isDarkPage = location.pathname === '/contact' || location.pathname === '/about-us';

  return (
    <header className={`group absolute top-0 left-0 w-full z-50 text-slate-100 hover:bg-[#001f3f]/95 transition-colors duration-700 ${isDarkPage ? 'bg-[#001f3f] md:bg-transparent' : 'bg-transparent'}`} style={{fontFamily: 'Poppins, Montserrat, Inter, system-ui, -apple-system, "Segoe UI", Roboto'}}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between md:justify-center md:gap-6">
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white z-50 p-2 pointer-events-auto" onClick={toggleMenu}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Desktop Left Nav */}
        <nav style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}} className="hidden md:flex items-center justify-end flex-1 gap-30 pr-25 text-base font-semibold tracking-widest uppercase">
          <Link to="/services" className="text-slate-200 hover:text-gray-300 transition-colors duration-500">Services</Link>
          <Link to="/projects" className="text-slate-200 hover:text-gray-300 transition-colors duration-500">Projects</Link>
        </nav>

        {/* Logo */}
        <div className="flex justify-center items-center pointer-events-auto relative flex-shrink-0 z-50">
          <Link to="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 z-20 rounded-full" aria-label="Home" />
          <picture className="pointer-events-none">
            <source srcSet="/LOGO.png" type="image/png" />
            <img src="/LOGO.png" alt="LOGO" className="h-28 md:h-56 object-contain" />
          </picture>
        </div>

        {/* Mobile placeholder for alignment */}
        <div className="w-12 md:hidden" />

        {/* Desktop Right Nav */}
        <nav style={{textShadow: '0 1px 2px rgba(0,0,0,0.6)'}} className="hidden md:flex items-center justify-start flex-1 gap-30 pl-25 text-base font-semibold tracking-widest uppercase">
          <Link to="/about-us" className="text-slate-200 hover:text-gray-300 transition-colors duration-500 whitespace-nowrap">About Us</Link>
          <Link to="/contact" className="text-slate-200 hover:text-gray-300 transition-colors duration-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
}