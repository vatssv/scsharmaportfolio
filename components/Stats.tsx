
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '42+' },
    { label: 'Project Budget Managed', value: '100 Cr+' },
    { label: 'Energy Savings', value: '20 U/Ton' },
    { label: 'Production Growth', value: '25%' }
  ];

  return (
    <div className="bg-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2 transition-colors duration-300 group-hover:text-orange-600">{stat.value}</div>
              <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
