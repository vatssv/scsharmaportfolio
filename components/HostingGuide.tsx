
import React from 'react';

const HostingGuide: React.FC = () => {
  const steps = [
    {
      title: 'Prepare Repository',
      desc: 'Create a new public repository on GitHub named "portfolio" or similar.'
    },
    {
      title: 'Build Process',
      desc: 'Since this is a React app, run "npm run build" to generate the optimized production files.'
    },
    {
      title: 'GH-Pages Deployment',
      desc: 'Install the "gh-pages" package and add deployment scripts to your package.json.'
    },
    {
      title: 'Go Live',
      desc: 'Run "npm run deploy" to push the build folder to the gh-pages branch. Your site will be live at username.github.io/repo-name.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">How to Host This Site for Free</h2>
        <p className="text-slate-600">Follow these steps to deploy your portfolio to GitHub Pages in minutes.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-indigo-100">
            <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
              {idx + 1}
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white">
        <h3 className="font-bold mb-4 flex items-center">
          <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Quick Deploy Script
        </h3>
        <code className="block bg-black/50 p-4 rounded text-xs font-mono text-indigo-300">
          # Add this to package.json scripts<br/>
          "predeploy": "npm run build",<br/>
          "deploy": "gh-pages -d build"
        </code>
      </div>
    </div>
  );
};

export default HostingGuide;
