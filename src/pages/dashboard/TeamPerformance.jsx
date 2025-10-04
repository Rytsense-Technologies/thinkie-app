import React from 'react';
import { FiArrowRight, FiUsers } from 'react-icons/fi';

const TeamPerformance = () => {
  const teamData = [
    {
      id: 1,
      name: 'Engineering',
      members: 85,
      rating: '3.9/5.0',
      completionRate: 94,
      color: 'text-blue-600'
    },
    {
      id: 2,
      name: 'Marketing',
      members: 42,
      rating: '3.9/5.0',
      completionRate: 94,
      color: 'text-green-600'
    },
    {
      id: 3,
      name: 'Sales',
      members: 56,
      rating: '3.9/5.0',
      completionRate: 100,
      color: 'text-purple-600'
    },
    {
      id: 4,
      name: 'HR',
      members: 18,
      rating: '3.9/5.0',
      completionRate: 94,
      color: 'text-pink-600'
    },
    {
      id: 5,
      name: 'Operations',
      members: 44,
      rating: '3.9/5.0',
      completionRate: 94,
      color: 'text-orange-600'
    }
  ];

  const renderRatingDots = (rating) => {
    const numericRating = parseFloat(rating);
    const filledDots = Math.round((numericRating / 5) * 6);
    const emptyDots = 6 - filledDots;

    return (
      <div className="flex items-center space-x-1">
        <span className="text-sm text-blue-700 mr-2">{rating}</span>
        <div className="flex space-x-1">
          {[...Array(filledDots)].map((_, i) => (
            <div key={`filled-${i}`} className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          ))}
          {[...Array(emptyDots)].map((_, i) => (
            <div key={`empty-${i}`} className="w-2 h-2 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>
    );
  };

  const renderCompletionProgress = (completionRate) => {
    let progressColor = 'bg-green-500';
    
    if (completionRate < 70) {
      progressColor = 'bg-red-500';
    } else if (completionRate < 90) {
      progressColor = 'bg-yellow-500';
    }

    return (
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Progress</span>
          <span>{completionRate}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div 
            className={`h-1.5 rounded-full ${progressColor} transition-all duration-300`}
            style={{ width: `${completionRate}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 mt-5">
      {/* Header */}
      <div className="mb-6">
        <h1 className="flex justify-start text-sm font-semibold text-gray-900 mb-1">
          Team Performance Overview
        </h1>
        <p className="flex justify-start text-gray-600 text-xs">
          Aggregated skill ratings and assessment completion by team
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50">
                Team Name
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50">
                Members
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50">
                Avg Rating
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50">
                Completion Rate
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 bg-gray-50">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {teamData.map((team, index) => (
              <tr 
                key={team.id} 
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                {/* Team Name */}
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <span className={`w-2 h-2 pb-6 rounded-full text-green-400 mr-3`}>●</span>
                    <span className="text-sm font-medium text-gray-900">{team.name}</span>
                  </div>
                </td>

                {/* Members */}
                <td className="py-4 px-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <FiUsers className="mr-2 text-gray-400" size={16} />
                    {team.members}
                  </div>
                </td>

                {/* Avg Rating */}
                <td className="py-4 px-4">
                  {renderRatingDots(team.rating)}
                </td>

                {/* Completion Rate with Progress Bar */}
                <td className="py-4 px-4">
                  {renderCompletionProgress(team.completionRate)}
                </td>

                {/* Action */}
                <td className="py-4 px-4">
                  <button className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                    View Details
                    <FiArrowRight className="ml-1" size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamPerformance;