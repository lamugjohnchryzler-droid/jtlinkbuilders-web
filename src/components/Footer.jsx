import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-slate-100 mb-6">COMPANY</h4>
          <ul className="space-y-3 text-xs tracking-wide">
            <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-slate-100 mb-6">Services</h4>
          <ul className="space-y-3 text-xs tracking-wide">
            <li><Link to="/services" state={{ index: 0 }} className="hover:text-white transition-colors">Design & Drafting</Link></li>
            <li><Link to="/services" state={{ index: 1 }} className="hover:text-white transition-colors">Structural Analysis</Link></li>
            <li><Link to="/services" state={{ index: 2 }} className="hover:text-white transition-colors">Build & Design</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-slate-100 mb-6">Projects</h4>
          <ul className="space-y-3 text-xs tracking-wide">
            <li><Link to="/projects" state={{ activeTab: 'completed' }} className="hover:text-white transition-colors">Completed</Link></li>
            <li><Link to="/projects" state={{ activeTab: 'ongoing' }} className="hover:text-white transition-colors">Ongoing</Link></li>
            <li><Link to="/projects" state={{ activeTab: 'proposed' }} className="hover:text-white transition-colors">Proposed</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase text-slate-100 mb-6">Contact</h4>
          <ul className="space-y-3 text-xs tracking-wide">
            <li><a href="https://www.facebook.com/jtlinkbuilders" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
            <li><a href="https://www.facebook.com/messages/t/1049533971587267" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Messenger</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-slate-900 text-[11px] tracking-wider flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 JTL LINK BUILDERS. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/termsandprivacy" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link to="/termsandprivacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}