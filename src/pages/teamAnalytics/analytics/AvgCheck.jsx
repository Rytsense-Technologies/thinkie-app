import React from 'react';
import {
  FiUsers,
  FiCheckCircle,
} from 'react-icons/fi';
import { FiAward } from 'react-icons/fi';
import { GoPeople } from "react-icons/go";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";


const AvgCheck = () => {
  const stats = [
    {
      id: 1,
      title: 'Team Avg Intrest vs skill',
      value: '4.5',
      value2: '3.4',
      description: 'Intreset',
      description2: 'Skills',
      descriptionColor: 'text-gray-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-gray-200',
      textColor: 'text-blue-400',
      rightIcon: <FiAward className="text-yellow-400" size={20} />
    },
    {
      id: 2,
      title: 'Self Assessment',
      value: '10/12',
      description: '2 due',
      descriptionColor: 'text-red-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-gray-200',
      textColor: 'text-indigo-500',
      rightIcon: <GoPeople className="text-indigo-600" size={20} />,
      progress: 84,
      completed: 412,
      total: 489,
      showProgress: true
    },
    {
      id: 3,
      title: 'Average Skill Rating',
      value: '11/12',
      description: '1 due',
      descriptionColor: 'text-red-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <PiSuitcaseSimpleLight className="text-red-400" size={20} />,
      rating: 3.7,
      showDottedProgress: true
    },
    {
      id: 4,
      title: 'Total Skills Tracked',
      value: '20',
      description: 'Across 5 categories',
      descriptionColor: 'text-gray-300',
      bgColor: 'bg-orange-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      rightIcon: <IoMdCheckmark className="text-green-400" size={20} />
    }
  ];

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
              <div className='flex justify-between'>
                <p className={`${stat.textColor} text-2xl font-bold mb-1`}>
                  {stat.value}
                </p>
                {stat.value2 &&
                  <p className={`text-emerald-400 text-2xl font-bold mb-1`}>
                    {stat.value2}
                  </p>
                }
              </div>
              <div className='flex justify-between'>
                <p className={`${stat.descriptionColor} text-xs`}>
                  {stat.description}
                </p>
                {stat.value2 &&
                  <p className={`${stat.descriptionColor} text-xs`}>
                    {stat.description2}
                  </p>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvgCheck;