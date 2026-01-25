
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-7'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            {/* Architectural Industrial Logo */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 transform group-hover:scale-110 ${isScrolled ? 'bg-slate-900 shadow-lg shadow-slate-200' : 'bg-white shadow-2xl shadow-black/20 group-hover:bg-orange-600'}`}>
              <svg 
                className={`w-7 h-7 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
                <circle cx="12" cy="7" r="1" fill="currentColor" className="text-orange-500" />
              </svg>
            </div>
            {/* Floating accent */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white animate-pulse"></div>
          </div>
          
          <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="text-xl font-black tracking-tighter uppercase font-inter">S.C. Sharma</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-60">Industrial Consulting</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {['Experience', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 relative group/link ${isScrolled ? 'text-slate-500 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/link:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className={`px-8 py-3.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-2xl active:scale-95 ${
              isScrolled 
                ? 'bg-orange-600 text-white shadow-orange-600/30 hover:bg-orange-700 hover:-translate-y-0.5' 
                : 'bg-white text-slate-900 hover:bg-orange-600 hover:text-white hover:-translate-y-0.5'
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
