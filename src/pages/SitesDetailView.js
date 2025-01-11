
//=================================================================================================================================

//=================================================================================================================================
//=================================================================================================================================
//=================================================================================================================================
//=================================================================================================================================
//=================================================================================================================================

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   MapPin,
//   Calendar,
//   ChevronLeft,
// } from 'lucide-react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   LineChart,
//   Line
// } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const sitesData = [
//   {
//     id: 1,
//     name: 'Boston Medical Center',
//     location: 'Boston, MA',
//     status: 'Active',
//     startDate: '2025-01-15',
//     expectedEndDate: '2025-12-31',
//     principalInvestigator: 'Dr. Emily Chen',
//     contact: {
//       coordinatorName: 'Sarah Williams',
//       coordinatorPhone: '(617) 555-0124',
//       coordinatorEmail: 's.williams@bmc.com',
//       address: '88 East Newton Street, Boston, MA 02118',
//     },
//     metrics: {
//       retentionRate: 92,
//       screeningRate: 85,
//       protocolAdherence: 97,
//       dataQualityScore: 92,
//     },
//     regulatory: {
//       irbRenewalDue: '2025-12-01',
//       lastAuditDate: '2024-11-15',
//       auditFindings: 0,
//       gcpExpiration: '2025-06-30',
//     },
//     safety: {
//       adverseEvents: 2,
//       seriousAdverseEvents: 0,
//       protocolDeviations: {
//         total: 3,
//         major: 1,
//         minor: 2,
//       },
//     },
//     patientProgress: {
//       screening: 65,
//       active: 42,
//       completed: 3,
//       discontinued: 3,
//       failedScreening: 20,
//     },
//     demographics: {
//       ageGroups: [
//         { name: '18-30', value: 10 },
//         { name: '31-45', value: 15 },
//         { name: '46-60', value: 12 },
//         { name: '60+', value: 8 },
//       ],
//       gender: [
//         { name: 'Male', value: 24 },
//         { name: 'Female', value: 21 },
//       ],
//     },
//     monthlyEnrollment: [
//       { month: 'Jan', enrolled: 15, target: 12 },
//       { month: 'Feb', enrolled: 12, target: 12 },
//       { month: 'Mar', enrolled: 10, target: 12 },
//       { month: 'Apr', enrolled: 8, target: 12 },
//       { month: 'May', enrolled: 0, target: 12 },
//     ],
//   },
//   {
//     id: 1,
//     name: 'Boston Medical Center',
//     location: 'Boston, MA',
//     status: 'Active',
//     startDate: '2025-01-15',
//     expectedEndDate: '2025-12-31',
//     principalInvestigator: 'Dr. Emily Chen',
//     contact: {
//       coordinatorName: 'Sarah Williams',
//       coordinatorPhone: '(617) 555-0124',
//       coordinatorEmail: 's.williams@bmc.com',
//       address: '88 East Newton Street, Boston, MA 02118',
//     },
//     metrics: {
//       retentionRate: 92,
//       screeningRate: 85,
//       protocolAdherence: 97,
//       dataQualityScore: 92,
//     },
//     regulatory: {
//       irbRenewalDue: '2025-12-01',
//       lastAuditDate: '2024-11-15',
//       auditFindings: 0,
//       gcpExpiration: '2025-06-30',
//     },
//     safety: {
//       adverseEvents: 2,
//       seriousAdverseEvents: 0,
//       protocolDeviations: {
//         total: 3,
//         major: 1,
//         minor: 2,
//       },
//     },
//     patientProgress: {
//       screening: 65,
//       active: 42,
//       completed: 3,
//       discontinued: 3,
//       failedScreening: 20,
//     },
//     demographics: {
//       ageGroups: [
//         { name: '18-30', value: 10 },
//         { name: '31-45', value: 15 },
//         { name: '46-60', value: 12 },
//         { name: '60+', value: 8 },
//       ],
//       gender: [
//         { name: 'Male', value: 24 },
//         { name: 'Female', value: 21 },
//       ],
//     },
//     monthlyEnrollment: [
//       { month: 'Jan', enrolled: 15, target: 12 },
//       { month: 'Feb', enrolled: 12, target: 12 },
//       { month: 'Mar', enrolled: 10, target: 12 },
//       { month: 'Apr', enrolled: 8, target: 12 },
//       { month: 'May', enrolled: 0, target: 12 },
//     ],
//     patientVisits: [
//       { visit: 'Screening', patients: 80 },
//       { visit: 'Visit 1', patients: 60 },
//       { visit: 'Visit 2', patients: 50 },
//       { visit: 'Visit 3', patients: 40 },
//       { visit: 'Visit 4', patients: 30 },
//       { visit: 'End of Study', patients: 20 },
//     ],
//     predictionAnalysis: [
//       { month: 'Jan', actual: 20, predicted: 15, target: 25 },
//       { month: 'Feb', actual: 30, predicted: 25, target: 50 },
//       { month: 'Mar', actual: 40, predicted: 35, target: 75 },
//       { month: 'Apr', actual: 45, predicted: 40, target: 100 },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Mayo Clinic',
//     location: 'Rochester, MN',
//     status: 'Active',
//     startDate: '2025-01-10',
//     expectedEndDate: '2025-12-31',
//     principalInvestigator: 'Dr. Michael Roberts',
//     contact: {
//       coordinatorName: 'James Thompson',
//       coordinatorPhone: '(507) 555-0124',
//       coordinatorEmail: 'j.thompson@mayo.edu',
//       address: '200 First Street SW, Rochester, MN 55905',
//     },
//     metrics: {
//       retentionRate: 95,
//       screeningRate: 90,
//       protocolAdherence: 98,
//       dataQualityScore: 95,
//     },
//     regulatory: {
//       irbRenewalDue: '2025-11-15',
//       lastAuditDate: '2024-11-01',
//       auditFindings: 0,
//       gcpExpiration: '2025-07-31',
//     },
//     safety: {
//       adverseEvents: 1,
//       seriousAdverseEvents: 0,
//       protocolDeviations: {
//         total: 2,
//         major: 0,
//         minor: 2,
//       },
//     },
//     patientProgress: {
//       screening: 70,
//       active: 50,
//       completed: 5,
//       discontinued: 5,
//       failedScreening: 20,
//     },
//     demographics: {
//       ageGroups: [
//         { name: '18-30', value: 12 },
//         { name: '31-45', value: 14 },
//         { name: '46-60', value: 18 },
//         { name: '60+', value: 10 },
//       ],
//       gender: [
//         { name: 'Male', value: 30 },
//         { name: 'Female', value: 24 },
//       ],
//     },
//     monthlyEnrollment: [
//       { month: 'Jan', enrolled: 20, target: 15 },
//       { month: 'Feb', enrolled: 15, target: 15 },
//       { month: 'Mar', enrolled: 10, target: 15 },
//       { month: 'Apr', enrolled: 5, target: 15 },
//       { month: 'May', enrolled: 0, target: 15 },
//     ],
//     patientVisits: [
//       { visit: 'Screening', patients: 80 },
//       { visit: 'Visit 1', patients: 60 },
//       { visit: 'Visit 2', patients: 50 },
//       { visit: 'Visit 3', patients: 40 },
//       { visit: 'Visit 4', patients: 30 },
//       { visit: 'End of Study', patients: 20 },
//     ],
//     predictionAnalysis: [
//       { month: 'Jan', actual: 20, predicted: 15, target: 25 },
//       { month: 'Feb', actual: 30, predicted: 25, target: 50 },
//       { month: 'Mar', actual: 40, predicted: 35, target: 75 },
//       { month: 'Apr', actual: 45, predicted: 40, target: 100 },
//     ],
//   },


// ];

// const SiteDetailView = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const site = sitesData.find((site) => site.id === parseInt(id));

//   if (!site) {
//     return <div>Site not found!</div>;
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/sites')}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         <ChevronLeft className="w-4 h-4 mr-2" />
//         Back to Sites
//       </button>

//       {/* Header */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-3xl font-bold">{site.name}</h1>
//             <div className="flex items-center text-gray-600 mt-2">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{site.location}</span>
//             </div>
//           </div>
//           <span
//             className={`px-3 py-1 rounded-full text-sm ${
//               site.status === 'Active'
//                 ? 'bg-green-100 text-green-800'
//                 : 'bg-yellow-100 text-yellow-800'
//             }`}
//           >
//             {site.status}
//           </span>
//         </div>
//       </div>

//       {/* Patient Enrollment Overview */}
//       <div className="grid grid-cols-3 gap-6 mb-8">
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Total Screened</p>
//           <h2 className="text-2xl font-bold">{site.patientProgress.screening}</h2>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Currently Active</p>
//           <h2 className="text-2xl font-bold">{site.patientProgress.active}</h2>
//         </div>
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Completed</p>
//           <h2 className="text-2xl font-bold">{site.patientProgress.completed}</h2>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-2 gap-6 mb-8">
//         {/* Patient Status Distribution */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Patient Status Distribution</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={[
//                   { name: 'Active', value: site.patientProgress.active },
//                   { name: 'Completed', value: site.patientProgress.completed },
//                   { name: 'Discontinued', value: site.patientProgress.discontinued },
//                   { name: 'Failed Screening', value: site.patientProgress.failedScreening },
//                 ]}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={60}
//                 outerRadius={80}
//                 paddingAngle={5}
//                 dataKey="value"
//               >
//                 {COLORS.map((color, index) => (
//                   <Cell key={`cell-${index}`} fill={color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Monthly Enrollment Progress */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Monthly Enrollment Progress</h3>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={site.monthlyEnrollment}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="enrolled" fill="#8884d8" />
//               <Bar dataKey="target" fill="#82ca9d" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Patient Demographics */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Patient Demographics</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h4 className="text-sm font-semibold mb-2">Age Distribution</h4>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={site.demographics.ageGroups}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={60}
//                   dataKey="value"
//                   label
//                 >
//                   {site.demographics.ageGroups.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold mb-2">Gender Distribution</h4>
//             <ResponsiveContainer width="100%" height={200}>
//               <PieChart>
//                 <Pie
//                   data={site.demographics.gender}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={60}
//                   dataKey="value"
//                   label
//                 >
//                   {site.demographics.gender.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//       {/* Patients by Visit Graph */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Patients by Visit</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={site.patientVisits}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="visit" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="patients"
//               stroke="#8884d8"
//               activeDot={{ r: 8 }}
//               name="Number of Patients"
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Prediction Analysis Graph */}
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         <h3 className="font-semibold text-lg mb-4">Study Completion Prediction</h3>
//         <p className="text-gray-600 mb-4">Target: 100 patients by December 2025</p>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={site.predictionAnalysis}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line
//               type="monotone"
//               dataKey="actual"
//               stroke="#0088FE"
//               activeDot={{ r: 8 }}
//               name="Actual Enrollment"
//             />
//             <Line
//               type="monotone"
//               dataKey="predicted"
//               stroke="#FF8042"
//               name="Predicted Enrollment"
//             />
//             <Line
//               type="monotone"
//               dataKey="target"
//               stroke="#FFBB28"
//               name="Expected Target"
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Additional Information */}
//       <div className="grid grid-cols-2 gap-6">
//         {/* Key Information */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Key Information</h3>
//           <p>Start Date: {site.startDate}</p>
//           <p>Expected End Date: {site.expectedEndDate}</p>
//           <p>PI: {site.principalInvestigator}</p>
//         </div>

//         {/* Contact Information */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
//           <p>Coordinator: {site.contact.coordinatorName}</p>
//           <p>Email: {site.contact.coordinatorEmail}</p>
//           <p>Phone: {site.contact.coordinatorPhone}</p>
//           <p>Address: {site.contact.address}</p>
//         </div>

//         {/* Performance Metrics */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Performance Metrics</h3>
//           <p>Retention Rate: {site.metrics.retentionRate}%</p>
//           <p>Screening Rate: {site.metrics.screeningRate}%</p>
//           <p>Protocol Adherence: {site.metrics.protocolAdherence}%</p>
//           <p>Data Quality Score: {site.metrics.dataQualityScore}%</p>
//         </div>

//         {/* Regulatory Status */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Regulatory Status</h3>
//           <p>IRB Renewal Due: {site.regulatory.irbRenewalDue}</p>
//           <p>Last Audit Date: {site.regulatory.lastAuditDate}</p>
//           <p>Audit Findings: {site.regulatory.auditFindings}</p>
//           <p>GCP Expiration: {site.regulatory.gcpExpiration}</p>
//         </div>

//         {/* Safety Monitoring */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Safety Monitoring</h3>
//           <p>Total Adverse Events: {site.safety.adverseEvents}</p>
//           <p>Serious Adverse Events: {site.safety.seriousAdverseEvents}</p>
//           <p>Protocol Deviations: {site.safety.protocolDeviations.total}</p>
//           <p>Major Deviations: {site.safety.protocolDeviations.major}</p>
//           <p>Minor Deviations: {site.safety.protocolDeviations.minor}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SiteDetailView;






///-----------To be final--------------------------------------------------------------------------------------------



// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   MapPin,
//   ChevronLeft,
// } from 'lucide-react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const sitesData = [
//   {
//     id: 1,
//     name: 'Boston Medical Center',
//     location: 'Boston, MA',
//     status: 'Active',
//     startDate: '2025-01-15',
//     expectedEndDate: '2025-12-31',
//     enrolled: 45,
//     capacity: 50,
//     principalInvestigator: 'Dr. Emily Chen',
//     contact: {
//       coordinatorName: 'Sarah Williams',
//       coordinatorPhone: '(617) 555-0124',
//       coordinatorEmail: 's.williams@bmc.com',
//       address: '88 East Newton Street, Boston, MA 02118',
//     },
//     metrics: {
//       retentionRate: 92,
//       screeningRate: 85,
//       protocolAdherence: 97,
//       dataQualityScore: 92,
//     },
//     demographics: {
//       ageGroups: [
//         { name: '18-30', value: 10 },
//         { name: '31-45', value: 15 },
//         { name: '46-60', value: 12 },
//         { name: '60+', value: 8 },
//       ],
//       gender: [
//         { name: 'Male', value: 24 },
//         { name: 'Female', value: 21 },
//       ],
//     },
//     patientVisits: [
//       { visit: 'Screening', patients: 80 },
//       { visit: 'Visit 1', patients: 60 },
//       { visit: 'Visit 2', patients: 50 },
//       { visit: 'Visit 3', patients: 40 },
//       { visit: 'Visit 4', patients: 30 },
//       { visit: 'End of Study', patients: 20 },
//     ],
//     predictionAnalysis: [
//       { month: 'Jan', actual: 20, predicted: 15, target: 25 },
//       { month: 'Feb', actual: 30, predicted: 25, target: 50 },
//       { month: 'Mar', actual: 40, predicted: 35, target: 75 },
//       { month: 'Apr', actual: 45, predicted: 40, target: 100 },
//     ],
//   },
// ];

// const SiteDetailView = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const site = sitesData.find((site) => site.id === parseInt(id));

//   if (!site) {
//     return <div>Site not found!</div>;
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/sites')}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         <ChevronLeft className="w-4 h-4 mr-2" />
//         Back to Sites
//       </button>

//       {/* Header */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-3xl font-bold">{site.name}</h1>
//             <div className="flex items-center text-gray-600 mt-2">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{site.location}</span>
//             </div>
//           </div>
//           <span
//             className={`px-3 py-1 rounded-full text-sm ${
//               site.status === 'Active'
//                 ? 'bg-green-100 text-green-800'
//                 : 'bg-yellow-100 text-yellow-800'
//             }`}
//           >
//             {site.status}
//           </span>
//         </div>
//       </div>

//       {/* Patient Enrollment Overview */}
//       <div className="grid grid-cols-3 gap-6 mb-8">
//         <div>
//           <p className="text-sm text-gray-600">Total Screened</p>
//           <h2 className="text-2xl font-bold">{site.enrolled}</h2>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">Currently Active</p>
//           <h2 className="text-2xl font-bold">{site.metrics.retentionRate}%</h2>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">Capacity</p>
//           <h2 className="text-2xl font-bold">{site.capacity}</h2>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">First Patient Enrolled</p>
//           <h2 className="text-2xl font-bold">{site.startDate}</h2>
//         </div>
//         <div>
//           <p className="text-sm text-gray-600">Last Patient Enrolled</p>
//           <h2 className="text-2xl font-bold">{site.expectedEndDate}</h2>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-2 gap-6 mb-8">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Patient Demographics</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={site.demographics.gender}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 dataKey="value"
//                 label
//               >
//                 {site.demographics.gender.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Add Patients by Visit Graph */}
//         <div className="bg-white shadow rounded-lg p-6 mb-8">
//           <h3 className="font-semibold text-lg mb-4">Patients by Visit</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={site.patientVisits}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="visit" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="patients"
//                 stroke="#8884d8"
//                 activeDot={{ r: 8 }}
//                 name="Number of Patients"
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Add Prediction Analysis Graph */}
//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Prediction Analysis</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <LineChart data={site.predictionAnalysis}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="actual" stroke="#0088FE" name="Actual" />
//               <Line type="monotone" dataKey="predicted" stroke="#FF8042" name="Predicted" />
//               <Line type="monotone" dataKey="target" stroke="#FFBB28" name="Target" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Additional Information */}
//       <div className="grid grid-cols-2 gap-6">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Key Information</h3>
//           <p>Start Date: {site.startDate}</p>
//           <p>Expected End Date: {site.expectedEndDate}</p>
//           <p>PI: {site.principalInvestigator}</p>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
//           <p>Coordinator: {site.contact.coordinatorName}</p>
//           <p>Email: {site.contact.coordinatorEmail}</p>
//           <p>Phone: {site.contact.coordinatorPhone}</p>
//           <p>Address: {site.contact.address}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SiteDetailView;




//=================================================================================================================================

//------------------------------------FINAL-----------------------------------------------------------------------------

//=================================================================================================================================

// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import {
//   MapPin,
//   ChevronLeft,
// } from 'lucide-react';
// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
// } from 'recharts';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const sitesData = [
//   {
//     id: 1,
//     name: 'Boston Medical Center',
//     location: 'Boston, MA',
//     status: 'Active',
//     enrolled: 45,
//     capacity: 50,
//     active:41,
//     dropout:4,
//     startDate: '2025-01-15',
//     expectedEndDate: '2025-12-31',
//     principalInvestigator: 'Dr. Emily Chen',
//     contact: {
//       coordinatorName: 'Sarah Williams',
//       coordinatorPhone: '(617) 555-0124',
//       coordinatorEmail: 's.williams@bmc.com',
//       address: '88 East Newton Street, Boston, MA 02118',
//     },
//     metrics: {
//       retentionRate: 92,
//       screeningRate: 85,
//       protocolAdherence: 97,
//       dataQualityScore: 92,
//     },
//     regulatory: {
//       irbRenewalDue: '2025-12-01',
//       lastAuditDate: '2024-11-15',
//       auditFindings: 0,
//       gcpExpiration: '2025-06-30',
//     },
//     safety: {
//       adverseEvents: 2,
//       seriousAdverseEvents: 0,
//       protocolDeviations: {
//         total: 3,
//         major: 1,
//         minor: 2,
//       },
//     },
//     demographics: {
//       ageGroups: [
//         { name: '18-30', value: 10 },
//         { name: '31-45', value: 15 },
//         { name: '46-60', value: 12 },
//         { name: '60+', value: 8 },
//       ],
//       gender: [
//         { name: 'Male', value: 24 },
//         { name: 'Female', value: 21 },
//       ],
//     },
//     monthlyEnrollment: [
//       { month: 'Jan', enrolled: 15, target: 12 },
//       { month: 'Feb', enrolled: 12, target: 12 },
//       { month: 'Mar', enrolled: 10, target: 12 },
//       { month: 'Apr', enrolled: 8, target: 12 },
//       { month: 'May', enrolled: 0, target: 12 },
//     ],
//     patientStatusDistribution: [
//       { name: 'Active', value: 42 },
//       { name: 'Completed', value: 3 },
//       { name: 'Discontinued', value: 3 },
//       { name: 'Failed Screening', value: 20 },
//     ],
//     patientVisits: [
//       { visit: 'Screening', patients: 80 },
//       { visit: 'Visit 1', patients: 60 },
//       { visit: 'Visit 2', patients: 50 },
//       { visit: 'Visit 3', patients: 40 },
//       { visit: 'Visit 4', patients: 30 },
//       { visit: 'End of Study', patients: 20 },
//     ],
//     predictionAnalysis: [
//       { month: 'Jan', actual: 20, predicted: 15, target: 25 },
//       { month: 'Feb', actual: 30, predicted: 25, target: 50 },
//       { month: 'Mar', actual: 40, predicted: 35, target: 75 },
//       { month: 'Apr', actual: 45, predicted: 40, target: 100 },
//     ],
//   },

//   {
//     "id": 2,
//     "name": "Mayo Clinic Research Center",
//     "location": "Rochester, MN",
//     "status": "Active",
//     "enrolled": 48,
//     "capacity": 55,
//     "startDate": "2025-01-01",
//     "expectedEndDate": "2025-12-31",
//     "principalInvestigator": "Dr. John Smith",
//     "contact": {
//         "coordinatorName": "Rachel Green",
//         "coordinatorPhone": "(507) 555-0198",
//         "coordinatorEmail": "r.green@mayo.edu",
//         "address": "200 1st Street SW, Rochester, MN 55905"
//     },
//     "metrics": {
//         "retentionRate": 88,
//         "screeningRate": 78,
//         "protocolAdherence": 95,
//         "dataQualityScore": 90
//     },
//     "regulatory": {
//         "irbRenewalDue": "2025-11-15",
//         "lastAuditDate": "2024-10-10",
//         "auditFindings": 1,
//         "gcpExpiration": "2025-07-31"
//     },
//     "safety": {
//         "adverseEvents": 3,
//         "seriousAdverseEvents": 1,
//         "protocolDeviations": {
//             "total": 2,
//             "major": 1,
//             "minor": 1
//         }
//     },
//     "demographics": {
//         "ageGroups": [
//             { "name": "18-30", "value": 12 },
//             { "name": "31-45", "value": 18 },
//             { "name": "46-60", "value": 10 },
//             { "name": "60+", "value": 8 }
//         ],
//         "gender": [
//             { "name": "Male", "value": 26 },
//             { "name": "Female", "value": 22 }
//         ]
//     },
//     "monthlyEnrollment": [
//         { "month": "Jan", "enrolled": 18, "target": 15 },
//         { "month": "Feb", "enrolled": 12, "target": 15 },
//         { "month": "Mar", "enrolled": 10, "target": 15 },
//         { "month": "Apr", "enrolled": 8, "target": 15 },
//         { "month": "May", "enrolled": 0, "target": 15 }
//     ],
//     "patientStatusDistribution": [
//         { "name": "Active", "value": 46 },
//         { "name": "Completed", "value": 2 },
//         { "name": "Discontinued", "value": 4 },
//         { "name": "Failed Screening", "value": 22 }
//     ],
//     "patientVisits": [
//         { "visit": "Screening", "patients": 85 },
//         { "visit": "Visit 1", "patients": 65 },
//         { "visit": "Visit 2", "patients": 50 },
//         { "visit": "Visit 3", "patients": 40 },
//         { "visit": "Visit 4", "patients": 25 },
//         { "visit": "End of Study", "patients": 15 }
//     ],
//     "predictionAnalysis": [
//         { "month": "Jan", "actual": 20, "predicted": 18, "target": 25 },
//         { "month": "Feb", "actual": 30, "predicted": 25, "target": 50 },
//         { "month": "Mar", "actual": 40, "predicted": 35, "target": 75 },
//         { "month": "Apr", "actual": 45, "predicted": 40, "target": 100 }
//     ]
//   }

// ];

// const SiteDetailView = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const site = sitesData.find((site) => site.id === parseInt(id));

//   if (!site) {
//     return <div>Site not found!</div>;
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate('/sites')}
//         className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
//       >
//         <ChevronLeft className="w-4 h-4 mr-2" />
//         Back to Sites
//       </button>

//       {/* Header */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <div className="flex justify-between items-start">
//           <div>
//             <h1 className="text-3xl font-bold">{site.name}</h1>
//             <div className="flex items-center text-gray-600 mt-2">
//               <MapPin className="w-4 h-4 mr-1" />
//               <span>{site.location}</span>
//             </div>
//           </div>
//           <span
//             className={`px-3 py-1 rounded-full text-sm ${
//               site.status === 'Active'
//                 ? 'bg-green-100 text-green-800'
//                 : 'bg-yellow-100 text-yellow-800'
//             }`}
//           >
//             {site.status}
//           </span>
//         </div>
//       </div>
//       {/* Patient Enrollment Overview */}
//       <div className="grid grid-cols-3 gap-6 mb-8">
//         {/* Total Screened Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Total Screened</p>
//           <h2 className="text-2xl font-bold">{site.enrolled}</h2>
//         </div>
        
//         {/* Currently Active Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Currently Active</p>
//           <h2 className="text-2xl font-bold">{site.active}</h2>
//         </div>
        
//         {/* Capacity Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Capacity</p>
//           <h2 className="text-2xl font-bold">{site.capacity}</h2>
//         </div>
        
//         {/* First Patient Enrolled Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">First Patient Enrolled</p>
//           <h2 className="text-2xl font-bold">{site.startDate}</h2>
//         </div>
        
//         {/* Last Patient Enrolled Card */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <p className="text-sm text-gray-600">Last Patient Enrolled</p>
//           <h2 className="text-2xl font-bold">{site.expectedEndDate}</h2>
//         </div>

//         {/* Dropout */}
//         <div className="bg-white shadow-lg rounded-lg p-6 relative cursor-pointer"
//           onClick={() => navigate(`/sites/${id}/dropout`)}
//         >
//           {/* Row with Dropout and AI */}
//           <div className="flex justify-between items-center mb-4">
//             <p className="text-sm text-gray-600">Dropout</p>
//             <div className="flex items-center space-x-1 text-blue-600 font-semibold">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//               <span>AI</span>
//             </div>
//           </div>

//           {/* Main Metric */}
//           <h2 className="text-2xl font-bold">{site.dropout}</h2>
//         </div>

//       </div>


//       {/* Monthly Enrollment */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Monthly Enrollment Progress</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={site.monthlyEnrollment}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="enrolled" fill="#8884d8" name="Enrolled" />
//             <Bar dataKey="target" fill="#82ca9d" name="Target" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Patient Status Distribution */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Patient Status Distribution</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={site.patientStatusDistribution}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               dataKey="value"
//               label
//             >
//               {site.patientStatusDistribution.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Patient Demographics */}
//       <div className="grid grid-cols-2 gap-6 mb-8">
//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Age Distribution</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={site.demographics.ageGroups}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 dataKey="value"
//                 label
//               >
//                 {site.demographics.ageGroups.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         <div className="bg-white shadow rounded-lg p-6">
//           <h3 className="font-semibold text-lg mb-4">Gender Distribution</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={site.demographics.gender}
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={80}
//                 dataKey="value"
//                 label
//               >
//                 {site.demographics.gender.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Patients by Visit */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Patients by Visit</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={site.patientVisits}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="visit" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="patients" stroke="#8884d8" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Prediction Analysis */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h3 className="font-semibold text-lg mb-4">Prediction Analysis</h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={site.predictionAnalysis}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="actual" stroke="#0088FE" />
//             <Line type="monotone" dataKey="predicted" stroke="#FF8042" />
//             <Line type="monotone" dataKey="target" stroke="#FFBB28" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//       <div className="grid grid-cols-2 gap-6">
//          {/* Key Information */}
//          <div className="bg-white shadow-lg rounded-lg p-6">
//            <h3 className="font-semibold text-lg mb-4">Key Information</h3>
//            <p>Start Date: {site.startDate}</p>
//            <p>Expected End Date: {site.expectedEndDate}</p>
//            <p>PI: {site.principalInvestigator}</p>
//          </div>

//          {/* Contact Information */}
//          <div className="bg-white shadow-lg rounded-lg p-6">
//            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
//            <p>Coordinator: {site.contact.coordinatorName}</p>
//            <p>Email: {site.contact.coordinatorEmail}</p>
//            <p>Phone: {site.contact.coordinatorPhone}</p>
//            <p>Address: {site.contact.address}</p>
//          </div>

//          {/* Performance Metrics */}
//          <div className="bg-white shadow-lg rounded-lg p-6">
//            <h3 className="font-semibold text-lg mb-4">Performance Metrics</h3>
//            <p>Retention Rate: {site.metrics.retentionRate}%</p>
//            <p>Screening Rate: {site.metrics.screeningRate}%</p>
//            <p>Protocol Adherence: {site.metrics.protocolAdherence}%</p>
//            <p>Data Quality Score: {site.metrics.dataQualityScore}%</p>
//          </div>

//          {/* Regulatory Status */}
//          <div className="bg-white shadow-lg rounded-lg p-6">
//            <h3 className="font-semibold text-lg mb-4">Regulatory Status</h3>
//            <p>IRB Renewal Due: {site.regulatory.irbRenewalDue}</p>
//            <p>Last Audit Date: {site.regulatory.lastAuditDate}</p>
//            <p>Audit Findings: {site.regulatory.auditFindings}</p>
//            <p>GCP Expiration: {site.regulatory.gcpExpiration}</p>
//          </div>
//       </div>
//     </div>
//   );
// };

// export default SiteDetailView;


//=================================================================================================================================



import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  MapPin,
  ChevronLeft,
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const sitesData = [
  {
    id: 1,
    name: 'Boston Medical Center',
    location: 'Boston, MA',
    status: 'Active',
    enrolled: 45,
    capacity: 50,
    active: 41,
    dropout: 4,
    startDate: '2025-01-15',
    expectedEndDate: '2025-12-31',
    principalInvestigator: 'Dr. Emily Chen',
    contact: {
      coordinatorName: 'Sarah Williams',
      coordinatorPhone: '(617) 555-0124',
      coordinatorEmail: 's.williams@bmc.com',
      address: '88 East Newton Street, Boston, MA 02118',
    },
    metrics: {
      retentionRate: 92,
      screeningRate: 85,
      protocolAdherence: 97,
      dataQualityScore: 92,
    },
    regulatory: {
      irbRenewalDue: '2025-12-01',
      lastAuditDate: '2024-11-15',
      auditFindings: 0,
      gcpExpiration: '2025-06-30',
    },
    demographics: {
      ageGroups: [
        { name: '18-30', value: 10 },
        { name: '31-45', value: 15 },
        { name: '46-60', value: 12 },
        { name: '60+', value: 8 },
      ],
      gender: [
        { name: 'Male', value: 24 },
        { name: 'Female', value: 21 },
      ],
    },
    monthlyEnrollment: [
      { month: 'Jan', enrolled: 15, target: 12 },
      { month: 'Feb', enrolled: 12, target: 12 },
      { month: 'Mar', enrolled: 10, target: 12 },
      { month: 'Apr', enrolled: 8, target: 12 },
      { month: 'May', enrolled: 0, target: 12 },
    ],
    patientStatusDistribution: [
      { name: 'Active', value: 42 },
      { name: 'Completed', value: 3 },
      { name: 'Discontinued', value: 3 },
      { name: 'Failed Screening', value: 20 },
    ],
    patientVisits: [
      { visit: 'Screening', patients: 80 },
      { visit: 'Visit 1', patients: 60 },
      { visit: 'Visit 2', patients: 50 },
      { visit: 'Visit 3', patients: 40 },
      { visit: 'Visit 4', patients: 30 },
      { visit: 'End of Study', patients: 20 },
    ],
    predictionAnalysis: [
      { month: 'Jan', actual: 20, predicted: 15, target: 25 },
      { month: 'Feb', actual: 30, predicted: 25, target: 50 },
      { month: 'Mar', actual: 40, predicted: 35, target: 75 },
      { month: 'Apr', actual: 45, predicted: 40, target: 100 },
    ],
  },
];

const SiteDetailView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const site = sitesData.find((site) => site.id === parseInt(id));

  if (!site) {
    return <div>Site not found!</div>;
  }

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/sites')}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-700"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to Sites
      </button>

      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{site.name}</h1>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{site.location}</span>
            </div>
          </div>
          <span
            className={`mt-4 md:mt-0 px-3 py-1 rounded-full text-sm ${
              site.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {site.status}
          </span>
        </div>
      </div>

      {/* Patient Enrollment Overview */}
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {[
          { label: 'Total Screened', value: site.enrolled },
          { label: 'Currently Active', value: site.active },
          { label: 'Capacity', value: site.capacity },
          { label: 'First Patient Enrolled', value: site.startDate },
          { label: 'Last Patient Enrolled', value: site.expectedEndDate },
        ].map((card, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-4 md:p-6">
            <p className="text-sm text-gray-600">{card.label}</p>
            <h2 className="text-2xl font-bold">{card.value}</h2>
          </div>
        ))}

        {/* Dropout with onClick action */}
        <div
          className="bg-white shadow rounded-lg p-4 md:p-6 relative cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => navigate(`/sites/${id}/dropout`)}
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">Dropout</p>
            <div className="flex items-center space-x-1 text-blue-600 font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>AI</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">{site.dropout}</h2>
        </div>
      </div>
      {/* Patient Status Distribution */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Patient Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={site.patientStatusDistribution}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {site.patientStatusDistribution.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Age Groups</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={site.demographics.ageGroups} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
                {site.demographics.ageGroups.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={site.demographics.gender} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
                {site.demographics.gender.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Patients by Visit */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Patients by Visit</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={site.patientVisits}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="visit" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="patients" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Prediction Analysis */}
      <div className="bg-white shadow rounded-lg p-4 md:p-6 mb-8">
        <h3 className="font-semibold text-lg mb-4">Prediction Analysis</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={site.predictionAnalysis}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#0088FE" />
            <Line type="monotone" dataKey="predicted" stroke="#FF8042" />
            <Line type="monotone" dataKey="target" stroke="#FFBB28" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Key Information */}
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Key Information</h3>
          <p>Start Date: {site.startDate}</p>
          <p>Expected End Date: {site.expectedEndDate}</p>
          <p>PI: {site.principalInvestigator}</p>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
          <p>Coordinator: {site.contact.coordinatorName}</p>
          <p>Email: {site.contact.coordinatorEmail}</p>
          <p>Phone: {site.contact.coordinatorPhone}</p>
          <p>Address: {site.contact.address}</p>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Performance Metrics</h3>
          <p>Retention Rate: {site.metrics.retentionRate}%</p>
          <p>Screening Rate: {site.metrics.screeningRate}%</p>
          <p>Protocol Adherence: {site.metrics.protocolAdherence}%</p>
          <p>Data Quality Score: {site.metrics.dataQualityScore}%</p>
        </div>

        {/* Regulatory Status */}
        <div className="bg-white shadow rounded-lg p-4 md:p-6">
          <h3 className="font-semibold text-lg mb-4">Regulatory Status</h3>
          <p>IRB Renewal Due: {site.regulatory.irbRenewalDue}</p>
          <p>Last Audit Date: {site.regulatory.lastAuditDate}</p>
          <p>Audit Findings: {site.regulatory.auditFindings}</p>
          <p>GCP Expiration: {site.regulatory.gcpExpiration}</p>
        </div>
      </div>
    </div>
  );
};

export default SiteDetailView;
