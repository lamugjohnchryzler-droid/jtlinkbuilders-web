import { Routes, Route } from 'react-router-dom';
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
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-300 relative">
      <ScrollToTop />
      <Navbar />
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
  );
}