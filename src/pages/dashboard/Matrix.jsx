import React, { useState } from 'react';

const Matrix = () => {
  const [activeTab, setActiveTab] = useState('role'); // 'role' or 'team'

  const matrixData = [
    {
      team: 'Engineering',
      skills: {
        react: 4.5,
        typescript: 4.3,
        python: 4.0,
        aws: 4.7,
        leadership: 3.3,
        communication: 3.8,
        projectManagement: 3.4
      },
      average: 3.9
    },
    {
      team: 'Marketing',
      skills: {
        react: 2.3,
        typescript: 2.3,
        python: 2.3,
        aws: 2.3,
        leadership: 2.3,
        communication: 2.3,
        projectManagement: 2.3
      },
      average: 3.5
    },
    {
      team: 'Sales',
      skills: {
        react: 2.3,
        typescript: 2.3,
        python: 2.3,
        aws: 2.3,
        leadership: 2.3,
        communication: 2.3,
        projectManagement: 2.3
      },
      average: 3.2
    },
    {
      team: 'HR',
      skills: {
        react: 2.3,
        typescript: 2.3,
        python: 2.3,
        aws: 2.3,
        leadership: 2.3,
        communication: 2.3,
        projectManagement: 2.3
      },
      average: 3.1
    },
    {
      team: 'Operations',
      skills: {
        react: 2.3,
        typescript: 2.3,
        python: 2.3,
        aws: 2.3,
        leadership: 2.3,
        communication: 2.3,
        projectManagement: 2.3
      },
      average: 3.7
    }
  ];

  const getRatingColor = (rating) => {
    if (rating >= 4.0) return 'bg-green-100 text-green-800'; // Excellent
    if (rating >= 3.5) return 'bg-blue-100 text-blue-800';   // Good
    if (rating >= 3.0) return 'bg-yellow-100 text-yellow-800'; // Average
    return 'bg-red-100 text-red-800'; // Needs Improvement
  };

  const accountTypes = [
    {
      id: 'role',
      label: 'By Role',
    },
    {
      id: 'team',
      label: 'By team',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 my-2">
      <div className="mb-3">
        <h1 className="flex justify-start text-sm font-bold text-gray-900">
          Skill Proficiency Matrix
        </h1>
        <p className="flex justify-start text-xs text-gray-600">
          Comprehensive heatmap showing average skill ratings across roles and teams (1-5 scale)
        </p>
      </div>

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
                {/* {activeTab === account.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-blue-500 rounded-full" />
                )} */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      {/* <div className="flex space-x-1 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('role')}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === 'role'
              ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
        >
          By Role
        </button>
        <button
          onClick={() => setActiveTab('team')}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${activeTab === 'team'
              ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-500'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
        >
          By Team
        </button>
      </div> */}

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                Team
              </th>
              {activeTab === 'role' && (
                <>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50 border-l border-gray-200">
                    React
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    TypeScript
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    Python
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    AWS
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    Leadership
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    Communication
                  </th>
                  <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50">
                    Project Management
                  </th>
                </>
              )}
              <th className="text-center text-sm py-3 px-4 font-medium text-gray-600 bg-gray-50 border-l border-gray-200">
                Avg
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {matrixData.map((row, index) => (
              <tr
                key={row.team}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-gray-100 transition-colors`}
              >
                {/* Team Name */}
                <td className="py-3 px-4 text-sm font-medium text-gray-900 border-r border-gray-200">
                  {row.team}
                </td>

                {/* Skill Ratings - Only show when By Role tab is active */}
                {activeTab === 'role' && (
                  <>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.react)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.react)}`}>
                        {row.skills.react}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.typescript)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.typescript)}`}>
                        {row.skills.typescript}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.python)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.python)}`}>
                        {row.skills.python}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.aws)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.aws)}`}>
                        {row.skills.aws}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.leadership)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.leadership)}`}>
                        {row.skills.leadership}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.communication)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.communication)}`}>
                        {row.skills.communication}
                      </span>
                    </td>
                    <td className={`text-center py-3 px-4 border-r border-gray-200 ${getRatingColor(row.skills.projectManagement)}`}>
                      <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-xs font-medium ${getRatingColor(row.skills.projectManagement)}`}>
                        {row.skills.projectManagement}
                      </span>
                    </td>
                  </>
                )}

                {/* Team Average */}
                <td className="text-center py-3 px-4 border-l border-gray-200">
                  <span className={`inline-flex items-center justify-center w-12 h-8 rounded-md text-sm font-medium ${getRatingColor(row.average)}`}>
                    {row.average}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Rating Scale */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm space-y-2 sm:space-y-0">
          <span className="font-semibold text-gray-900 whitespace-nowrap">Rating Scale:</span>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-green-100 border border-green-300 rounded"></span>
              <span className="text-gray-600 whitespace-nowrap">Excellent (&gt; +4)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></span>
              <span className="text-gray-600 whitespace-nowrap">Good (3.5 - 3.9)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-yellow-100 border border-yellow-300 rounded"></span>
              <span className="text-gray-600 whitespace-nowrap">Average (3.0 - 3.4)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 bg-red-100 border border-red-300 rounded"></span>
              <span className="text-gray-600 whitespace-nowrap">Needs Improvement (&lt; 3.0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matrix;