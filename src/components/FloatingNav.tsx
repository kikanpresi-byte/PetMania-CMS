import React, { useState, useEffect } from 'react';
import { useContent } from '../store';
import { Home, LayoutGrid, Info, MapPin, Phone, Sparkles } from 'lucide-react';

const getIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes('home') || l.includes('beranda')) return <Home size={20} strokeWidth={2.5} />;
  if (l.includes('service') || l.includes('layanan')) return <LayoutGrid size={20} strokeWidth={2.5} />;
  if (l.includes('about') || l.includes('tentang')) return <Info size={20} strokeWidth={2.5} />;
  if (l.includes('location') || l.includes('lokasi')) return <MapPin size={20} strokeWidth={2.5} />;
  if (l.includes('contact') || l.includes('kontak')) return <Phone size={20} strokeWidth={2.5} />;
  return <Sparkles size={20} strokeWidth={2.5} />;
};

export default function FloatingNav() {
  const { content } = useContent();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let newActiveIndex = activeIndex;
      let maxTop = -1;

      content.navLinks.forEach((link, index) => {
        const element = document.querySelector(link.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          if (top <= scrollPosition && top > maxTop) {
            maxTop = top;
            newActiveIndex = index;
          }
        }
      });

      // Special check: if scrolled to the very bottom of the document
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        newActiveIndex = content.navLinks.length - 1;
      }

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.navLinks, activeIndex]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden">
      <div className="bg-white/95 backdrop-blur-md rounded-[2rem] px-6 py-1.5 flex items-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-200/50 relative">
        
        {/* The traveling indicator (Active Bubble) */}
        <div 
          className="absolute w-14 h-14 rounded-full transition-all duration-500 ease-out flex items-center justify-center border-4 border-white bg-gradient-to-tr from-blue-600 to-cyan-500 shadow-[0_8px_16px_-4px_rgba(37,99,235,0.5)] z-20"
          style={{ 
            left: `calc(1.75rem + (${activeIndex} * 4rem))` ,
            top: '-0.85rem'
          }}
        />

        {/* Nav Items */}
        {content.navLinks.map((link, index) => {
          const isActive = index === activeIndex;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveIndex(index)}
              className="relative w-16 h-12 flex flex-col items-center justify-center cursor-pointer z-30 group"
            >
              {/* Icon Container */}
              <span 
                className={`transition-all duration-500 ease-out ${isActive ? '-translate-y-3.5 text-white' : 'translate-y-1 text-slate-400 group-hover:text-blue-500 group-hover:-translate-y-0.5'}`}
              >
                {getIcon(link.label)}
              </span>
              
              {/* Text Label */}
              <span 
                className={`absolute bottom-0.5 text-[10px] font-bold transition-all duration-500 ease-out ${isActive ? 'translate-y-0 opacity-100 text-blue-600' : 'translate-y-4 opacity-0 text-slate-400'}`}
              >
                {link.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
