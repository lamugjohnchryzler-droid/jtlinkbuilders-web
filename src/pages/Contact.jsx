import { useState } from 'react';
import { MapPin, Mail, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  // Form data is now handled natively by the form action via FormSubmit.

  return (
    <div className="min-h-screen bg-white pt-48 text-slate-900 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="max-w-2xl mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#001f3f] mb-6">
            Let's build<br />something great.
          </h1>
          <p className="text-slate-500 text-xl font-light">
            Kindly reach out to us and our team will get back to you to discuss your vision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Form Side */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full">
              
              <a 
                href="https://www.facebook.com/jtlinkbuilders" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-5 p-3 sm:p-5 bg-white border border-slate-200 text-slate-700 hover:text-[#001f3f] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-[2rem]"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg mb-0 sm:mb-1">Facebook Page</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-light hidden sm:block">Follow our latest updates</p>
                </div>
              </a>

              <a 
                href="https://www.facebook.com/messages/t/1049533971587267" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-5 p-3 sm:p-5 bg-white border border-slate-200 text-slate-700 hover:text-[#001f3f] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/10 transition-all rounded-[2rem]"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.14 2 11.25c0 2.91 1.503 5.514 3.864 7.159v3.425l3.52-1.926c.834.233 1.714.363 2.616.363 5.523 0 10-4.14 10-9.25C22 6.14 17.523 2 12 2zm1.037 12.39-2.73-2.914-5.327 2.914 5.836-6.195 2.76 2.914 5.297-2.914-5.836 6.195z"/></svg>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg mb-0 sm:mb-1">Messenger</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-light hidden sm:block">Send us a direct message</p>
                </div>
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jtllinkbuilders@gmail.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-5 p-3 sm:p-5 bg-white border border-slate-200 text-slate-700 hover:text-[#001f3f] hover:border-red-200 hover:shadow-xl hover:shadow-red-500/10 transition-all rounded-[2rem]"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-red-50 flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-red-500 transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg mb-0 sm:mb-1">Gmail</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-light hidden sm:block">Compose in Gmail</p>
                </div>
              </a>

              <a 
                href="https://compose.mail.yahoo.com/?to=jtllinkbuilders@gmail.com" 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-5 p-3 sm:p-5 bg-white border border-slate-200 text-slate-700 hover:text-[#001f3f] hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/10 transition-all rounded-[2rem]"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 group-hover:bg-purple-50 flex items-center justify-center transition-colors shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-purple-600 transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-sm sm:text-lg mb-0 sm:mb-1">Yahoo Mail</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-light hidden sm:block">Compose in Yahoo Mail</p>
                </div>
              </a>
            </div>
          </div>

          {/* Info Side */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12 pt-4">
            
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                <MapPin className="text-[#001f3f] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Main Office</h3>
                <p className="text-lg text-[#001f3f] font-medium leading-relaxed">Bantog Sta Maria<br/>Pangasinan, 2440</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                <Mail className="text-[#001f3f] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Direct Inquiries</h3>
                <p className="text-lg text-[#001f3f] font-medium">jtllinkbuilders@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                <Clock className="text-[#001f3f] w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-3">Opening Hours</h3>
                <p className="text-lg text-[#001f3f] font-medium leading-relaxed">Monday - Saturday<br/>7:00 AM - 5:00 PM</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Affiliate Logos */}
      <section className="mt-32 py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-row flex-wrap items-center justify-center gap-8 md:gap-12">
          <img src="/JTL.png" alt="JTL" className="h-16 sm:h-24 md:h-64 object-contain hover:scale-105 transition-transform duration-500 cursor-pointer" />
          <img src="/zler.png" alt="Zler" className="h-16 sm:h-24 md:h-64 object-contain hover:scale-105 transition-transform duration-500 cursor-pointer" />
          <img src="/csr.png" alt="CSR" className="h-16 sm:h-24 md:h-64 object-contain hover:scale-105 transition-transform duration-500 cursor-pointer" />
        </div>
      </section>

    </div>
  );
}
