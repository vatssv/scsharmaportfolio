
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
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
            {/* Modern Industrial Logo Symbol */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${isScrolled ? 'bg-slate-900' : 'bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-orange-600'}`}>
              <svg 
                className="w-7 h-7 text-white transition-colors duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Abstract Industrial Geometric Shape */}
                <path d="M12 2l9 4.5v11L12 22l-9-4.5v-11L12 2z" className="opacity-20" />
                <path d="M12 7v10M8 9l4 2 4-2M8 15l4-2 4 2" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" className="text-orange-500" />
              </svg>
            </div>
          </div>
          
          <div className={`flex flex-col leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            <span className="text-xl font-black tracking-tighter uppercase">S.C. Sharma</span>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-60">Industrial Consulting</span>
          </div>
        </a>

        <div className="hidden md:flex items-center space-x-10">
          {['Experience', 'Expertise', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-[11px] font-bold uppercase tracking-[0.25em] hover:text-orange-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 ${
              isScrolled 
                ? 'bg-orange-600 text-white shadow-orange-600/30 hover:bg-orange-700' 
                : 'bg-white text-slate-900 hover:bg-orange-500 hover:text-white'
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
