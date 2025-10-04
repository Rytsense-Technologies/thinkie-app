import React from 'react';

const TopSkills = () => {

  const topSkills = [
    {
      id: 1,
      rank: 1,
      name: 'React Development',
      category: '10 members',
      rating: '4.2/5.0',
      users: 89,
      progress: 84 // 4.2/5.0 = 84%
    },
    {
      id: 2,
      rank: 2,
      name: 'TypeScript',
      category: '11 members',
      rating: '4.1/5.0',
      users: 56,
      progress: 82 // 4.1/5.0 = 82%
    },
    {
      id: 3,
      rank: 3,
      name: 'Problem Solving',
      category: '12 members',
      rating: '3.9/5.0',
      users: 67,
      progress: 78 // 3.9/5.0 = 78%
    },
    {
      id: 4,
      rank: 4,
      name: 'Team collaboration',
      category: '12 members',
      rating: '3.8/5.0',
      users: 45,
      progress: 76 // 3.8/5.0 = 76%
    },
    {
      id: 5,
      rank: 5,
      name: 'Python',
      category: '9 members',
      rating: '3.4/5.0',
      users: 34,
      progress: 68 // 3.4/5.0 = 68%
    }
  ];

  const skillGaps = [
    {
      id: 1,
      name: 'Database Design',
      category: 'medium priority',
      gap: '1.0',
      current: '3.0',
      target: '4.0',
      progress: 75 // 3.0/4.0 = 75%
    },
    {
      id: 2,
      name: 'Strategic Planning',
      category: 'low priority',
      gap: '1.5',
      current: '2.5',
      target: '4.0',
      progress: 62.5 // 2.5/4.0 = 62.5%
    },
    {
      id: 3,
      name: 'Node.js',
      category: 'low priority',
      gap: '1.2',
      current: '2.8',
      target: '4.0',
      progress: 70 // 2.8/4.0 = 70%
    },
    {
      id: 4,
      name: 'Problem Solving',
      category: 'low priority',
      gap: '1.2',
      current: '2.8',
      target: '4.0',
      progress: 70 // 2.8/4.0 = 70%
    },
    {
      id: 5,
      name: 'Team Collaboration',
      category: 'low priority',
      gap: '1.2',
      current: '2.8',
      target: '4.0',
      progress: 70 // 2.8/4.0 = 70%
    }
  ];

  const priorityColors = {
    'medium priority': {
      text: 'text-yellow-700',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200'
    },
    'low priority': {
      text: 'text-blue-700',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    }
  };

  // Function to get color based on rating
  const getRatingColor = (rating) => {
    const numericRating = parseFloat(rating);

    if (numericRating > 4.0) {
      return {
        rankBg: 'bg-green-100',
        rankText: 'text-green-800',
        ratingText: 'text-green-600',
        progressBar: 'bg-green-500'
      };
    } else if (numericRating >= 3.5) {
      return {
        rankBg: 'bg-blue-100',
        rankText: 'text-blue-800',
        ratingText: 'text-blue-600',
        progressBar: 'bg-blue-500'
      };
    } else {
      return {
        rankBg: 'bg-yellow-100',
        rankText: 'text-yellow-800',
        ratingText: 'text-yellow-600',
        progressBar: 'bg-yellow-500'
      };
    }
  };



  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
        <h2 className="flex justify-start text-sm font-semibold text-gray-900">
          Top Skills by Average Rating
        </h2>
        <p className="flex justify-start text-gray-600 text-xs mb-3">
          Most frequently rated skills and their average scores
        </p>

        <div className="space-y-4">
          {topSkills.map((skill) => {
            const colors = getRatingColor(skill.rating);



            return (
              <div key={skill.id} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-6 h-6 ${colors.rankBg} ${colors.rankText} rounded-full flex items-center justify-center text-xs font-medium`}>
                  {skill.rank}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </h3>
                      <span className={`text-xs ${colors.text} ${colors.bg} rounded-full border ${colors.border} px-2 py-0.5 font-medium`}>
                        {skill.category}
                      </span>
                    </div>
                    <span className={`text-xs font-semibold ${colors.ratingText}`}>
                      {skill.rating}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className={`h-1.5 rounded-full bg-cyan-800`}
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      {skill.users} users
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skill Gaps Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3">
        <h2 className="flex justify-start text-sm font-semibold text-gray-900">
          Skill Gaps
        </h2>
        <p className="flex justify-start text-gray-600 text-xs mb-3">
          Areas requiring development focus
        </p>

        <div className="space-y-4">
          {skillGaps.map((skill) => {
            const priorityColors = {
              'medium priority': {
                text: 'text-amber-700',
                bg: 'bg-amber-100',
                border: 'border-amber-300',
                dot: 'bg-amber-500'
              },
              'low priority': {
                text: 'text-blue-700',
                bg: 'bg-blue-100',
                border: 'border-blue-300',
                dot: 'bg-blue-500'
              }
            };

            const colors = priorityColors[skill.category] || {
              text: 'text-gray-700',
              bg: 'bg-gray-100',
              border: 'border-gray-300',
              dot: 'bg-gray-500'
            };

            return (
              <div key={skill.id} className="flex items-start space-x-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900">
                        {skill.name}
                      </h3>
                      <span className={`text-xs ${colors.text} ${colors.bg} rounded-full border ${colors.border} px-2 py-0.5 font-medium capitalize`}>
                        {skill.category}
                      </span>
                    </div>
                    <div className=''>
                      <span className="text-xs font-bold text-red-500 mr-2">Gap {skill.gap}</span>
                      <span className='text-xs text-gray-400'>(7 affected)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 relative overflow-hidden">
                        {/* Multi-color background */}
                        <div className="flex h-1.5 w-full">
                          <div className="flex-1 bg-red-500"></div>
                          <div className="flex-1 bg-yellow-500"></div>
                          <div className="flex-1 bg-green-500"></div>
                        </div>
                        {/* Gray overlay for remaining progress */}
                        <div
                          className="bg-gray-200 h-1.5 absolute top-0 right-0"
                          style={{ width: `${100 - skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      Current: {skill.current}/Target: {skill.target}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopSkills;