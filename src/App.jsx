// import './App.css'
// import Dashboard from './pages/dashboard/Dashboard'
// import Sidebar from './pages/Sidebar'

// function App() {
//   return (
//     <div className="grid grid-cols-[256px_1fr] h-screen bg-white">
//       <div className="fixed left-0 top-0 h-screen w-64">
//         <Sidebar />
//       </div>
//       <main className="col-start-2 overflow-y-auto">
//         <Dashboard />
//       </main>
//     </div>
//   )
// }

// export default App


import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
// import TeamAnalytics from './pages/TeamAnalytics' // Create this component
import Sidebar from './pages/Sidebar'
import TeamAnalytics from './pages/teamAnalytics/TeamAnalytics'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="grid grid-cols-[256px_1fr] h-screen bg-white">
        <div className="fixed left-0 top-0 h-screen w-64">
          <Sidebar />
        </div>
        <main className="col-start-2 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team-analytics" element={<TeamAnalytics />} />
            {/* <Route path="/user-analytics" element={<UserAnalytics />} />
            <Route path="/skill-matrix-report" element={<SkillMatrixReport />} />
            <Route path="/readiness-report" element={<ReadinessReport />} /> */}
            {/* Add more routes for other pages as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App