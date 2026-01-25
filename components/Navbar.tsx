
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            <div className={`w-11 h-11 flex items-center justify-center rounded-lg rotate-45 transition-all duration-500 shadow-xl ${isScrolled ? 'bg-slate-900 shadow-slate-200' : 'bg-white shadow-black/20 group-hover:bg-orange-600'}`}>
              <svg 
                className={`w-6 h-6 -rotate-45 transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          
          <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="text-lg font-black tracking-tight uppercase sm:text-xl">S.C. Sharma</span>
            <span className="text-[8px] uppercase tracking-[0.45em] font-bold opacity-70">Industrial Excellence</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {['Experience', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[10px] font-extrabold uppercase tracking-[0.2em] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all hover:after:w-full ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-6 py-2.5 rounded text-[10px] font-black uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-95 ${
              isScrolled 
                ? 'bg-orange-600 text-white shadow-orange-600/20 hover:bg-orange-700' 
                : 'bg-white text-slate-900 hover:bg-orange-600 hover:text-white'
            }`}
          >
            Start Inquiry
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
