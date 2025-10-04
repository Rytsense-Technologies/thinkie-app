import React, { useState } from 'react';
import Headers from './Headers';
import Analytics from './analytics/Analytics';


const TeamAnalytics = () => {
  const [activeTab, setActiveTab] = useState('analytics'); // 'role' or 'team'
  const teamData = {
    teamName: "Engineering",
    teamMembers: 12,
    avgRating: 4.31 / 50,
    manager: "Michael Rodriguez",
    description: "Comprehensive overview of team performance and skills"
  };

  const accountTypes = [
    {
      id: 'analytics',
      label: 'Analytics',
    },
    {
      id: 'skills',
      label: 'Skills',
    },
    {
      id: 'assessment',
      label: 'Assessment',
    },
    {
      id: 'certifications',
      label: 'Certifications',
    },
    {
      id: 'about',
      label: 'About',
    },
  ];

   const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <Analytics />;
      case 'skills':
        return <div className="p-6 text-center text-gray-600">Skills content coming soon...</div>;
      case 'assessment':
        return <div className="p-6 text-center text-gray-600">Assessment content coming soon...</div>;
      case 'certifications':
        return <div className="p-6 text-center text-gray-600">Certifications content coming soon...</div>;
      case 'about':
        return <div className="p-6 text-center text-gray-600">About content coming soon...</div>;
      default:
        return <Analytics teamData={teamData} />;
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-6">
        <h1 className="flex justify-start text-sm font-bold text-gray-800">Team Analytics</h1>
        <p className="flex justify-start text-gray-600 text-sm mt-1">{teamData.description}</p>
      </div>

      <Headers />

      <div className="w-full py-1 scrollbar-hide">
        <div className="w-full py-1 rounded-xl">
          <div className="flex bg-gray-50 p-1.5 rounded-xl border border-gray-200 shadow-xs">
            {accountTypes.map((account) => (
              <button
                key={account.id}
                onClick={() => setActiveTab(account.id)}
                className={`flex-1 px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none relative overflow-hidden ${activeTab === account.id
                  ? 'bg-white shadow-md text-gray-800'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
              >
                <span className={`text-sm ${activeTab === account.id ? 'font-semibold' : 'font-medium'
                  }`}>
                  {account.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
};

export default TeamAnalytics;