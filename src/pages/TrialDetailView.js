
// import React from 'react';
// import { ChevronLeft, Users, Activity, Clock, Building } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const TrialDetailView = ({ trial, onBack, onNavigateToSites }) => {
//   console.log('Received onNavigateToSites:', onNavigateToSites); // Add this log
//   const enrollmentData = [
//     { month: 'Jan', planned: 50, actual: 48 },
//     { month: 'Feb', planned: 100, actual: 95 },
//     { month: 'Mar', planned: 150, actual: 142 },
//     { month: 'Apr', planned: 200, actual: 185 },
//     { month: 'May', planned: 250, actual: 250 },
//   ];

//   const sitePerformanceData = [
//     { month: 'Jan', performance: 85 },
//     { month: 'Feb', performance: 88 },
//     { month: 'Mar', performance: 92 },
//     { month: 'Apr', performance: 87 },
//     { month: 'May', performance: 94 },
//   ];

//   const recentUpdates = [
//     {
//       icon: <Users className="w-4 h-4 text-green-600" />,
//       title: 'New participant enrolled',
//       time: '2 hours ago',
//     },
//     {
//       icon: <Activity className="w-4 h-4 text-blue-600" />,
//       title: 'Protocol amendment approved',
//       time: '1 day ago',
//     },
//     {
//       icon: <Clock className="w-4 h-4 text-yellow-600" />,
//       title: 'Minor protocol deviation reported',
//       time: '2 days ago',
//     },
//   ];

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Header */}
//       <button
//         onClick={onBack}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         <ChevronLeft className="w-4 h-4 mr-1" />
//         Back to Dashboard
//       </button>
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold">{trial.name}</h1>
//           <div className="flex items-center space-x-4">
//             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//               Active
//             </span>
//             <span className="text-gray-500">Protocol ID: {trial.protocolId}</span>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-gray-500">Last Updated</p>
//           <p className="font-medium">{trial.lastUpdate}</p>
//         </div>
//       </div>

//       {/* Key Metrics */}
//       <div className="grid grid-cols-4 gap-6 mb-8">
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Users className="w-5 h-5 text-blue-600 mb-2" />
//           <p className="text-gray-600 text-sm">Total Participants</p>
//           <h2 className="text-2xl font-bold">250/300</h2>
//           <p className="text-green-600 text-sm">On track</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Activity className="w-5 h-5 text-green-600 mb-2" />
//           <p className="text-gray-600 text-sm">Progress</p>
//           <h2 className="text-2xl font-bold">65%</h2>
//           <p className="text-green-600 text-sm">+2.5% this week</p>
//         </div>
//         {/* Active Sites Card as Button */}
//         <div
//           className="bg-white shadow rounded-lg p-6 border cursor-pointer hover:shadow-lg transition-shadow"
//           onClick={() => {
//             console.log('Active Sites button clicked');
//             console.log('onNavigateToSites:', onNavigateToSites); // Should output: [Function]
//             onNavigateToSites(); // Ensure the function is correctly called
//           }}
//         >
//           <Building className="w-5 h-5 text-purple-600 mb-2" />
//           <p className="text-gray-600 text-sm">Active Sites</p>
//           <h2 className="text-2xl font-bold">12/15</h2>
//           <p className="text-gray-600 text-sm">3 pending</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Clock className="w-5 h-5 text-yellow-600 mb-2" />
//           <p className="text-gray-600 text-sm">Time Remaining</p>
//           <h2 className="text-2xl font-bold">128 days</h2>
//           <p className="text-gray-600 text-sm">Ends Sep 2025</p>
//         </div>
//       </div>
//     {/* Charts and Recent Updates */}
//        <div className="grid grid-cols-3 gap-6 mb-8">
//          <div className="col-span-2 bg-white shadow rounded-lg p-6 border">
//            <h3 className="text-lg font-bold mb-4">Enrollment Progress</h3>
//            <ResponsiveContainer width="100%" height={250}>
//              <LineChart data={enrollmentData}>
//                <CartesianGrid strokeDasharray="3 3" />
//                <XAxis dataKey="month" />
//                <YAxis />
//                <Tooltip />
//                <Line type="monotone" dataKey="planned" stroke="#94A3B8" name="Planned" />
//                <Line type="monotone" dataKey="actual" stroke="#2563EB" name="Actual" />
//              </LineChart>
//            </ResponsiveContainer>
//          </div>
//          <div className="bg-white shadow rounded-lg p-6 border">
//            <h3 className="text-lg font-bold mb-4">Recent Updates</h3>
//            <div className="space-y-4">
//              {recentUpdates.map((update, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <div className="p-2 rounded-full bg-gray-100">{update.icon}</div>
//                 <div>
//                   <p className="text-sm font-medium">{update.title}</p>
//                   <p className="text-xs text-gray-500">{update.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Site Performance */}
//       <div className="bg-white shadow rounded-lg p-6 border mb-8">
//         <h3 className="text-lg font-bold mb-4">Site Performance</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <LineChart data={sitePerformanceData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="performance" stroke="#2563EB" name="Performance Score" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Trial Information and Endpoints */}
//       <div className="grid grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Trial Information</h3>
//           <p className="text-sm text-gray-600">Start Date</p>
//           <h4 className="text-base font-medium">January 15, 2025</h4>
//           <p className="text-sm text-gray-600 mt-4">Primary Location</p>
//           <h4 className="text-base font-medium">Boston, MA</h4>
//           <p className="text-sm text-gray-600 mt-4">Principal Investigator</p>
//           <h4 className="text-base font-medium">Dr. Sarah Johnson</h4>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Study Endpoints</h3>
//           <p className="font-medium">Primary Endpoint</p>
//           <p className="text-sm text-gray-600">
//             Reduction in cardiovascular events over 24 months
//           </p>
//           <p className="font-medium mt-4">Secondary Endpoints</p>
//           <ul className="text-sm text-gray-600 list-disc ml-5">
//             <li>Change in blood pressure from baseline</li>
//             <li>Quality of life assessment</li>
//             <li>Safety and tolerability evaluation</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrialDetailView;


//=====================================================IN USE==============================================


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ChevronLeft, Users, Activity, Clock, Building } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const TrialDetailView = () => {
//   const { id } = useParams(); // Extract trial ID from the URL
//   const navigate = useNavigate();

//   // Mock trial data (should be fetched dynamically based on the trial ID)
//   const trial = {
//     id,
//     name: `Trial ${id} - Cardiovascular Drug Study`,
//     protocolId: `Protocol-${id}`,
//     participants: '250/300',
//     progress: '65%',
//     lastUpdate: '2 minutes ago',
//     enrollmentData: [
//       { month: 'Jan', planned: 50, actual: 48 },
//       { month: 'Feb', planned: 100, actual: 95 },
//       { month: 'Mar', planned: 150, actual: 142 },
//       { month: 'Apr', planned: 200, actual: 185 },
//       { month: 'May', planned: 250, actual: 250 },
//     ],
//     sitePerformanceData: [
//       { month: 'Jan', performance: 85 },
//       { month: 'Feb', performance: 88 },
//       { month: 'Mar', performance: 92 },
//       { month: 'Apr', performance: 87 },
//       { month: 'May', performance: 94 },
//     ],
//     recentUpdates: [
//       {
//         icon: <Users className="w-4 h-4 text-green-600" />,
//         title: 'New participant enrolled',
//         time: '2 hours ago',
//       },
//       {
//         icon: <Activity className="w-4 h-4 text-blue-600" />,
//         title: 'Protocol amendment approved',
//         time: '1 day ago',
//       },
//       {
//         icon: <Clock className="w-4 h-4 text-yellow-600" />,
//         title: 'Minor protocol deviation reported',
//         time: '2 days ago',
//       },
//     ],
//   };

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         <ChevronLeft className="w-4 h-4 mr-1" />
//         Back to Dashboard
//       </button>

//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-3xl font-bold">{trial.name}</h1>
//           <div className="flex items-center space-x-4">
//             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//               Active
//             </span>
//             <span className="text-gray-500">Protocol ID: {trial.protocolId}</span>
//           </div>
//         </div>
//         <div className="text-right">
//           <p className="text-gray-500">Last Updated</p>
//           <p className="font-medium">{trial.lastUpdate}</p>
//         </div>
//       </div>

//       {/* Key Metrics Section */}
//       <div className="grid grid-cols-4 gap-6 mb-8">
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Users className="w-5 h-5 text-blue-600 mb-2" />
//           <p className="text-gray-600 text-sm">Total Participants</p>
//           <h2 className="text-2xl font-bold">{trial.participants}</h2>
//           <p className="text-green-600 text-sm">On track</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Activity className="w-5 h-5 text-green-600 mb-2" />
//           <p className="text-gray-600 text-sm">Progress</p>
//           <h2 className="text-2xl font-bold">{trial.progress}</h2>
//           <p className="text-green-600 text-sm">+2.5% this week</p>
//         </div>
//         <div
//           className="bg-white shadow rounded-lg p-6 border cursor-pointer hover:shadow-lg transition-shadow"
//           onClick={() => navigate('/sites')}
//         >
//           <Building className="w-5 h-5 text-purple-600 mb-2" />
//           <p className="text-gray-600 text-sm">Active Sites</p>
//           <h2 className="text-2xl font-bold">12/15</h2>
//           <p className="text-gray-600 text-sm">3 pending</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Clock className="w-5 h-5 text-yellow-600 mb-2" />
//           <p className="text-gray-600 text-sm">Time Remaining</p>
//           <h2 className="text-2xl font-bold">128 days</h2>
//           <p className="text-gray-600 text-sm">Ends Sep 2025</p>
//         </div>
//       </div>

//       {/* Charts and Recent Updates Section */}
//       <div className="grid grid-cols-3 gap-6 mb-8">
//         <div className="col-span-2 bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Enrollment Progress</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={trial.enrollmentData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Line type="monotone" dataKey="planned" stroke="#94A3B8" name="Planned" />
//               <Line type="monotone" dataKey="actual" stroke="#2563EB" name="Actual" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Recent Updates</h3>
//           <div className="space-y-4">
//             {trial.recentUpdates.map((update, index) => (
//               <div key={index} className="flex items-center space-x-3">
//                 <div className="p-2 rounded-full bg-gray-100">{update.icon}</div>
//                 <div>
//                   <p className="text-sm font-medium">{update.title}</p>
//                   <p className="text-xs text-gray-500">{update.time}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Trial Information and Endpoints Section */}
//       <div className="grid grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Trial Information</h3>
//           <p className="text-sm text-gray-600">Start Date</p>
//           <h4 className="text-base font-medium">January 15, 2025</h4>
//           <p className="text-sm text-gray-600 mt-4">Primary Location</p>
//           <h4 className="text-base font-medium">Boston, MA</h4>
//           <p className="text-sm text-gray-600 mt-4">Principal Investigator</p>
//           <h4 className="text-base font-medium">Dr. Sarah Johnson</h4>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <h3 className="text-lg font-bold mb-4">Study Endpoints</h3>
//           <p className="font-medium">Primary Endpoint</p>
//           <p className="text-sm text-gray-600">
//             Reduction in cardiovascular events over 24 months
//           </p>
//           <p className="font-medium mt-4">Secondary Endpoints</p>
//           <ul className="text-sm text-gray-600 list-disc ml-5">
//             <li>Change in blood pressure from baseline</li>
//             <li>Quality of life assessment</li>
//             <li>Safety and tolerability evaluation</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrialDetailView;



//=====================================================IN USE==============================================


// import React, { useMemo } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ChevronLeft, Users, Activity, Clock, Building } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts';

// const TrialDetailView = () => {
//   const { id } = useParams(); // Extract trial ID from the URL
//   const navigate = useNavigate();

//   // Mock trial data (memoized for performance)
//   const trial = useMemo(
//     () => ({
//       id,
//       name: `Trial ${id} - Cardiovascular Drug Study`,
//       protocolId: `Protocol-${id}`,
//       participants: '250/300',
//       progress: '65%',
//       lastUpdate: '2 minutes ago',
//       enrollmentData: [
//         { month: 'Jan', planned: 50, actual: 48 },
//         { month: 'Feb', planned: 100, actual: 95 },
//         { month: 'Mar', planned: 150, actual: 142 },
//         { month: 'Apr', planned: 200, actual: 185 },
//         { month: 'May', planned: 250, actual: 250 },
//       ],
//       recentUpdates: [
//         {
//           icon: <Users className="w-4 h-4 text-green-600" />,
//           title: 'New participant enrolled',
//           time: '2 hours ago',
//         },
//         {
//           icon: <Activity className="w-4 h-4 text-blue-600" />,
//           title: 'Protocol amendment approved',
//           time: '1 day ago',
//         },
//         {
//           icon: <Clock className="w-4 h-4 text-yellow-600" />,
//           title: 'Minor protocol deviation reported',
//           time: '2 days ago',
//         },
//       ],
//     }),
//     [id]
//   );

//   return (
//     <div className="p-4 md:p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/dashboard')}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700 focus:ring focus:ring-blue-300"
//         aria-label="Back to Dashboard"
//       >
//         <ChevronLeft className="w-4 h-4 mr-1" />
//         Back to Dashboard
//       </button>

//       {/* Header Section */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold">{trial.name}</h1>
//           <div className="flex items-center space-x-2 mt-2">
//             <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
//               Active
//             </span>
//             <span className="text-gray-500 text-sm">Protocol ID: {trial.protocolId}</span>
//           </div>
//         </div>
//         <div className="text-sm text-gray-500 mt-4 sm:mt-0">
//           <p>Last Updated</p>
//           <p className="font-medium">{trial.lastUpdate}</p>
//         </div>
//       </div>

//       {/* Key Metrics Section */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Users className="w-5 h-5 text-blue-600 mb-2" />
//           <p className="text-gray-600 text-sm">Participants</p>
//           <h2 className="text-xl md:text-2xl font-bold">{trial.participants}</h2>
//           <p className="text-green-600 text-sm">On track</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Activity className="w-5 h-5 text-green-600 mb-2" />
//           <p className="text-gray-600 text-sm">Progress</p>
//           <h2 className="text-xl md:text-2xl font-bold">{trial.progress}</h2>
//           <p className="text-green-600 text-sm">+2.5% this week</p>
//         </div>
//         <div
//           className="bg-white shadow rounded-lg p-6 border cursor-pointer hover:shadow-lg transition-shadow"
//           onClick={() => navigate('/sites')} // Proper navigation restored
//           aria-label="View Active Sites"
//         >
//           <Building className="w-5 h-5 text-purple-600 mb-2" />
//           <p className="text-gray-600 text-sm">Active Sites</p>
//           <h2 className="text-xl md:text-2xl font-bold">12/15</h2>
//           <p className="text-gray-600 text-sm">3 pending</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 border">
//           <Clock className="w-5 h-5 text-yellow-600 mb-2" />
//           <p className="text-gray-600 text-sm">Time Remaining</p>
//           <h2 className="text-xl md:text-2xl font-bold">128 days</h2>
//           <p className="text-gray-600 text-sm">Ends Sep 2025</p>
//         </div>
//       </div>

//       {/* Enrollment Progress */}
//       <div className="bg-white shadow rounded-lg p-6 border mb-8">
//         <h3 className="text-lg font-bold mb-4">Enrollment Progress</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={trial.enrollmentData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="planned" stroke="#94A3B8" name="Planned" />
//             <Line type="monotone" dataKey="actual" stroke="#2563EB" name="Actual" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default TrialDetailView;





import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Users, Activity, Clock, Building } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const TrialDetailView = () => {
  const { id } = useParams(); // Extract trial ID from the URL
  const navigate = useNavigate();

  // Mock trial data (memoized for performance)
  const trial = useMemo(
    () => ({
      id,
      name: `Trial ${id} - Cardiovascular Drug Study`,
      protocolId: `Protocol-${id}`,
      participants: '250/300',
      progress: '65%',
      lastUpdate: '2 minutes ago',
      enrollmentData: [
        { month: 'Jan', planned: 50, actual: 48 },
        { month: 'Feb', planned: 100, actual: 95 },
        { month: 'Mar', planned: 150, actual: 142 },
        { month: 'Apr', planned: 200, actual: 185 },
        { month: 'May', planned: 250, actual: 250 },
      ],
      recentUpdates: [
        {
          icon: <Users className="w-4 h-4 text-green-600" />,
          title: 'New participant enrolled',
          time: '2 hours ago',
        },
        {
          icon: <Activity className="w-4 h-4 text-blue-600" />,
          title: 'Protocol amendment approved',
          time: '1 day ago',
        },
        {
          icon: <Clock className="w-4 h-4 text-yellow-600" />,
          title: 'Minor protocol deviation reported',
          time: '2 days ago',
        },
      ],
    }),
    [id]
  );

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/dashboard')}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-700 focus:ring focus:ring-blue-300"
        aria-label="Back to Dashboard"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </button>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{trial.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Active
            </span>
            <span className="text-gray-500 text-sm">Protocol ID: {trial.protocolId}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500 mt-4 sm:mt-0">
          <p>Last Updated</p>
          <p className="font-medium">{trial.lastUpdate}</p>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6 border">
          <Users className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-gray-600 text-sm">Participants</p>
          <h2 className="text-xl md:text-2xl font-bold">{trial.participants}</h2>
          <p className="text-green-600 text-sm">On track</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 border">
          <Activity className="w-5 h-5 text-green-600 mb-2" />
          <p className="text-gray-600 text-sm">Progress</p>
          <h2 className="text-xl md:text-2xl font-bold">{trial.progress}</h2>
          <p className="text-green-600 text-sm">+2.5% this week</p>
        </div>
        <div
          className="bg-white shadow rounded-lg p-6 border cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate('/sites')} // Restored navigation functionality
          aria-label="View Active Sites"
        >
          <Building className="w-5 h-5 text-purple-600 mb-2" />
          <p className="text-gray-600 text-sm">Active Sites</p>
          <h2 className="text-xl md:text-2xl font-bold">12/15</h2>
          <p className="text-gray-600 text-sm">3 pending</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6 border">
          <Clock className="w-5 h-5 text-yellow-600 mb-2" />
          <p className="text-gray-600 text-sm">Time Remaining</p>
          <h2 className="text-xl md:text-2xl font-bold">128 days</h2>
          <p className="text-gray-600 text-sm">Ends Sep 2025</p>
        </div>
      </div>

      {/* Enrollment Progress */}
      <div className="bg-white shadow rounded-lg p-6 border mb-8">
        <h3 className="text-lg font-bold mb-4">Enrollment Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trial.enrollmentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="planned" stroke="#94A3B8" name="Planned" />
            <Line type="monotone" dataKey="actual" stroke="#2563EB" name="Actual" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Updates */}
      <div className="bg-white shadow rounded-lg p-6 border mb-8">
        <h3 className="text-lg font-bold mb-4">Recent Updates</h3>
        <div className="space-y-4">
          {trial.recentUpdates.map((update, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-gray-100">{update.icon}</div>
              <div>
                <p className="text-sm font-medium">{update.title}</p>
                <p className="text-xs text-gray-500">{update.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trial Information and Study Endpoints Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white shadow rounded-lg p-6 border">
          <h3 className="text-lg font-bold mb-4">Trial Information</h3>
          <p className="text-sm text-gray-600">Start Date</p>
          <h4 className="font-medium">January 15, 2025</h4>
          <p className="text-sm text-gray-600 mt-4">Primary Location</p>
          <h4 className="font-medium">Boston, MA</h4>
          <p className="text-sm text-gray-600 mt-4">Principal Investigator</p>
          <h4 className="font-medium">Dr. Sarah Johnson</h4>
        </div>
        <div className="bg-white shadow rounded-lg p-6 border">
          <h3 className="text-lg font-bold mb-4">Study Endpoints</h3>
          <p className="font-medium">Primary Endpoint</p>
          <p className="text-sm text-gray-600">
            Reduction in cardiovascular events over 24 months
          </p>
          <p className="font-medium mt-4">Secondary Endpoints</p>
          <ul className="text-sm text-gray-600 list-disc ml-5">
            <li>Change in blood pressure from baseline</li>
            <li>Quality of life assessment</li>
            <li>Safety and tolerability evaluation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrialDetailView;
