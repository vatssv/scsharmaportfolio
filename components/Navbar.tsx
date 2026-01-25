
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-100' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 transform group-hover:scale-110 shadow-lg ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-200'}`}>
              <svg 
                className="w-7 h-7"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M2 20h20M7 20v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
                <path d="M10 13V9a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
                <path d="M14 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></div>
          </div>
          
          <div className="flex flex-col leading-none text-slate-900">
            <span className="text-xl font-black tracking-tighter uppercase">S.C. Sharma</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-60">Consulting Engineer</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {['Experience', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 relative group/link text-slate-600 hover:text-slate-900`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 ${
              isScrolled 
                ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-600/20' 
                : 'bg-slate-900 text-white hover:bg-orange-600 shadow-slate-900/10'
            }`}
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
