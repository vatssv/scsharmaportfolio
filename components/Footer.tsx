
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white font-bold text-xl tracking-tight">
            S.C. SHARMA
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
            <a href="#expertise" className="hover:text-orange-500 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <div className="text-xs">
            © {new Date().getFullYear()} Suresh Chandra Sharma. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
