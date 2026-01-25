
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-0 overflow-hidden bg-slate-50">
      {/* Background Layer - Subtle Industrial Watermark */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
          alt="Modern Cement Production Facility" 
          className="w-full h-full object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-orange-600 text-[11px] font-black uppercase tracking-[0.2em]">Global Industrial Consultant</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
              Leading the <br/>
              <span className="text-orange-600">Future of Cement</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 font-medium leading-relaxed max-w-xl">
              Strategic O&M optimization and Greenfield project management for high-capacity process plants worldwide. Bringing 42+ years of technical mastery to your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="group relative px-10 py-5 bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-600/20 hover:bg-orange-700 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Schedule Consultation</span>
              </a>
              <a 
                href="#experience" 
                className="px-10 py-5 bg-white border border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all text-center shadow-sm active:scale-95"
              >
                Track Record
              </a>
            </div>
          </div>

          {/* Portrait Image Container */}
          <div className="order-1 lg:order-2 flex justify-center relative">
            <div className="relative w-72 h-72 md:w-96 md:h-[500px] lg:w-[480px] lg:h-[600px] group">
              {/* Architectural Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-orange-500/20 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-slate-200 rounded-br-3xl"></div>
              
              {/* Image Frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-[12px] border-white bg-white">
                <img 
                  src="profile.jpg" 
                  alt="Suresh Chandra Sharma" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"; 
                  }}
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 text-white drop-shadow-lg">
                  <h3 className="text-3xl font-black mb-1">S.C. Sharma</h3>
                  <p className="text-orange-400 font-bold uppercase tracking-widest text-xs">Senior Consulting Engineer</p>
                </div>
              </div>

              {/* Floating Professional Badge */}
              <div className="absolute -right-8 top-1/4 bg-white border border-slate-100 p-6 rounded-3xl shadow-xl hidden lg:block transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-black text-orange-600">42+</div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-center">Years of Industrial<br/>Engineering</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-slate-900 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
