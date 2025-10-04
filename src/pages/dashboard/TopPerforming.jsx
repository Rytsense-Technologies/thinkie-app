import React from 'react';
import { FiAward, FiStar, FiTrendingUp, FiUser } from 'react-icons/fi';
import { FaStar } from "react-icons/fa6";
import { PiFireSimple, PiTrophy, PiFireSimpleFill } from "react-icons/pi";
// import { PiFireSimpleFill } from "react-icons/pi";
import { MdOutlineTrendingUp } from "react-icons/md";

const TopPerforming = () => {
  const skillLevelData = [
    {
      rank: 1,
      initials: 'HN',
      name: 'Habibullah Nahid',
      role: 'Senior Engineer',
      department: 'Engineering',
      rating: 4.7,
      skills: 28
    },
    {
      rank: 2,
      initials: 'MR',
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      department: 'Marketing',
      rating: 4.7,
      skills: 28
    },
    {
      rank: 3,
      initials: 'EW',
      name: 'Emily Watson',
      role: 'Data Scientist',
      department: 'Engineering',
      rating: 4.7,
      skills: 28
    },
    {
      rank: 4,
      initials: 'JT',
      name: 'James Thompson',
      role: 'Senior Engineer',
      department: 'Engineering',
      rating: 4.7,
      skills: 28
    },
    {
      rank: 5,
      initials: 'LA',
      name: 'Lara Anderson',
      role: 'HR Manager',
      department: 'HR',
      rating: 4.7,
      skills: 28
    }
  ];

  const skillPointsData = [
    {
      rank: 1,
      initials: 'HN',
      name: 'Habibullah Nahid',
      role: 'Senior Engineer',
      department: 'Engineering',
      points: '1,834',
      skills: 28
    },
    {
      rank: 2,
      initials: 'MR',
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      department: 'Marketing',
      points: '1,720',
      skills: 28
    },
    {
      rank: 3,
      initials: 'EW',
      name: 'Emily Watson',
      role: 'Data Scientist',
      department: 'Engineering',
      points: '1,680',
      skills: 28
    },
    {
      rank: 4,
      initials: 'JT',
      name: 'James Thompson',
      role: 'Senior Engineer',
      department: 'Engineering',
      points: '1,580',
      skills: 28
    },
    {
      rank: 5,
      initials: 'LA',
      name: 'Lara Anderson',
      role: 'HR Manager',
      department: 'HR',
      points: '1,520',
      skills: 28
    }
  ];

  const engagedEmployeesData = [
    {
      rank: 1,
      initials: 'HN',
      name: 'Habibullah Nahid',
      role: 'Senior Engineer',
      department: 'Engineering',
      participation: '1.7',
      skills: 28
    },
    {
      rank: 2,
      initials: 'MR',
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      department: 'Marketing',
      participation: '1.7',
      skills: 28
    },
    {
      rank: 3,
      initials: 'EW',
      name: 'Emily Watson',
      role: 'Data Scientist',
      department: 'Engineering',
      participation: '1.7',
      skills: 28
    },
    {
      rank: 4,
      initials: 'JT',
      name: 'James Thompson',
      role: 'Senior Engineer',
      department: 'Engineering',
      participation: '1.7',
      skills: 28
    },
    {
      rank: 5,
      initials: 'LA',
      name: 'Lara Anderson',
      role: 'HR Manager',
      department: 'HR',
      participation: '1.7',
      skills: 28
    }
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <div className="flex justify-between items-center space-x-2 mb-3">
            <div>
              <h2 className="flex justify-start text-sm font-semibold text-gray-900">
                Most Skilled (Skill Level)
              </h2>
              <p className="flex justify-start text-gray-600 text-xs">
                Top performers by average skill rating
              </p>
            </div>
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
              <PiTrophy className="text-orange-600" size={18} />
            </div>
          </div>

          <div className="space-y-3">
            {skillLevelData.map((person) => (
              <div key={person.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full text-xs font-bold">
                    {person.rank}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold">
                      {person.initials}
                    </div>
                    <div>
                      <h3 className="flex justify-start text-sm font-semibold text-gray-900">{person.name}</h3>
                      <p className="flex justify-start text-xs text-gray-500">{person.role} • {person.department}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className='flex center'>
                    <FaStar className='mr-1 text-orange-400' />
                    <div className="text-sm font-bold text-orange-400">{person.rating}</div>
                  </div>
                  <div className="text-xs text-gray-500">{person.skills} skills</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Most Skilled (Skill Points)
              </h2>
              <p className="text-gray-600 text-xs">
                Top performers by total skill points
              </p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <FiAward className="text-blue-600" size={18} />
            </div>
          </div>

          <div className="space-y-3">
            {skillPointsData.map((person) => (
              <div key={person.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold">
                    {person.rank}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold">
                      {person.initials}
                    </div>
                    <div>
                      <h3 className="flex justify-start text-sm font-semibold text-gray-900">{person.name}</h3>
                      <p className="text-xs text-gray-500">{person.role} • {person.department}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className='flex items-center justify-end'>
                    <MdOutlineTrendingUp className='mr-1 w-4 h-4 text-blue-500' />
                    <div className="text-sm font-bold text-blue-500">{person.points}</div>
                  </div>
                  <div className="text-xs text-gray-500">{person.skills} skills</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Most Engaged Employees
              </h2>
              <p className="text-gray-600 text-xs">
                Engaged employees by participation
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <PiFireSimple className="text-green-600" size={18} />
            </div>
          </div>

          <div className="space-y-3">
            {engagedEmployeesData.map((person) => (
              <div key={person.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full text-xs font-bold">
                    {person.rank}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 text-gray-600 rounded-full text-sm font-bold">
                      {person.initials}
                    </div>
                    <div>
                      <h3 className="flex justify-start text-sm font-semibold text-gray-900">{person.name}</h3>
                      <p className="text-xs text-gray-500">{person.role} • {person.department}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className='flex items-center justify-end'>
                    <PiFireSimpleFill className='mr-1 w-4 h-4 text-emerald-500' />
                    <div className="text-sm font-bold text-emerald-500">{person.participation}</div>
                  </div>
                  <div className="text-xs text-gray-500">{person.skills} skills</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerforming;