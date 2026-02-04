
import React from 'react';
import { SkillCategory } from '../types';

const skillCategories: SkillCategory[] = [
  {
    category: 'Project Management',
    skills: [
      { name: 'Green Field Projects', level: 100 },
      { name: 'Project Management', level: 90 },
      { name: 'Cement Plant Management', level: 98 },
      { name: 'Erection', level: 95 },
      { name: 'Commissioning', level: 95 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Kiln Alignment', level: 95 },
      { name: 'Main Drive Alignment', level: 90 }
    ]
  },
  {
    category: 'Technical Maintenance',
    skills: [
      { name: 'Troubleshooting', level: 96 },
      { name: 'Root Cause Analysis', level: 92 },
      { name: 'MTTR', level: 90 },
      { name: 'MTBF', level: 90 },
      { name: 'Preventive Maintenance', level: 90 },
      { name: 'Predictive Maintenance', level: 90 },
      { name: 'Continuous Improvement', level: 90 },
      { name: 'TPM', level: 90 }
    ]
  },
  {
    category: 'Software & Tools',
    skills: [
      { name: 'SAP ERP', level: 90 },
      { name: 'Power Point', level: 90 },
      { name: 'Microsoft Word', level: 90 },
      { name: 'Microsoft Excel', level: 95 }
    ]
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Hindi' },
      { name: 'English' }
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
                                    {skill.level !== undefined && (
                                      <span className="text-sm font-bold text-orange-600">{skill.level}%</span>
                                    )}
                                  </div>
                                  {skill.level !== undefined && (
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                      <div
                                        className="bg-orange-500 h-full rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                      />
                                    </div>
                                  )}
                                </div>              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
