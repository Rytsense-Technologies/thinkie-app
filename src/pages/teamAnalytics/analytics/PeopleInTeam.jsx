import React from 'react';

const PeopleInTeam = () => {
  const teamMembers = [
    {
      id: 1,
      initials: 'SC',
      name: 'Sarah Chen',
      code: 'E001',
      role: 'Senior Engineer',
      rating: '5.0/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 5,
      lastAssessment: 'Sep 28, 2025',
      status: 'Excellent',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 2,
      initials: 'JW',
      name: 'James Wilson',
      code: 'E002',
      role: 'Mid-Level Engr.',
      rating: '4.4/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 3,
      lastAssessment: 'Sep 28, 2025',
      status: 'Excellent',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 3,
      initials: 'MG',
      name: 'Maria Garcia',
      code: 'E003',
      role: 'Jr. Engineer',
      rating: '5.0/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 4,
      lastAssessment: 'Sep 28, 2025',
      status: 'Excellent',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 4,
      initials: 'DK',
      name: 'David Kim',
      code: 'E004',
      role: 'Senior Engineer',
      rating: '5.0/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 2,
      lastAssessment: 'Sep 28, 2025',
      status: 'Good',
      statusColor: 'text-blue-600 bg-blue-50'
    },
    {
      id: 5,
      initials: 'RL',
      name: 'Robert Lee',
      code: 'E005',
      role: 'Jr. Engineer',
      rating: '3.9/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 1,
      lastAssessment: 'Sep 28, 2025',
      status: 'Needs Imprv',
      statusColor: 'text-yellow-600 bg-yellow-50'
    },
    {
      id: 6,
      initials: 'PM',
      name: 'Patricia Moore',
      code: 'E006',
      role: 'Mid-Level Engr.',
      rating: '5.0/5.0',
      assessments: '10/12',
      assessment: 10,
      totalAssessments: 12,
      certification: 6,
      lastAssessment: 'Sep 28, 2025',
      status: 'Needs Imprv',
      statusColor: 'text-yellow-600 bg-yellow-50'
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className="my-6">
        <h1 className="flex justify-start text-sm font-bold text-gray-900">People in Team</h1>
        <p className="flex justify-start text-gray-600 mt-1 text-xs">
          Click on individual team member to view their detailed analytics
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="w-full">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Employee</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Role</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Avg Rating</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Assessments</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Certification</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Last Assessment</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Status</th>
              <th className="text-left py-3 px-4 text-xs font-semibold text-gray-600 tracking-wider border-b">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {teamMembers.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
              >
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-semibold text-xs">
                        {member.initials}
                      </span>
                    </div>
                    <div className="flex flex-col ml-2">
                      <div className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </div>
                      <span className="flex justify-start text-xs text-gray-400 font-medium">
                        {member.code}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="text-sm text-gray-700">{member.role}</span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full ${member.statusColor}`}>{member.rating}</span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="text-sm text-gray-700">{member.assessments}</span>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gray-800 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${Math.min(100, (member.assessment / member.totalAssessments) * 100)}%`
                      }}
                    ></div>
                  </div>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600`}>
                    {member.certification}
                  </span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className="text-sm text-gray-700">{member.lastAssessment}</span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <span className={`inline-flex text-xs font-medium px-2.5 py-0.5 rounded-full ${member.statusColor}`}>
                    {member.status}
                  </span>
                </td>

                <td className="py-3 px-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-150 flex items-center space-x-1">
                    <span>Details</span>
                    <span>→</span>
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

export default PeopleInTeam;