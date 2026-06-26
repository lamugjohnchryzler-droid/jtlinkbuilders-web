import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const img1 = "/img1.png";
const img2 = "/img2.png";
const img3 = "/img3.png";
const img4 = "/img4.png";
const img5 = "/img5.png";
const img6 = "/img6.png";

const front1 = "/front1.png";
const front2 = "/front2.png";

export default function Features() {
  const sections = [
    {
      title: "ARCHITECTURAL DESIGNS",
      description: "Explore our portfolio of residential, commercial, and mixed-use spaces. We combine functional design, minimalist aesthetics, and structural precision to create environments that feel effortless, livable, and built to last.",
      image: front1,
      cta: "VIEW DESIGNS",
      link: "/projects",
      state: { activeTab: 'proposed' }
    },
    {
      title: "COMPLETED & ONGOING PROJECTS",
      description: "Showcasing our completed works and ongoing projects, driven by quality, function, and detail. Each project reflects our commitment to thoughtful planning, precise execution, and designs that balance aesthetics with practical use.",
      image: front2,
      cta: "EXPLORE PROJECTS",
      link: "/projects",
      state: { activeTab: 'completed' }
    }
  ];

  return (
    <section className="py-32 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {sections.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-1/2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900 shadow-2xl relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#001f3f]">
                {item.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                {item.description}
              </p>
              <div className="pt-2">
                <Link
                  to={item.link}
                  state={item.state}
                  className="inline-flex items-center space-x-3 text-xs font-semibold tracking-widest uppercase border-b border-[#001f3f] pb-1 text-[#001f3f] hover:text-[#003366] hover:border-[#003366] transition-all duration-300"
                >
                  <span>{item.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}