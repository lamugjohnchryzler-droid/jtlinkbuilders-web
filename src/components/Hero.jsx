import { motion } from 'framer-motion';

const img1 = "/img1.png";
const img2 = "/img2.png";
const img3 = "/img3.png";
const img4 = "/img4.png";
const img5 = "/img5.png";
const img6 = "/img6.png";

const services = [
  {
    title: 'Commercial Build Outs',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Interior Renovations',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Structural Design',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Project Planning',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Site Coordination',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Quality Delivery',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  }
];

export default function Hero() {
  return (
    <section className="bg-white text-slate-900">
      <div className="relative h-[100vh] overflow-hidden bg-slate-950 -mt-0 mb-[60px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/FrontVideo.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2020/07/22/45385-443196940_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/20" />
      </div>

      

      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-semibold leading-tight text-black tracking-tight"
        >
          Spaces Designed to <span className="text-blue-950">LAST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
        >
          We engineer structural solutions that set the standard, blending precision, durability, and refined architectural design. From concept blueprints to minimalist finishes, we turn vision into lasting space.
        </motion.p>
      </div>
        <div className="max-w-7xl mx-auto px-6 pb-20 mt-8">
          <div className="grid gap-6 grid-cols-4">
            <div className="group relative overflow-hidden bg-slate-100 col-span-1">
              <img src={img1} alt="Design 1" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-light tracking-widest text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Georgia, serif'}}>SIMPLE</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-100 col-span-1">
              <img src={img2} alt="Design 2" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold tracking-tight text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Arial, sans-serif'}}>STANDARD</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-100 col-span-2">
              <img src={img3} alt="Design 3" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 -mb-4" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-5xl font-light text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Didot, Bodoni, serif', letterSpacing: '0.05em'}}>LUXURY</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-100 col-span-2">
              <img src={img4} alt="Design 4" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-semibold tracking-wider text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Garamond, serif'}}>ELEGANT</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-100 col-span-1">
              <img src={img5} alt="Design 5" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-black text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Impact, sans-serif', letterSpacing: '0.2em'}}>MAXIMA</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-slate-100 col-span-1">
              <img src={img6} alt="Design 6" className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/0 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-medium tracking-wide text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300" style={{fontFamily: 'Verdana, sans-serif'}}>MODERN</h3>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}