
import React from 'react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    period: '2022 - 2024',
    company: 'DCM Shriram',
    location: 'Bharuch, Gujarat',
    role: 'Lead Project Engineer',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    description: [
      'Led end-to-end setup of alkali and chemical plant (100 Cr. budget).',
      'Coordinated cross-functional teams for engineering, procurement, and construction.',
      'Ensured timely, within-budget completion and cost-effective procurement.'
    ]
  },
  {
    id: '2',
    period: '2020 - Present',
    company: 'Consultancy Engagements',
    role: 'Senior Industrial Consultant',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: [
      'Strategic advisor for Shanti Gears Ltd. (Gearbox 3R’s).',
      'Technical consultant for Allan Smith Engineering and UCIL (Nepal Govt.).',
      'Expertise in TPM implementation and process optimization.'
    ]
  },
  {
    id: '3',
    period: 'General Manager Tenure',
    company: 'DCM Shriram Limited, Kota',
    role: 'General Manager O&M',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
    description: [
      'Directed operations of crusher, Raw mill, kiln, and cement mill.',
      'Increased production by 25% through innovative O&M strategies.',
      'Reduced specific energy consumption by 20 units per ton.'
    ]
  },
  {
    id: '4',
    period: 'Nihon Nirmaan Ltd.',
    company: 'White Cement Division',
    role: 'Maintenance & Operations Head',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: [
      'Managed Cement Division as a standalone profit center.',
      'Oversear erection, commissioning, and plant optimization.',
      'Established one of the most efficient white cement plants in the region.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="space-y-12">
      {experienceData.map((exp, index) => (
        <div 
          key={exp.id} 
          className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={exp.image} 
              alt={exp.company} 
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-sm font-bold rounded-full mb-4">
              {exp.period}
            </span>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">{exp.role}</h3>
            <div className="text-lg font-medium text-slate-600 mb-4">{exp.company} {exp.location && `| ${exp.location}`}</div>
            <ul className="space-y-3">
              {exp.description.map((point, i) => (
                <li key={i} className="flex items-start text-slate-600">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
