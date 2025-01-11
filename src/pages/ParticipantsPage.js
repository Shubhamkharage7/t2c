// import React, { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Clock, Users, DollarSign, Target, Phone, Calendar, PhoneOff, PhoneForwarded } from 'lucide-react';

// // AI Agent Dashboard Component
// const AIAgentDashboard = () => {
//   const dailyCallData = [
//     { day: 'Mon', calls: 45, duration: 180, scheduled: 8, missed: 4, wrong: 2 },
//     { day: 'Tue', calls: 52, duration: 195, scheduled: 10, missed: 3, wrong: 2 },
//     { day: 'Wed', calls: 48, duration: 185, scheduled: 9, missed: 3, wrong: 1 },
//     { day: 'Thu', calls: 55, duration: 210, scheduled: 12, missed: 2, wrong: 2 },
//     { day: 'Fri', calls: 50, duration: 190, scheduled: 9, missed: 4, wrong: 1 }
//   ];

//   const MetricCard = ({ icon: Icon, title, value, subvalue, color = "blue" }) => (
//     <Card>
//       <CardHeader className="flex flex-row items-center justify-between pb-2">
//         <CardTitle className="text-sm font-medium">{title}</CardTitle>
//         <Icon className="h-4 w-4 text-blue-500" />
//       </CardHeader>
//       <CardContent>
//         <div className="text-2xl font-bold">{value}</div>
//         {subvalue && <p className="text-xs text-gray-500 mt-1">{subvalue}</p>}
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div className="p-6 space-y-6">
//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <MetricCard 
//           icon={Users}
//           title="Subjects Recruited"
//           value="90"
//           subvalue="Target: 90"
//         />
//         <MetricCard 
//           icon={Phone}
//           title="Today's Calls"
//           value="50"
//           subvalue="92% connection rate"
//         />
//         <MetricCard 
//           icon={Calendar}
//           title="Upcoming Reminders"
//           value="15"
//           subvalue="Next 48 hours"
//         />
//         <MetricCard 
//           icon={Clock}
//           title="Avg Call Duration"
//           value="3m 45s"
//           subvalue="Total: 16.0 hours"
//         />
//       </div>

//       <Card className="mb-6">
//         <CardHeader>
//           <CardTitle>Recruitment Progress</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <div className="flex justify-between text-sm">
//               <span>Current Progress: 90/90 subjects</span>
//               <span className="font-medium">100%</span>
//             </div>
//             <Progress value={100} className="h-2" />
//             <p className="text-sm text-gray-500 mt-2">
//               Target achieved: Completed in 3.5 weeks
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Daily Call Statistics</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={dailyCallData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="day" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="calls" fill="#3b82f6" name="Total Calls" />
//                   <Bar dataKey="scheduled" fill="#22c55e" name="Scheduled" />
//                   <Bar dataKey="missed" fill="#ef4444" name="Missed" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Call Duration Trends</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-64">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={dailyCallData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="day" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line 
//                     type="monotone" 
//                     dataKey="duration" 
//                     stroke="#3b82f6" 
//                     name="Minutes"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-sm">Call Outcomes</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Connected</span>
//                 <span className="font-medium">230</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Missed</span>
//                 <span className="font-medium">16</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Wrong Number</span>
//                 <span className="font-medium">8</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-sm">Recruitment Prediction</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Final Rate</span>
//                 <span className="font-medium">25.7/week</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Time to Complete</span>
//                 <span className="font-medium">3.5 weeks</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Success Rate</span>
//                 <span className="font-medium">98%</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle className="text-sm">Time Analytics</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Avg Call Time</span>
//                 <span className="font-medium">3m 45s</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Peak Hours</span>
//                 <span className="font-medium">10AM - 2PM</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-sm text-gray-500">Total Talk Time</span>
//                 <span className="font-medium">16.0 hrs</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Main Dashboard Component
// const Dashboard = () => {
//   const [showAIDetails, setShowAIDetails] = useState(false);

//   const traditionalData = {
//     subjects: 210,
//     timeframe: 8,
//     costPerSubject: 750,
//     totalCost: 157500,
//     targetAccuracy: 75
//   };

//   const aiData = {
//     subjects: 90,
//     timeframe: 3.5,
//     costPerSubject: 420,
//     totalCost: 37800,
//     targetAccuracy: 98
//   };

//   const comparisonData = [
//     {
//       metric: 'Time to Recruit (weeks)',
//       Traditional: traditionalData.timeframe,
//       AI: aiData.timeframe
//     },
//     {
//       metric: 'Cost per Subject ($)',
//       Traditional: traditionalData.costPerSubject,
//       AI: aiData.costPerSubject
//     },
//     {
//       metric: 'Total Cost ($)',
//       Traditional: traditionalData.totalCost,
//       AI: aiData.totalCost
//     }
//   ];

//   const MetricCard = ({ icon: Icon, title, traditional, ai, unit = '' }) => (
//     <div className="grid grid-cols-2 gap-4 mb-6">
//       <Card className="bg-white">
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <CardTitle className="text-sm font-medium text-gray-600">Traditional</CardTitle>
//           <Icon className="h-4 w-4 text-gray-500" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">{traditional}{unit}</div>
//         </CardContent>
//       </Card>
//       <Card 
//         className="bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors"
//         onClick={() => setShowAIDetails(true)}
//       >
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <CardTitle className="text-sm font-medium text-blue-600">AI-Assisted</CardTitle>
//           <Icon className="h-4 w-4 text-blue-500" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold text-blue-600">{ai}{unit}</div>
//         </CardContent>
//       </Card>
//     </div>
//   );

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold mb-2">PTC Therapeutics Clinical Trial Dashboard</h1>
//         <p className="text-gray-600">Recruitment Progress Comparison</p>
//       </div>

//       <div className="grid grid-cols-1 gap-6">
//         <div className="space-y-6">
//           <MetricCard 
//             icon={Users}
//             title="Subjects Recruited"
//             traditional={traditionalData.subjects}
//             ai={aiData.subjects}
//           />
          
//           <MetricCard 
//             icon={Clock}
//             title="Recruitment Timeframe"
//             traditional={traditionalData.timeframe}
//             ai={aiData.timeframe}
//             unit=" weeks"
//           />

//           <MetricCard 
//             icon={DollarSign}
//             title="Cost per Subject"
//             traditional={traditionalData.costPerSubject}
//             ai={aiData.costPerSubject}
//             unit="$/subject"
//           />

//           <MetricCard 
//             icon={Target}
//             title="Target Accuracy"
//             traditional={traditionalData.targetAccuracy}
//             ai={aiData.targetAccuracy}
//             unit="%"
//           />
//         </div>

//         <Card className="mt-6">
//           <CardHeader>
//             <CardTitle>Recruitment Metrics Comparison</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-96">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart
//                   data={comparisonData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="metric" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Traditional" fill="#94a3b8" />
//                   <Bar dataKey="AI" fill="#3b82f6" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <Dialog open={showAIDetails} onOpenChange={setShowAIDetails}>
//         <DialogContent className="max-w-7xl h-[90vh] overflow-y-auto">
//           <DialogHeader>
//             <DialogTitle>AI Agent Performance Details</DialogTitle>
//           </DialogHeader>
//           <AIAgentDashboard />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Users, Phone, Calendar, Clock } from "lucide-react";

// const ParticipantsPage = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   // Mock data for daily call statistics
//   const dailyCallData = [
//     { day: "Mon", calls: 45, duration: 180, scheduled: 8, missed: 4 },
//     { day: "Tue", calls: 52, duration: 195, scheduled: 10, missed: 3 },
//     { day: "Wed", calls: 48, duration: 185, scheduled: 9, missed: 3 },
//     { day: "Thu", calls: 55, duration: 210, scheduled: 12, missed: 2 },
//     { day: "Fri", calls: 50, duration: 190, scheduled: 9, missed: 4 },
//   ];

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       {/* Page Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-2xl font-bold">Participants Dashboard</h1>
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           onClick={() => setModalOpen(true)}
//         >
//           View AI Details
//         </button>
//       </div>

//       {/* Metrics Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white shadow rounded-lg p-6">
//           <Users className="text-blue-600 w-6 h-6 mb-4" />
//           <p className="text-gray-600 text-sm">Subjects Recruited</p>
//           <h2 className="text-2xl font-bold">90</h2>
//           <p className="text-gray-500 text-sm">Target: 90</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6">
//           <Phone className="text-green-600 w-6 h-6 mb-4" />
//           <p className="text-gray-600 text-sm">Today's Calls</p>
//           <h2 className="text-2xl font-bold">50</h2>
//           <p className="text-gray-500 text-sm">92% connection rate</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6">
//           <Calendar className="text-yellow-600 w-6 h-6 mb-4" />
//           <p className="text-gray-600 text-sm">Upcoming Reminders</p>
//           <h2 className="text-2xl font-bold">15</h2>
//           <p className="text-gray-500 text-sm">Next 48 hours</p>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6">
//           <Clock className="text-purple-600 w-6 h-6 mb-4" />
//           <p className="text-gray-600 text-sm">Avg Call Duration</p>
//           <h2 className="text-2xl font-bold">3m 45s</h2>
//           <p className="text-gray-500 text-sm">Total: 16 hours</p>
//         </div>
//       </div>

//       {/* Recruitment Progress Section */}
//       <div className="bg-white shadow rounded-lg p-6 mb-8">
//         <h3 className="text-lg font-bold mb-4">Recruitment Progress</h3>
//         <div className="flex justify-between items-center text-sm mb-2">
//           <span>Current Progress: 90/90 subjects</span>
//           <span className="font-medium">100%</span>
//         </div>
//         <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-green-600"
//             style={{ width: "100%" }}
//           ></div>
//         </div>
//         <p className="text-gray-500 text-sm mt-2">
//           Target achieved: Completed in 3.5 weeks
//         </p>
//       </div>

//       {/* Daily Call Statistics Section */}
//       <div className="bg-white shadow rounded-lg p-6">
//         <h3 className="text-lg font-bold mb-4">Daily Call Statistics</h3>
//         <div className="h-64">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={dailyCallData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="day" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="calls" fill="#3b82f6" name="Total Calls" />
//               <Bar dataKey="scheduled" fill="#22c55e" name="Scheduled" />
//               <Bar dataKey="missed" fill="#ef4444" name="Missed" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Modal for AI Details */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">AI Agent Performance Details</h3>
//             <p className="text-gray-600">
//               Detailed analytics about AI performance can be shown here.
//             </p>
//             <button
//               className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition"
//               onClick={() => setModalOpen(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ParticipantsPage;





import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Users,
  Phone,
  Calendar,
  Clock,
  DollarSign,
  Target,
  PhoneOff,
  PhoneForwarded,
} from 'lucide-react';

// Card Component
const Card = ({ children }) => (
  <div className="bg-white shadow rounded-lg p-6">{children}</div>
);

// Card Header Component
const CardHeader = ({ children }) => (
  <div className="flex flex-row items-center justify-between pb-2">{children}</div>
);

// Card Title Component
const CardTitle = ({ children }) => (
  <h3 className="text-lg font-bold mb-2">{children}</h3>
);

// Card Content Component
const CardContent = ({ children }) => (
  <div className="text-gray-600 text-sm">{children}</div>
);

// Progress Component
const Progress = ({ value, className }) => (
  <div className={`h-2 bg-gray-200 rounded ${className}`}>
    <div
      className="h-full bg-green-600 rounded"
      style={{ width: `${value}%` }}
    ></div>
  </div>
);

const ParticipantsPage = () => {
  const [showAIDetails, setShowAIDetails] = useState(false);

  const dailyCallData = [
    { day: 'Mon', calls: 45, duration: 180, scheduled: 8, missed: 4, wrong: 2 },
    { day: 'Tue', calls: 52, duration: 195, scheduled: 10, missed: 3, wrong: 2 },
    { day: 'Wed', calls: 48, duration: 185, scheduled: 9, missed: 3, wrong: 1 },
    { day: 'Thu', calls: 55, duration: 210, scheduled: 12, missed: 2, wrong: 2 },
    { day: 'Fri', calls: 50, duration: 190, scheduled: 9, missed: 4, wrong: 1 },
  ];
  const traditionalData = {
    subjects: 210,
    timeframe: 8, // in weeks
    costPerSubject: 750, // in dollars
    totalCost: 157500, // in dollars
    targetAccuracy: 75, // in percentage
  };
  
  const aiData = {
    subjects: 90,
    timeframe: 3.5, // in weeks
    costPerSubject: 420, // in dollars
    totalCost: 37800, // in dollars
    targetAccuracy: 98, // in percentage
  };
  
  // Data for the chart
  const comparisonData = [
    {
      metric: "Cost per Subject ($)",
      Traditional: traditionalData.costPerSubject,
      AI: aiData.costPerSubject,
    },
    {
      metric: "Total Cost ($)",
      Traditional: traditionalData.totalCost,
      AI: aiData.totalCost,
    },
  ];
  

  return (
    <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Therapeutics Clinical Trial Dashboard</h1>
        <p className="text-gray-600 mb-6">Recruitment Progress Comparison</p>
        <div className="space-y-6 mb-8">

        {/* Subjects Comparison */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
            <div className="w-full md:w-1/2 text-center">
            <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold">{traditionalData.subjects}</p>
            <p className="text-gray-500 text-sm">Subjects Recruited</p>
            </div>
            <div className="w-full md:w-1/2 text-center border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-4">
            <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
            <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.subjects}</p>
            <p className="text-gray-500 text-sm">Subjects Recruited</p>
            </div>
        </div>

        {/* Time Comparison */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
            <div className="w-full md:w-1/2 text-center">
            <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
            <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold">{traditionalData.timeframe} weeks</p>
            <p className="text-gray-500 text-sm">Time to Recruit</p>
            </div>
            <div className="w-full md:w-1/2 text-center border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-4">
            <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
            <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.timeframe} weeks</p>
            <p className="text-gray-500 text-sm">Time to Recruit</p>
            </div>
        </div>

        {/* Cost Comparison */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
            <div className="w-full md:w-1/2 text-center">
            <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
            <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold">{traditionalData.costPerSubject}$/subject</p>
            <p className="text-gray-500 text-sm">Cost per Subject</p>
            </div>
            <div className="w-full md:w-1/2 text-center border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-4">
            <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
            <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.costPerSubject}$/subject</p>
            <p className="text-gray-500 text-sm">Cost per Subject</p>
            </div>
        </div>

        {/* Accuracy Comparison */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
            <div className="w-full md:w-1/2 text-center">
            <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold">{traditionalData.targetAccuracy}%</p>
            <p className="text-gray-500 text-sm">Target Accuracy</p>
            </div>
            <div className="w-full md:w-1/2 text-center border-t md:border-t-0 md:border-l border-gray-300 pt-4 md:pt-0 md:pl-4">
            <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
            <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.targetAccuracy}%</p>
            <p className="text-gray-500 text-sm">Target Accuracy</p>
            </div>
        </div>
        </div>
                

        <Card className="mt-6 mb-6">
            <CardHeader>
                <CardTitle>Recruitment Metrics Comparison</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={comparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Traditional" fill="#94a3b8" />
                    <Bar dataKey="AI" fill="#3b82f6" />
                    </BarChart>
                </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
                
    
      {/* Header Section */}
      <div className="mb-8 mt-6">
        <h1 className="text-2xl font-bold mb-2">Participants Dashboard</h1>
        <p className="text-gray-600">Overview of recruitment and progress metrics</p>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Subjects Recruited</CardTitle>
            <Users className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90</div>
            <p className="text-sm text-gray-500">Target: 90</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Calls</CardTitle>
            <Phone className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
            <p className="text-sm text-gray-500">92% connection rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Reminders</CardTitle>
            <Calendar className="h-5 w-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-sm text-gray-500">Next 48 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Avg Call Duration</CardTitle>
            <Clock className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3m 45s</div>
            <p className="text-sm text-gray-500">Total: 16.0 hours</p>
          </CardContent>
        </Card>
      </div>

      {/* Recruitment Progress Section */}
      <Card className="mb-8 mt-6">
        <CardHeader>
          <CardTitle>Recruitment Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current Progress: 90/90 subjects</span>
              <span className="font-medium">100%</span>
            </div>
            <Progress value={100} />
            <p className="text-sm text-gray-500 mt-2">
              Target achieved: Completed in 3.5 weeks
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Daily Call Statistics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Daily Call Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyCallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="calls" fill="#3b82f6" name="Total Calls" />
                  <Bar dataKey="scheduled" fill="#22c55e" name="Scheduled" />
                  <Bar dataKey="missed" fill="#ef4444" name="Missed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Call Duration Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyCallData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="duration" stroke="#3b82f6" name="Minutes" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Modal for AI Details */}
      {showAIDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button
              className="absolute top-2 right-2 text-red-600"
              onClick={() => setShowAIDetails(false)}
            >
              Close
            </button>
            <h3 className="text-lg font-bold mb-4">AI Agent Performance Details</h3>
            <p>Detailed analytics about AI performance can be shown here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantsPage;



// import React, { useState } from 'react';
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';
// import {
//   Users,
//   Phone,
//   Calendar,
//   Clock,
//   DollarSign,
//   Target,
//   PhoneOff,
//   PhoneForwarded,
// } from 'lucide-react';

// // Card Component
// const Card = ({ children }) => (
//   <div className="bg-white shadow rounded-lg p-4 sm:p-6">{children}</div>
// );

// // Card Header Component
// const CardHeader = ({ children }) => (
//   <div className="flex flex-row items-center justify-between pb-2">{children}</div>
// );

// // Card Title Component
// const CardTitle = ({ children }) => (
//   <h3 className="text-lg font-bold mb-2">{children}</h3>
// );

// // Card Content Component
// const CardContent = ({ children }) => (
//   <div className="text-gray-600 text-sm">{children}</div>
// );

// // Progress Component
// const Progress = ({ value, className }) => (
//   <div className={`h-2 bg-gray-200 rounded ${className}`}>
//     <div
//       className="h-full bg-green-600 rounded"
//       style={{ width: `${value}%` }}
//     ></div>
//   </div>
// );

// const ParticipantsPage = () => {
//   const [showAIDetails, setShowAIDetails] = useState(false);

//   const dailyCallData = [
//     { day: 'Mon', calls: 45, duration: 180, scheduled: 8, missed: 4, wrong: 2 },
//     { day: 'Tue', calls: 52, duration: 195, scheduled: 10, missed: 3, wrong: 2 },
//     { day: 'Wed', calls: 48, duration: 185, scheduled: 9, missed: 3, wrong: 1 },
//     { day: 'Thu', calls: 55, duration: 210, scheduled: 12, missed: 2, wrong: 2 },
//     { day: 'Fri', calls: 50, duration: 190, scheduled: 9, missed: 4, wrong: 1 },
//   ];
//   const traditionalData = {
//     subjects: 210,
//     timeframe: 8, // in weeks
//     costPerSubject: 750, // in dollars
//     totalCost: 157500, // in dollars
//     targetAccuracy: 75, // in percentage
//   };

//   const aiData = {
//     subjects: 90,
//     timeframe: 3.5, // in weeks
//     costPerSubject: 420, // in dollars
//     totalCost: 37800, // in dollars
//     targetAccuracy: 98, // in percentage
//   };

//   const comparisonData = [
//     {
//       metric: "Cost per Subject ($)",
//       Traditional: traditionalData.costPerSubject,
//       AI: aiData.costPerSubject,
//     },
//     {
//       metric: "Total Cost ($)",
//       Traditional: traditionalData.totalCost,
//       AI: aiData.totalCost,
//     },
//   ];

//   return (
//     <div className="p-4 sm:p-6 max-w-6xl mx-auto">
//       <h1 className="text-xl sm:text-2xl font-bold mb-2">Therapeutics Clinical Trial Dashboard</h1>
//       <p className="text-gray-600">Recruitment Progress Comparison</p>
//       <div className="space-y-6 mb-8">

//         {/* Subjects Comparison */}
//         <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
//           <div className="w-full sm:w-1/2 text-center">
//             <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
//             <Users className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold">{traditionalData.subjects}</p>
//             <p className="text-gray-500 text-sm">Subjects Recruited</p>
//           </div>
//           <div className="w-full sm:w-1/2 text-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-4 sm:pt-0 sm:pl-4">
//             <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
//             <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.subjects}</p>
//             <p className="text-gray-500 text-sm">Subjects Recruited</p>
//           </div>
//         </div>

//         {/* Time Comparison */}
//         <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
//           <div className="w-full sm:w-1/2 text-center">
//             <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
//             <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold">{traditionalData.timeframe} weeks</p>
//             <p className="text-gray-500 text-sm">Time to Recruit</p>
//           </div>
//           <div className="w-full sm:w-1/2 text-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-4 sm:pt-0 sm:pl-4">
//             <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
//             <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.timeframe} weeks</p>
//             <p className="text-gray-500 text-sm">Time to Recruit</p>
//           </div>
//         </div>

//         {/* Cost Comparison */}
//         <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow rounded-lg p-4 sm:p-6">
//           <div className="w-full sm:w-1/2 text-center">
//             <h3 className="text-md sm:text-lg font-bold text-gray-600">Traditional</h3>
//             <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold">{traditionalData.costPerSubject}$/subject</p>
//             <p className="text-gray-500 text-sm">Cost per Subject</p>
//           </div>
//           <div className="w-full sm:w-1/2 text-center border-t sm:border-t-0 sm:border-l border-gray-300 pt-4 sm:pt-0 sm:pl-4">
//             <h3 className="text-md sm:text-lg font-bold text-blue-600">AI-Assisted</h3>
//             <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mx-auto my-2" />
//             <p className="text-xl sm:text-2xl font-bold text-blue-600">{aiData.costPerSubject}$/subject</p>
//             <p className="text-gray-500 text-sm">Cost per Subject</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParticipantsPage;
