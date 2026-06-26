import { MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingSidebar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] flex flex-col items-center shadow-2xl">
      
      {/* Social Links Box */}
      <div className="bg-[#4c5c76] text-white flex flex-col items-center py-6 px-1 rounded-l-xl overflow-hidden shadow-xl">
        <a 
          href="https://www.facebook.com/jtlinkbuilders" 
          target="_blank" 
          rel="noreferrer"
          className="p-4 hover:bg-white/20 transition-colors rounded-lg"
          title="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a 
          href="https://www.facebook.com/messages/t/1049533971587267" 
          target="_blank" 
          rel="noreferrer"
          className="p-4 hover:bg-white/20 transition-colors rounded-lg"
          title="Messenger"
        >
          <MessageCircle size={28} />
        </a>
      </div>

      {/* Up Button */}
      <button 
        onClick={scrollToTop}
        className="mt-3 bg-[#001f3f] text-white p-2 hover:bg-black transition-colors rounded-l-lg shadow-xl flex items-center justify-center opacity-90 hover:opacity-100"
        title="Scroll to Top"
      >
        <ChevronUp size={20} />
      </button>

    </div>
  );
}
