import React from 'react';
import { FiAward, FiFileText, FiAlertTriangle, FiStar } from 'react-icons/fi';
import { PiCertificate } from "react-icons/pi";
import { LiaExclamationCircleSolid } from "react-icons/lia";


const PerformanceCards = () => {
  const cardsData = [
    {
      title: 'Top Performer',
      icon: <FiAward className="w-5 h-5" />,
      count: '5 members',
      metric: 'Rating > 4.5',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      iconColor: 'text-emerald-600',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Total Certifications',
      icon: <PiCertificate size={23}/>,
      count: '23',
      metric: 'Active Credentials',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-700'
    },
    {
      title: 'Needs Attention',
      icon: <LiaExclamationCircleSolid size={23}/>,
      count: '2 members',
      metric: 'Below Expections',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      iconColor: 'text-yellow-600',
      textColor: 'text-red-700'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-3">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl p-5 shadow-xs hover:shadow-sm transition-shadow duration-200"
        >
          <h6 className="flex justify-start text-xs text-gray-400 font-semibold mb-3">
            {card.title}
          </h6>
          <div className="flex items-start space-x-2">
            <div className={`${card.iconColor} mt-2.5`}>
              {card.icon}
            </div>

            {/* Second Column - Count and Metric */}
            <div className="flex flex-col">
              <p className="flex justify-start text-sm font-semibold text-gray-900">{card.count}</p>
              <span className="text-xs text-gray-500 mt-0.2">
                {card.metric}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PerformanceCards;