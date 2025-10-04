import React, { useState, useEffect } from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const ChartAnalytics = () => {
  const [radarData, setRadarData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialRadarData = [
    {
      subject: 'Problem Solving',
      TeamA: 95,  // Excellent
      TeamB: 65,  // Needs improvement
      TeamC: 85,  // Good
      TeamD: 75,  // Average
      fullMark: 100
    },
    {
      subject: 'TypeScript',
      TeamA: 88,  // Good
      TeamB: 92,  // Excellent
      TeamC: 70,  // Average
      TeamD: 60,  // Needs improvement
      fullMark: 100
    },
    {
      subject: 'Communication',
      TeamA: 72,  // Average
      TeamB: 85,  // Good
      TeamC: 58,  // Needs improvement
      TeamD: 90,  // Excellent
      fullMark: 100
    },
    {
      subject: 'React',
      TeamA: 96,  // Excellent
      TeamB: 78,  // Average
      TeamC: 82,  // Good
      TeamD: 68,  // Needs improvement
      fullMark: 100
    },
    {
      subject: 'Team',
      TeamA: 80,  // Good
      TeamB: 92,  // Excellent
      TeamC: 65,  // Needs improvement
      TeamD: 75,  // Average
      fullMark: 100
    },
  ];

  const initialBarData = [
    { name: 'Jan', Completed: 12, Pending: 8 },
    { name: 'Feb', Completed: 15, Pending: 5 },
    { name: 'Mar', Completed: 8, Pending: 12 },
    { name: 'Apr', Completed: 18, Pending: 2 },
    { name: 'May', Completed: 14, Pending: 6 },
  ];

  useEffect(() => {
    // Simulate data loading with animation delay
    setTimeout(() => {
      setRadarData(initialRadarData);
      setBarData(initialBarData);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setRadarData([...initialRadarData]);
      setBarData([...initialBarData]);
      setIsLoading(false);
    }, 500);
  };

  // Updated colors with darker borders and lighter fills
  const teamColors = {
    TeamA: {
      border: '#2563eb', // Darker blue
      fill: '#3b82f6'    // Lighter blue
    },
    TeamB: {
      border: '#059669', // Darker green
      fill: '#10b981'    // Lighter green
    },
    TeamC: {
      border: '#0891b2', // Darker cyan
      fill: '#06b6d4'    // Lighter cyan
    },
    TeamD: {
      border: '#7c3aed', // Darker purple
      fill: '#8b5cf6'    // Lighter purple
    }
  };

  // For even more contrast between border and fill, use this color scheme:
  // const teamColors = {
  //   TeamA: {
  //     border: '#1d4ed8', // Very dark blue
  //     fill: '#60a5fa'    // Very light blue
  //   },
  //   TeamB: {
  //     border: '#047857', // Very dark green
  //     fill: '#34d399'    // Very light green
  //   },
  //   TeamC: {
  //     border: '#0e7490', // Very dark cyan
  //     fill: '#22d3ee'    // Very light cyan
  //   },
  //   TeamD: {
  //     border: '#6d28d9', // Very dark purple
  //     fill: '#a78bfa'    // Very light purple
  //   }
  // };

  const barColors = {
    Completed: '#4db856ff',
    Pending: '#d67c58ff'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="flex flex-col items-center justify-center h-96 gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-l-indigo-600 rounded-full animate-spin"></div>
          <p className="text-slate-600 font-medium">Loading charts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-lg p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="text-center mb-6">
            <h2 className="flex justify-start text-sm font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
              Top Skills Overview
            </h2>
            <p className="flex justify-start text-slate-500 text-xs font-medium">
              Average ratings across organization
            </p>
          </div>

          <div className="animate-fade-in-up">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: '#64748b', fontSize: 10 }}
                />
                <Radar
                  name="Team A"
                  dataKey="TeamA"
                  stroke={teamColors.TeamA.border}
                  fill={teamColors.TeamA.fill}
                  fillOpacity={0.7}
                  strokeWidth={3}
                />
                <Radar
                  name="Team B"
                  dataKey="TeamB"
                  stroke={teamColors.TeamB.border}
                  fill={teamColors.TeamB.fill}
                  fillOpacity={0.7}
                  strokeWidth={3}
                />
                <Radar
                  name="Team C"
                  dataKey="TeamC"
                  stroke={teamColors.TeamC.border}
                  fill={teamColors.TeamC.fill}
                  fillOpacity={0.7}
                  strokeWidth={3}
                />
                <Radar
                  name="Team D"
                  dataKey="TeamD"
                  stroke={teamColors.TeamD.border}
                  fill={teamColors.TeamD.fill}
                  fillOpacity={0.7}
                  strokeWidth={3}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: '20px',
                    fontSize: '12px'
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-slate-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden group">
          <div className="text-center mb-6">
            <h2 className="flex justify-start text-sm font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2">
              Assessment Trends
            </h2>
            <p className="flex justify-start text-slate-500 text-xs font-medium">
              Monthly completion tracking
            </p>
          </div>

          <div className="animate-fade-in-up">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis
                  dataKey="name"
                  tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }}
                />
                <YAxis
                  tick={{ fill: '#64748b', fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend
                  wrapperStyle={{
                    paddingTop: '10px',
                    fontSize: '12px'
                  }}
                />
                <Bar
                  dataKey="Completed"
                  fill={barColors.Completed}
                  radius={[4, 4, 0, 0]}
                  name="Completed"
                />
                <Bar
                  dataKey="Pending"
                  fill={barColors.Pending}
                  radius={[4, 4, 0, 0]}
                  name="Pending"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      {/* <div className="flex justify-center">
        <button 
          onClick={handleReset}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          <span className="transition-transform duration-300 group-hover:rotate-180">↻</span>
          Reset
        </button>
      </div> */}
    </div>
  );
};

export default ChartAnalytics;