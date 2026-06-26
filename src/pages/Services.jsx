import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ThumbnailCarousel from '../components/ThumbnailCarousel';

export default function Services() {
  const location = useLocation();
  const [index, setIndex] = useState(location.state?.index || 0);

  useEffect(() => {
    if (location.state?.index !== undefined) {
      setIndex(location.state.index);
    }
  }, [location.state]);
  const servicesItems = [
    {
      title: 'Design and Drafting',
      image: '/services1.png',
      caption: 'We believe that great spaces start with a clear, well-crafted plan. Our team works closely with you to turn your ideas into highly detailed blueprints and stunning 3D models. We focus on creating spaces that are beautifully modern, highly functional, and perfectly suited to your everyday needs. By blending clean aesthetics with practical layouts, we make sure that every line we draw has a clear purpose.',
    },
    {
      title: 'Structural Analysis',
      image: '/sa1.png',
      caption: 'A beautiful design must always stand on a strong, reliable foundation. We carefully check and test every detail of your project to ensure it is completely safe, solid, and ready for the real world. Our team applies the most up-to-date building codes and strict safety standards to guarantee that your structure can easily withstand environmental elements, heavy use, and everyday wear and tear.',
    },
    {
      title: 'Build and Design',
      image: '/bnd1.png',
      caption: 'Seeing your vision come to life should be a rewarding and inspiring experience. To make the entire journey smooth and stress-free, we offer a fully integrated design and build service that takes care of every detail. By uniting creative planning and physical construction under one dedicated team, we ensure a seamless transition from the initial blueprints to the final structure.',
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Thumbnail Carousel Full Page */}
      <ThumbnailCarousel 
        items={servicesItems} 
        externalIndex={index} 
        onIndexChange={setIndex} 
      />
    </div>
  );
}
