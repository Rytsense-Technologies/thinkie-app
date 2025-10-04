import React from 'react'
import Analytics from './Analytics'
import TopSkills from './TopSkills'
import Assessment from './Assessment'
import Matrix from './Matrix'
import ChartAnalytic from './ChartAnalytics'
import ChartAnalytics from './ChartAnalytics'
import TopPerforming from './TopPerforming'
import TeamPerformance from './TeamPerformance'

const Dashboard = () => {
  return (
    <div className='px-5'>
      <div className="my-2">
        <h1 className="flex justify-start text-xl font-bold text-gray-900 pl-2 mb-2">Dashboard</h1>
        <p className="flex justify-start pl-2 text-gray-600 text-sm">
          Overview of skills, assessments, and team performance
        </p>
      </div>
      <Analytics />
      <TopSkills />
      <Assessment />
      <Matrix />
      <ChartAnalytics />
      <TopPerforming />
      <TeamPerformance />
    </div>
  )
}

export default Dashboard