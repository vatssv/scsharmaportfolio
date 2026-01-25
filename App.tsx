
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <section id="experience" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-slate-900">
              Professional Journey
            </h2>
            <p className="text-slate-500 text-center mb-16 max-w-2xl mx-auto">
              Over four decades of delivering high-stakes engineering solutions and operational excellence across the globe.
            </p>
            <Experience />
          </div>
        </section>
        <section id="expertise" className="py-24 bg-slate-50 border-y border-slate-200">
          <Skills />
        </section>
        <section id="certifications" className="py-24 bg-white">
          <Certifications />
        </section>
        <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
