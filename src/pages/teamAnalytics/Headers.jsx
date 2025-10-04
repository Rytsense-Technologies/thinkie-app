import React from 'react'
import { GoPeople } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiSuitcaseSimpleLight } from "react-icons/pi";

const Headers = () => {
  const teamData = {
    teamName: "Engineering",
    teamMembers: 12,
    avgRating: '4.31/5.0',
    manager: "Michael Rodriguez",
    description: "Comprehensive overview of team performance and skills"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-xl overflow-hidden bg-white mb-3">
      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-50 rounded-full">
            <GoPeople className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="flex justify-start text-xs text-gray-400 mb-1">Team Name</p>
            <h3 className="flex justify-start text-sm font-semibold text-gray-800">{teamData.teamName}</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-green-50 rounded-full">
            <IoPersonCircleOutline className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="flex justify-start text-xs text-gray-400 mb-1">Team Members</p>
            <h3 className="flex justify-start text-sm font-semibold text-gray-800">{teamData.teamMembers} People</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 rounded-full">
            <IoMdCheckmarkCircleOutline className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="flex justify-start text-xs text-gray-400 mb-1">Avg Team Rating</p>
            <h3 className="flex justify-start text-sm font-semibold text-gray-800">{teamData.avgRating}</h3>
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-orange-50 rounded-full">
            <PiSuitcaseSimpleLight className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <p className="flex justify-start text-xs text-gray-400 mb-1">Manager</p>
            <h3 className="text-sm font-semibold text-gray-800">{teamData.manager}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers