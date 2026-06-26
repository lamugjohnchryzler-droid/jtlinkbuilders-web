import { Facebook, MessageCircle, Mail } from 'lucide-react';

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col bg-blue-950 text-white rounded-l-md overflow-hidden shadow-lg border border-r-0 border-blue-900/50">
      <a 
        href="https://www.facebook.com/jtlinkbuilders" 
        target="_blank" 
        rel="noreferrer"
        className="p-3 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        title="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a 
        href="https://www.facebook.com/messages/t/1049533971587267" 
        target="_blank" 
        rel="noreferrer"
        className="p-3 border-t border-blue-900 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        title="Messenger"
      >
        <MessageCircle size={20} />
      </a>
      <a 
        href="mailto:jtllinkbuilders@gmail.com" 
        className="p-3 border-t border-blue-900 hover:bg-orange-500 hover:text-white transition-colors duration-300"
        title="Email Us"
      >
        <Mail size={20} />
      </a>
    </div>
  );
}