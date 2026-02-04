
import React from 'react';

const Certifications: React.FC = () => {
  const certifications = [
    'Certified Energy Manager (FICCI)',
    'QIPM Specialist',
    'Technical Trainer at RTC',
    'Fellow of Institution of Engineers',
    'Chartered Engineers'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Professional Accreditations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100 shadow-sm">
                <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <svg className="w-8 h-8 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Academic Foundation
            </h3>
            <div className="space-y-6">
              <div>
                <div className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-1">1977-1982 | B.E. Mechanical Eng. (Merit Holder)</div>
                <div className="text-xl font-semibold">Government Engineering College, Jabalpur</div>
                <div className="text-slate-400">Mechanical Engineering, First Division</div>
              </div>
              <div className="pt-6 border-t border-slate-800">
                <p className="text-slate-300 italic">
                  "Continuous learning is the cornerstone of industrial evolution. Throughout my 4-decade career, I've maintained a commitment to integrating new technologies with tried-and-tested engineering principles."
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-5">
            <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 21h22L12 2z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
