import React from 'react';
import {
  FiUsers,
  FiCheckCircle,
} from 'react-icons/fi';
import { PiStudentBold } from "react-icons/pi";

const Analytics = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Employees',
      value: '245',
      description: 'Across 5 teams',
      bgColor: 'bg-blue-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <FiUsers className="text-indigo-400" size={20} />
    },
    {
      id: 2,
      title: 'Assessment Completion',
      value: '84%',
      description: '412 of 489 completed',
      bgColor: 'bg-green-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <FiCheckCircle className="text-blue-600" size={20} />,
      progress: 84,
      completed: 412,
      total: 489,
      showProgress: true
    },
    {
      id: 3,
      title: 'Average Skill Rating',
      value: '3.7/5.0',
      description: 'Based on all assessments',
      bgColor: 'bg-purple-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <PiStudentBold className="text-emerald-400" size={20} />,
      rating: 3.7,
      showDottedProgress: true
    },
    {
      id: 4,
      title: 'Total Skills Tracked',
      value: '8',
      description: 'Across 4 categories',
      bgColor: 'bg-orange-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <FiUsers className="text-yellow-400" size={20} />
    }
  ];

  const renderProgressBar = (progress, completed, total) => (
    <div className="mt-3 mb-1">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );

  const renderDottedProgress = (rating) => {
    const totalDots = 5;
    const filledDots = Math.floor(rating);
    const partialFill = rating - filledDots;

    return (
      <div className="mt-2">
        <div className="flex items-center space-x-1">
          {[...Array(totalDots)].map((_, index) => {
            if (index < filledDots) {
              return (
                <div key={index} className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              );
            } else if (index === filledDots && partialFill > 0) {
              return (
                <div key={index} className="w-3 h-3 bg-yellow-300 rounded-full"></div>
              );
            } else {
              return (
                <div key={index} className="w-3 h-3 bg-gray-300 rounded-full"></div>
              );
            }
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="my-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-5">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 ${stat.borderColor}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <h3 className="text-gray-600 text-sm font-medium">
                    {stat.title}
                  </h3>
                </div>
                {stat.rightIcon}
              </div>
              <p className={`flex justify-start ${stat.textColor} text-2xl font-bold mb-1`}>
                {stat.value}
              </p>
              {stat.showProgress && renderProgressBar(stat.progress, stat.completed, stat.total)}
              <p className="flex justify-start text-gray-500 text-xs">
                {stat.description}
              </p>
              {stat.showDottedProgress && renderDottedProgress(stat.rating)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;