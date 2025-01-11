


// import React from 'react';

// const SitesDashboard = ({ onBack }) => {
//   const sites = [
//     {
//       name: 'Boston Medical Center',
//       location: 'Boston, MA',
//       enrolled: '45/50',
//       completion: '78%',
//       deviations: 3,
//       dataLag: '24 hours',
//     },
//     {
//       name: 'Mayo Clinic Research Center',
//       location: 'Rochester, MN',
//       enrolled: '48/55',
//       completion: '82%',
//       deviations: 2,
//       dataLag: '24 hours',
//     },
//   ];

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={onBack}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         Back to Trial Details
//       </button>

//       {/* Page Header */}
//       <h1 className="text-3xl font-bold mb-6">Active Sites</h1>

//       {/* Sites List */}
//       <div className="grid grid-cols-1 gap-6">
//         {sites.map((site, index) => (
//           <div
//             key={index}
//             className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition-shadow"
//           >
//             <h2 className="text-lg font-bold">{site.name}</h2>
//             <p className="text-gray-600">{site.location}</p>
//             <div className="mt-4 grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">Enrolled</p>
//                 <p className="font-bold">{site.enrolled}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Completion</p>
//                 <p className="font-bold">{site.completion}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Deviations</p>
//                 <p className="font-bold">{site.deviations}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Data Entry Lag</p>
//                 <p className="font-bold">{site.dataLag}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SitesDashboard;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MapPin, Users, Activity, AlertTriangle, Clock } from 'lucide-react';

// const sitesData = [
//   {
//     id: 1,
//     name: 'Boston Medical Center',
//     location: 'Boston, MA',
//     enrolled: '45/50',
//     completion: '78%',
//     deviations: 3,
//     dataLag: '24 hours',
//     status: 'Active',
//   },
//   {
//     id: 2,
//     name: 'Mayo Clinic Research Center',
//     location: 'Rochester, MN',
//     enrolled: '48/55',
//     completion: '82%',
//     deviations: 2,
//     dataLag: '24 hours',
//     status: 'Active',
//   },
// ];

// const SitesDashboard = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">Active Sites</h1>
//       <div className="grid grid-cols-1 gap-6">
//         {sitesData.map((site) => (
//           <div
//             key={site.id}
//             onClick={() => navigate(`/sites/${site.id}`)} // Navigate to dynamic route
//             className="bg-white shadow rounded-lg p-6 border hover:shadow-lg transition-shadow cursor-pointer"
//           >
//             <h2 className="text-lg font-bold">{site.name}</h2>
//             <p className="text-gray-600">{site.location}</p>
//             <div className="mt-4 grid grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">Enrolled</p>
//                 <p className="font-bold">{site.enrolled}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Completion</p>
//                 <p className="font-bold">{site.completion}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Deviations</p>
//                 <p className="font-bold">{site.deviations}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Data Entry Lag</p>
//                 <p className="font-bold">{site.dataLag}</p>
//               </div>
//             </div>
//             <span
//               className={`mt-4 px-3 py-1 rounded-full text-sm ${
//                 site.status === 'Active'
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-yellow-100 text-yellow-800'
//               }`}
//             >
//               {site.status}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SitesDashboard;


import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, MapPin } from 'lucide-react';

const sitesData = [
  {
    id: 1,
    name: 'Boston Medical Center',
    location: 'Boston, MA',
    enrolled: '45/50',
    completion: '78%',
    deviations: 3,
    dataLag: '24 hours',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Mayo Clinic Research Center',
    location: 'Rochester, MN',
    enrolled: '48/55',
    completion: '82%',
    deviations: 2,
    dataLag: '24 hours',
    status: 'Active',
  },
];

const SitesDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve trialId from the state passed via navigation
  const trialId = location.state?.trialId || 'default-trial';

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(`/trial/${trialId}`)} // Dynamically navigate to the correct trial
        className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to Trial Details
      </button>

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Active Sites</h1>

      {/* Active Sites List */}
      <div className="grid grid-cols-1 gap-6">
        {sitesData.map((site) => (
          <div
            key={site.id}
            onClick={() => navigate(`/sites/${site.id}`)} // Navigate to SiteDetailView
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
          >
            <h2 className="text-lg font-bold">{site.name}</h2>
            <p className="text-gray-600 flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {site.location}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Enrolled</p>
                <p className="font-bold">{site.enrolled}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Completion</p>
                <p className="font-bold">{site.completion}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Deviations</p>
                <p className="font-bold">{site.deviations}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Data Entry Lag</p>
                <p className="font-bold">{site.dataLag}</p>
              </div>
            </div>
            <span
              className={`mt-4 px-3 py-1 rounded-full text-sm ${
                site.status === 'Active'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {site.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SitesDashboard;
