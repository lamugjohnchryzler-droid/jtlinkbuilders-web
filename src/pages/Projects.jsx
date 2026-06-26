import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

export default function Projects() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.state?.activeTab || 'completed');

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);
  const [indices, setIndices] = useState({
    completed: 0,
    ongoing: 0,
    proposed: 0
  });

  const completedProjects = [
    { title: 'Bungalow with Deck', image: '/cp1.jpg', caption: '' },
    { title: 'Villa Linda Swimming Pool', image: '/cp2.jpg', caption: '' },
    { title: 'Villa Linda Function Hall', image: '/cp3.jpg', caption: '' },
    { title: 'Villa Linda Suites', image: '/cp4.jpg', caption: '' },
    { title: 'Two Storey Apartment', image: '/cp5.jpg', caption: '' },
    { title: 'Two Storey Residence', image: '/cp6.jpg', caption: '' },
    { title: 'Bungalow Mansion', image: '/cp7.jpg', caption: '' },
    { title: 'Modern Bungalow', image: '/cp8.jpg', caption: '' },
    { title: 'Two Storey Residence', image: '/cp9.jpg', caption: '' },
    { title: 'Two Storey Residence', image: '/cp10.jpg', caption: '' },
    { title: 'Two Storey Residence', image: '/cp11.jpg', caption: '' },
    { title: 'Two Storey Residence', image: '/cp12.jpg', caption: '' },
    { title: 'Modern Interior Design', image: '/cp13.jpg', caption: '' },
    { title: 'Modern Interior Design', image: '/cp14.jpg', caption: '' },
  ];

  const ongoingProjects = [
    { title: 'Two Storey Apartment', image: '/op1.jpg', caption: 'A Modern Minimalist Look Apartment' },
    { title: 'Two Storey Residence', image: '/op2.jpg', caption: 'An Elegant Two Storey Mansion' },
    { title: 'Three Storey Residence', image: '/op3.png', caption: 'A Contemporary Three Storey Residence' },
    { title: 'Two Storey Farmhouse', image: '/op4.png', caption: 'A Scenic Two Storey Farmhouse' },
    { title: 'Three Storey Apartment', image: '/op5.png', caption: 'A Modern Minimalist Apartment' },
  ];

  const proposedProjects = [
    { title: 'Urdaneta Subdivision', image: '/pp1.png', caption: 'Modern Elegant Subdivision' },
    { title: 'Bungalow Mansion', image: '/pp2.png', caption: 'Classic Contemporary Mansion' },
    { title: '3BR Bungalow', image: '/pp3.png', caption: 'Contemporary Elegant' },
    { title: '4 Units Apartment', image: '/pp4.png', caption: 'Simple Modern Look' },
    { title: '16 Units Apartment', image: '/pp5.png', caption: 'Minimalist Modern' },
    { title: '3BR Bungalow w/ Deck', image: '/pp6.png', caption: 'Elegant Design' },
    { title: '2BR Bungalow', image: '/pp7.png', caption: 'Maxima Efficient Modern Look' },
    { title: '5 Units Apartment', image: '/pp8.png', caption: 'Space Efficient Minimalist' },
    { title: '4BR Bungalow', image: '/pp9.png', caption: 'Modern Elegant Look' },
    { title: '10Units Apartment', image: '/pp10.png', caption: 'Contemporary Elegant Design' },
    { title: '3BR 2 Storey Residence', image: '/pp11.png', caption: 'Modern Contemporary Design' },
    { title: '2 Storey Residence', image: '/pp12.png', caption: 'Modern Minimalism' },
    { title: '10 Units Apartment', image: '/pp13.png', caption: 'Industrial Minimalist' },
    { title: '3 Storey\nMixed-Use', image: '/pp14.png', caption: 'Urban Modern Look' },
    { title: 'Pavilion', image: '/pp15.png', caption: 'Open-Concept Tropical' },
    { title: '3BR Bungalow', image: '/pp16.png', caption: 'Modern Suburban Design' },
    { title: '3 Storey Apartment', image: '/pp17.jpg', caption: 'Sleek Minamalist' },
    { title: '3BR Bungalow', image: '/pp18.jpg', caption: 'Modern Minimalist' },
    { title: '3BR Bungalow', image: '/pp19.png', caption: 'Contemporary Ranch Style' },
    { title: 'Kitchen Interior Design', image: '/pp20.png', caption: 'Chic Monochrome Design' },
    { title: 'Interior Design', image: '/pp21.png', caption: 'Warm Modern Interior' },
  ];

  const tabs = [
    { id: 'completed', label: 'Completed Projects', data: completedProjects },
    { id: 'ongoing', label: 'Ongoing Projects', data: ongoingProjects },
    { id: 'proposed', label: 'Proposed Projects', data: proposedProjects }
  ];

  const activeTabData = tabs.find(t => t.id === activeTab);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Floating Sleek Tab Menu overlaying the carousel */}
      <div className="absolute top-28 left-0 right-0 z-50 flex justify-center pointer-events-auto">
        <div className="flex gap-8 md:gap-16 border-b border-white/20 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-2 py-2 text-sm md:text-base font-medium transition-colors duration-500 tracking-wide uppercase
                ${activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-white/50 hover:text-white/80'
                }
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-white"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Thumbnail Carousel Full Page */}
      <ThumbnailCarousel 
        items={activeTabData.data} 
        hideThumbnails={true} 
        externalIndex={indices[activeTab]}
        onIndexChange={(newIdx) => setIndices(prev => ({ ...prev, [activeTab]: newIdx }))}
      />
    </div>
  );
}
