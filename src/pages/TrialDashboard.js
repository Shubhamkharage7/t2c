// import React, { useState } from 'react';
// import { Activity, Users, TestTube, Clock, AlertTriangle } from 'lucide-react';
// import TrialDetailView from './TrialDetailView';

// const TrialDashboard = () => {
//   const [selectedTrial, setSelectedTrial] = useState(null);

//   const statistics = [
//     {
//       title: 'Active Trials',
//       value: 12,
//       icon: <Activity className="w-6 h-6 text-primary" />,
//       bgColor: 'bg-blue-50',
//     },
//     {
//       title: 'Total Participants',
//       value: '1,250',
//       icon: <Users className="w-6 h-6 text-green-600" />,
//       bgColor: 'bg-green-50',
//     },
//     {
//       title: 'Completed Trials',
//       value: 8,
//       icon: <TestTube className="w-6 h-6 text-purple-600" />,
//       bgColor: 'bg-purple-50',
//     },
//     {
//       title: 'Avg. Completion Time',
//       value: '4.2 mo',
//       icon: <Clock className="w-6 h-6 text-yellow-600" />,
//       bgColor: 'bg-yellow-50',
//     },
//   ];

//   const trials = [
//     {
//       name: 'Cardiovascular Drug Trial Phase III',
//       status: 'active',
//       participants: 250,
//       progress: 65,
//       lastUpdate: '2 minutes ago',
//       details: 'Detailed information about the Cardiovascular Drug Trial.',
//     },
//     {
//       name: 'Diabetes Treatment Study',
//       status: 'active',
//       participants: 180,
//       progress: 42,
//       lastUpdate: '15 minutes ago',
//       details: 'Detailed information about the Diabetes Treatment Study.',
//     },
//     {
//       name: 'Oncology Research Trial',
//       status: 'pending',
//       participants: 300,
//       progress: 0,
//       lastUpdate: '1 hour ago',
//       details: 'Detailed information about the Oncology Research Trial.',
//     },
//   ];

//   const alerts = [
//     {
//       type: 'error',
//       title: 'Participant Dropout Alert',
//       message: '3 participants dropped out from Cardiovascular Trial',
//       time: '2 hours ago',
//     },
//     {
//       type: 'warning',
//       title: 'Protocol Deviation',
//       message: 'Minor protocol deviation reported in Diabetes Study',
//       time: '5 hours ago',
//     },
//   ];

//   if (selectedTrial) {
//     return (
//       <TrialDetailView
//         trial={selectedTrial}
//         onBack={() => setSelectedTrial(null)}
//       />
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold mb-8">Trial Dashboard</h1>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         {statistics.map((stat, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border border-gray-200"
//           >
//             <div className={`${stat.bgColor} p-3 rounded-lg`}>{stat.icon}</div>
//             <div>
//               <p className="text-gray-600">{stat.title}</p>
//               <h3 className="text-3xl font-bold">{stat.value}</h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Active Trials Table */}
//       <div className="bg-white shadow-lg rounded-lg border border-gray-200 mb-8">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6">Active Trials</h2>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left pb-4 text-gray-600 font-medium">
//                     Trial Name
//                   </th>
//                   <th className="text-left pb-4 text-gray-600 font-medium">
//                     Status
//                   </th>
//                   <th className="text-left pb-4 text-gray-600 font-medium">
//                     Participants
//                   </th>
//                   <th className="text-left pb-4 text-gray-600 font-medium">
//                     Progress
//                   </th>
//                   <th className="text-left pb-4 text-gray-600 font-medium">
//                     Last Update
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {trials.map((trial, index) => (
//                   <tr
//                     key={index}
//                     className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
//                     onClick={() => setSelectedTrial(trial)}
//                   >
//                     <td className="py-4">{trial.name}</td>
//                     <td className="py-4">
//                       <span
//                         className={`px-2 py-1 rounded-full text-sm ${
//                           trial.status === 'active'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}
//                       >
//                         {trial.status}
//                       </span>
//                     </td>
//                     <td className="py-4">{trial.participants}</td>
//                     <td className="py-4">
//                       <div className="flex items-center">
//                         <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
//                           <div
//                             className="bg-blue-600 rounded-full h-2"
//                             style={{ width: `${trial.progress}%` }}
//                           ></div>
//                         </div>
//                         <span>{trial.progress}%</span>
//                       </div>
//                     </td>
//                     <td className="py-4 text-gray-500">{trial.lastUpdate}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>

//       {/* Recent Alerts */}
//       <div className="bg-white shadow-lg rounded-lg border border-gray-200">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold mb-6">Recent Alerts</h2>
//           <div className="space-y-4">
//             {alerts.map((alert, index) => (
//               <div
//                 key={index}
//                 className={`p-4 rounded-lg ${
//                   alert.type === 'error' ? 'bg-red-50' : 'bg-yellow-50'
//                 }`}
//               >
//                 <div className="flex items-start">
//                   <AlertTriangle
//                     className={`w-5 h-5 mt-1 ${
//                       alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'
//                     }`}
//                   />
//                   <div className="ml-3">
//                     <h3
//                       className={`font-medium ${
//                         alert.type === 'error' ? 'text-red-800' : 'text-yellow-800'
//                       }`}
//                     >
//                       {alert.title}
//                     </h3>
//                     <p
//                       className={`text-sm ${
//                         alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'
//                       }`}
//                     >
//                       {alert.message}
//                     </p>
//                     <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrialDashboard;



import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Users, TestTube, Clock, AlertTriangle } from 'lucide-react';

const TrialDashboard = () => {
  const statistics = [
    {
      title: 'Active Trials',
      value: 12,
      icon: <Activity className="w-6 h-6 text-primary" />,
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Participants',
      value: '1,250',
      icon: <Users className="w-6 h-6 text-green-600" />,
      bgColor: 'bg-green-50',
    },
    {
      title: 'Completed Trials',
      value: 8,
      icon: <TestTube className="w-6 h-6 text-purple-600" />,
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Avg. Completion Time',
      value: '4.2 mo',
      icon: <Clock className="w-6 h-6 text-yellow-600" />,
      bgColor: 'bg-yellow-50',
    },
  ];

  const trials = [
    {
      id: 1,
      name: 'Cardiovascular Drug Trial Phase III',
      status: 'active',
      participants: 250,
      progress: 65,
      lastUpdate: '2 minutes ago',
    },
    {
      id: 2,
      name: 'Diabetes Treatment Study',
      status: 'active',
      participants: 180,
      progress: 42,
      lastUpdate: '15 minutes ago',
    },
    {
      id: 3,
      name: 'Oncology Research Trial',
      status: 'pending',
      participants: 300,
      progress: 0,
      lastUpdate: '1 hour ago',
    },
  ];

  const alerts = [
    {
      type: 'error',
      title: 'Participant Dropout Alert',
      message: '3 participants dropped out from Cardiovascular Trial',
      time: '2 hours ago',
    },
    {
      type: 'warning',
      title: 'Protocol Deviation',
      message: 'Minor protocol deviation reported in Diabetes Study',
      time: '5 hours ago',
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Trial Dashboard</h1>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 border border-gray-200"
          >
            <div className={`${stat.bgColor} p-3 rounded-lg`}>{stat.icon}</div>
            <div>
              <p className="text-gray-600">{stat.title}</p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Active Trials Table */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200 mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Active Trials</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left pb-4 text-gray-600 font-medium">
                    Trial Name
                  </th>
                  <th className="text-left pb-4 text-gray-600 font-medium">
                    Status
                  </th>
                  <th className="text-left pb-4 text-gray-600 font-medium">
                    Participants
                  </th>
                  <th className="text-left pb-4 text-gray-600 font-medium">
                    Progress
                  </th>
                  <th className="text-left pb-4 text-gray-600 font-medium">
                    Last Update
                  </th>
                </tr>
              </thead>
              <tbody>
                {trials.map((trial) => (
                  <tr
                    key={trial.id}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="py-4">
                      <Link to={`/trial/${trial.id}`} className="text-blue-600 hover:underline">
                        {trial.name}
                      </Link>
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          trial.status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {trial.status}
                      </span>
                    </td>
                    <td className="py-4">{trial.participants}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div
                            className="bg-blue-600 rounded-full h-2"
                            style={{ width: `${trial.progress}%` }}
                          ></div>
                        </div>
                        <span>{trial.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-500">{trial.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Alerts</h2>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  alert.type === 'error' ? 'bg-red-50' : 'bg-yellow-50'
                }`}
              >
                <div className="flex items-start">
                  <AlertTriangle
                    className={`w-5 h-5 mt-1 ${
                      alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'
                    }`}
                  />
                  <div className="ml-3">
                    <h3
                      className={`font-medium ${
                        alert.type === 'error' ? 'text-red-800' : 'text-yellow-800'
                      }`}
                    >
                      {alert.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        alert.type === 'error' ? 'text-red-600' : 'text-yellow-600'
                      }`}
                    >
                      {alert.message}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialDashboard;
