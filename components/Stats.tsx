
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '42+' },
    { label: 'Project Budget Managed', value: '100 Cr+' },
    { label: 'Energy Savings', value: '20 Units/Ton' },
    { label: 'Production Growth', value: '25%' }
  ];

  return (
    <div className="bg-slate-900 py-12 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
