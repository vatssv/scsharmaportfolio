
import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    category: 'Project Management',
    skills: [
      { name: 'Green Field Projects', level: 100 },
      { name: 'Erection & Commissioning', level: 95 },
      { name: 'Cement Plant Management', level: 98 },
      { name: 'Budget Control (100 Cr+)', level: 90 }
    ]
  },
  {
    category: 'Technical Maintenance',
    skills: [
      { name: 'Kiln & Drive Alignment', level: 95 },
      { name: 'Root Cause Analysis', level: 92 },
      { name: 'TPM & Continuous Improvement', level: 88 },
      { name: 'Troubleshooting', level: 96 }
    ]
  },
  {
    category: 'Software & Core Skills',
    skills: [
      { name: 'SAP ERP', level: 85 },
      { name: 'Production Optimization', level: 94 },
      { name: 'Resource Management', level: 90 },
      { name: 'Technical Training', level: 95 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">Domain Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-4">
              {cat.category}
            </h3>
            <div className="space-y-6">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm font-bold text-orange-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-orange-500 h-full rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
