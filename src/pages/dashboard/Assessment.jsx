import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Assessment = () => {
  const completionData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [84.3, 11, 4.7],
        backgroundColor: [
          '#10B981', // Green
          '#F59E0B', // Yellow
          '#EF4444'  // Red for Not Started (more appropriate)
        ],
        borderColor: '#FFFFFF',
        borderWidth: 3,
        borderRadius: 2,
        spacing: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#F9FAFB',
        bodyColor: '#F9FAFB',
        borderColor: '#374151',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            const counts = {
              'Completed': 412,
              'In Progress': 23,
              'Not Started': 54
            };
            return ` ${context.label}: ${context.parsed}% (${counts[context.label]})`;
          }
        }
      }
    },
    cutout: '75%',
  };

  const completionStats = [
    { status: 'Completed', percentage: 84.3, count: 412, color: 'bg-green-500' },
    { status: 'In Progress', percentage: 11, count: 23, color: 'bg-yellow-500' },
    { status: 'Not Started', percentage: 4.7, count: 54, color: 'bg-red-400' }
  ];

  const recentAssessments = [
    { id: 1, name: 'Habbullah Nahid', department: 'Engineering', role: 'Data Scientist', status: 'Completed', date: 'Sep 28, 2025' },
    { id: 2, name: 'Habbullah Nahid', department: 'Engineering', role: 'Data Scientist', status: 'Completed', date: 'Sep 28, 2025' },
    { id: 3, name: 'Habbullah Nahid', department: 'Engineering', role: 'Data Scientist', status: 'Pending', date: 'Sep 28, 2025' },
    { id: 4, name: 'Habbullah Nahid', department: 'Engineering', role: 'Data Scientist', status: 'Completed', date: 'Sep 28, 2025' }
  ];

  // Remove these lines as they're not needed for Chart.js
  // const total = completionData.reduce((sum, item) => sum + item.percentage, 0);
  // let currentAngle = 0;

  return (
    <div className="my-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="flex justify-start text-sm font-bold text-gray-900">
              Assessment Completion Status
            </h2>
            <p className="flex justify-start text-gray-600 text-xs mt-1">
              Assessment completion across the organization
            </p>
          </div>

          <div className="flex items-center justify-between">
            {/* Donut Chart Container */}
            <div className="relative w-48 h-48">
              <Doughnut data={completionData} options={chartOptions} />
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">84.3%</span>
                <span className="text-sm text-gray-500">Overall</span>
              </div>
            </div>

            <div className="flex-1 ml-8">
              <div className="space-y-2">
                {completionStats.map((item, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full ${item.color} mr-3`}></div>
                      <span className="text-sm font-semibold text-gray-800">{item.status}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900 block">{item.percentage}%</span>
                      <span className="text-xs text-gray-600">{item.count} employees</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between border-b border-gray-200 items-center p-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Assessments</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-0">
            {recentAssessments.map((assessment, index) => (
              <div key={assessment.id}>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-gray-600">HN</span>
                    </div>
                    <div>
                      <h3 className="flex justify-start text-sm font-medium text-gray-900">{assessment.name}</h3>
                      <p className="flex justify-start text-xs text-gray-500">{assessment.department} • {assessment.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${assessment.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {assessment.status}
                    </span>
                    <span className="text-xs text-gray-500">{assessment.date}</span>
                  </div>
                </div>
                {/* Add border line except for last item */}
                {index < recentAssessments.length - 1 && (
                  <div className="border-b border-gray-200 mx-3"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;