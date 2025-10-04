import React, { useState } from 'react';
import { 
  FiHome, 
  FiZap, 
  FiUsers, 
  FiUser, 
  FiBarChart2, 
  FiPieChart,
  FiFileText, 
  FiCheckSquare, 
  FiSettings, 
  FiHelpCircle,
  FiSearch,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/ThinkieLogo3.png"

const Sidebar = () => {
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { id: 1, name: 'Dashboard', icon: <FiHome size={18} />, path: '/dashboard' },
    { id: 2, name: 'Skills', icon: <FiZap size={18} />, path: '/skills' },
    { id: 3, name: 'Roles', icon: <FiUsers size={18} />, path: '/roles' },
    { id: 4, name: 'Users', icon: <FiUser size={18} />, path: '/users' },
    { 
      id: 5, 
      name: 'Analytics', 
      icon: <FiBarChart2 size={18} />,
      hasDropdown: true,
      isOpen: analyticsOpen,
      toggle: () => setAnalyticsOpen(!analyticsOpen),
      subItems: [
        { id: 51, name: 'Team Analytics', icon: <FiPieChart size={16} />, path: '/team-analytics' },
        { id: 52, name: 'User Analytics', icon: <FiPieChart size={16} />, path: '/user-analytics' }
      ]
    },
    { 
      id: 8, 
      name: 'Reports', 
      icon: <FiFileText size={18} />,
      hasDropdown: true,
      isOpen: reportsOpen,
      toggle: () => setReportsOpen(!reportsOpen),
      subItems: [
        { id: 81, name: 'Skill Matrix Report', icon: <FiBarChart2 size={16} />, path: '/skill-matrix-report' },
        { id: 82, name: 'Readiness Report', icon: <FiCheckSquare size={16} />, path: '/readiness-report' }
      ]
    },
    { id: 11, name: 'Settings', icon: <FiSettings size={18} />, path: '/settings' },
    { id: 12, name: 'Support', icon: <FiHelpCircle size={18} />, path: '/support' },
  ];

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col font-sans">
      {/* Header with Logo */}
      <div className="p-1 ml-2">
        <div className="flex items-center space-x-3">
          <img 
            src={logo}
            alt="Thinkie Logo" 
            className="w-20 h-12 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        </div>
      </div>

      <div className="p-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-normal placeholder-gray-400 transition-all duration-200"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto scrollbar-hide">
        <ul className="py-2 scrollbar-hide">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.hasDropdown ? (
                <>
                  {/* Dropdown Parent Item */}
                  <button
                    onClick={item.toggle}
                    className={`flex items-center justify-between w-full px-6 py-3 transition-colors duration-200 group ${
                      item.subItems.some(subItem => isActive(subItem.path)) 
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-3 transition-colors duration-200 ${
                        item.subItems.some(subItem => isActive(subItem.path)) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                      }`}>
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium tracking-wide">{item.name}</span>
                    </div>
                    <span className={`transition-colors duration-200 ${
                      item.subItems.some(subItem => isActive(subItem.path)) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                    }`}>
                      {item.isOpen ? <FiChevronDown size={16} /> : <FiChevronRight size={16} />}
                    </span>
                  </button>

                  {/* Dropdown Sub Items */}
                  {item.isOpen && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.path}
                            className={`flex items-center px-6 py-2 transition-colors duration-200 group ${
                              isActive(subItem.path)
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                            }`}
                          >
                            <span className={`mr-3 transition-colors duration-200 ${
                              isActive(subItem.path) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                            }`}>
                              {subItem.icon}
                            </span>
                            <span className="text-sm font-medium tracking-wide">{subItem.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                /* Regular Menu Item */
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 transition-colors duration-200 group ${
                    isActive(item.path)
                      ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <span className={`mr-3 transition-colors duration-200 ${
                    isActive(item.path) ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium tracking-wide">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Online Status */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium text-sm">DP</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">David Park</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-500">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;