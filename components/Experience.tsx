
import React from 'react';
import { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    id: '1',
    period: '2022 - 2024',
    company: 'DCM Shriram',
    location: 'Bharuch, Gujarat',
    role: 'Project Lead / Engineer',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800',
    description: [
      'Led end-to-end setup of alkali and chemical plant, from initial planning to full operational status and coordinated with cross-functional teams including engineering, procurement, and construction to ensure timely and within-budget project completion.',
      'Managed a budget of 100 Cr. and ensured cost-effective procurement of materials and services.'
    ]
  },
  {
    id: '2',
    period: '2020 - Present',
    company: 'Consultancy Engagements',
    role: 'Consultant',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: [
      'Strategic advisor for Shanti Gears Ltd. (Gearbox 3R’s).',
      'Technical consultant for Allan Smith Engineering and UCIL (Nepal Govt.).',
      'Expertise in TPM implementation and process optimization.'
    ]
  },
  {
    id: '3',
    period: '05/1992 - Present',
    company: 'DCM Shriram Limited, Kota',
    role: 'General Manager O&M',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
    description: [
      'Directed operations of crusher, Raw mill, kiln, and cement mill and packing.',
      'Increased production by 25% and specific energy consumption reduced by 20 units per ton.'
    ]
  },
  {
    id: '4',
    period: '08/1989 - 05/1992',
    company: 'Nihon Nirmaan Ltd. (White Cement)',
    role: 'Maintenance & Operations Head',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    description: [
      'Managed Cement Division as a profit center.',
      'Joined at the project negotiation stage which involved various stages of erection, commissioning, operation and optimization and plant as one of the most efficient white cement.'
    ]
  },
  {
    id: '5',
    period: '11/1984 - 08/1989',
    company: 'ACC Ltd',
    role: 'Sr Plant Engineer',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', // Placeholder image
    description: [
      'Joined as a Junior Engineer. Set up MIPS, Central Main team head.'
    ]
  },
  {
    id: '6',
    period: '09/1982 - 10/1984',
    company: 'JK Cement Works Nimbahera Raj',
    role: 'Asstt Mechanical Engineer',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800', // Placeholder image
    description: [
      'Maintenance and operations of raw mill feeding section of three kiln from silo extraction to klin.',
      'Got associated with Productivity Optimization activities. Trainer to exhibit technical training on multiple topics.',
      'Identified areas for improvement in the existing plant in kiln feed section for three units and initiated action in implementing changes.'
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
