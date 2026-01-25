
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center bg-orange-600 rounded-lg transform group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          <div className={`flex flex-col leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="text-xl font-black tracking-tighter">S.C. SHARMA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70">Industrial Consultant</span>
          </div>
        </a>
        <div className="hidden md:flex items-center space-x-10">
          {['Experience', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-xs font-bold uppercase tracking-widest hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
