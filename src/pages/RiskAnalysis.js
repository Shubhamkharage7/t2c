// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AlertTriangle, UserMinus, Clock, CheckCircle } from "lucide-react";

// // const ComparisonDashboard = () => {
// //   const navigate = useNavigate();

// //   const comparisonStats = {
// //     traditional: {
// //       dropoutRate: 15.2,
// //       responseTime: 72,
// //       preventionRate: 25,
// //     },
// //     ai: {
// //       dropoutRate: 4.6,
// //       responseTime: 2.4,
// //       preventionRate: 85,
// //     },
// //   };

// //   const ComparisonCard = ({ title, traditional, ai, unit = "", icon: Icon }) => (
// //     <div
// //       className="border bg-white shadow-sm rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between"
// //       onClick={() => navigate("/risk-analysis")}
// //     >
// //       <div className="space-y-2">
// //         <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
// //         <div className="grid grid-cols-2 gap-4">
// //           <div>
// //             <p className="text-sm text-gray-500">Traditional</p>
// //             <p className="text-2xl font-bold text-gray-700">
// //               {traditional}
// //               {unit}
// //             </p>
// //           </div>
// //           <div>
// //             <p className="text-sm text-gray-500">AI-Powered</p>
// //             <p className="text-2xl font-bold text-blue-600">
// //               {ai}
// //               {unit}
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //       <Icon className="h-8 w-8 text-gray-400" />
// //     </div>
// //   );

// //   return (
// //     <div className="p-8 max-w-7xl mx-auto bg-gray-50">
// //       <div className="mb-8">
// //         <h1 className="text-3xl font-bold text-gray-800 mb-2">
// //           Dropout Management Comparison Dashboard
// //         </h1>
// //         <p className="text-gray-600">Traditional vs AI-Powered Approach</p>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         <ComparisonCard
// //           title="Dropout Rate"
// //           traditional={comparisonStats.traditional.dropoutRate}
// //           ai={comparisonStats.ai.dropoutRate}
// //           unit="%"
// //           icon={UserMinus}
// //         />

// //         <ComparisonCard
// //           title="Response Time"
// //           traditional={comparisonStats.traditional.responseTime}
// //           ai={comparisonStats.ai.responseTime}
// //           unit="h"
// //           icon={Clock}
// //         />

// //         <ComparisonCard
// //           title="Prevention Success Rate"
// //           traditional={comparisonStats.traditional.preventionRate}
// //           ai={comparisonStats.ai.preventionRate}
// //           unit="%"
// //           icon={CheckCircle}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ComparisonDashboard;



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { UserMinus, Clock, CheckCircle } from "lucide-react";

// const ComparisonDashboard = () => {
//   const navigate = useNavigate();

//   const comparisonStats = {
//     traditional: {
//       dropoutRate: 15.2,
//       responseTime: 72,
//       preventionRate: 25,
//     },
//     ai: {
//       dropoutRate: 4.6,
//       responseTime: 2.4,
//       preventionRate: 85,
//     },
//   };

//   const monthlyComparison = [
//     { month: "Jan", traditional: 12, ai: 4, predictions: 5 },
//     { month: "Feb", traditional: 15, ai: 3, predictions: 4 },
//     { month: "Mar", traditional: 14, ai: 5, predictions: 6 },
//     { month: "Apr", traditional: 16, ai: 4, predictions: 5 },
//     { month: "May", traditional: 13, ai: 3, predictions: 4 },
//   ];

//   const ComparisonCard = ({ title, traditional, ai, unit = "", icon: Icon }) => (
//     <div
//       className="border bg-white shadow-sm rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between"
//       onClick={() => navigate("/risk-analysis")}
//     >
//       <div className="space-y-2">
//         <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <p className="text-sm text-gray-500">Traditional</p>
//             <p className="text-2xl font-bold text-gray-700">
//               {traditional}
//               {unit}
//             </p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">AI-Powered</p>
//             <p className="text-2xl font-bold text-blue-600">
//               {ai}
//               {unit}
//             </p>
//           </div>
//         </div>
//       </div>
//       <Icon className="h-8 w-8 text-gray-400" />
//     </div>
//   );

//   return (
//     <div className="p-8 max-w-7xl mx-auto bg-gray-50">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800 mb-2">
//           Dropout Management Comparison Dashboard
//         </h1>
//         <p className="text-gray-600">Traditional vs AI-Powered Approach</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <ComparisonCard
//           title="Dropout Rate"
//           traditional={comparisonStats.traditional.dropoutRate}
//           ai={comparisonStats.ai.dropoutRate}
//           unit="%"
//           icon={UserMinus}
//         />

//         <ComparisonCard
//           title="Response Time"
//           traditional={comparisonStats.traditional.responseTime}
//           ai={comparisonStats.ai.responseTime}
//           unit="h"
//           icon={Clock}
//         />

//         <ComparisonCard
//           title="Prevention Success Rate"
//           traditional={comparisonStats.traditional.preventionRate}
//           ai={comparisonStats.ai.preventionRate}
//           unit="%"
//           icon={CheckCircle}
//         />
//       </div>

//       <div className="mt-12 p-6 bg-white shadow-sm rounded-xl">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Monthly Dropout Comparison
//         </h2>
//         <div className="h-72">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={monthlyComparison}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="traditional"
//                 stroke="#94a3b8"
//                 name="Traditional"
//                 dot={{ r: 4 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="ai"
//                 stroke="#3b82f6"
//                 name="AI-Powered"
//                 dot={{ r: 4 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="predictions"
//                 stroke="#f59e0b"
//                 name="AI Predictions"
//                 dot={{ r: 4 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ComparisonDashboard;




//=========


import React from "react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { UserMinus, Clock, CheckCircle } from "lucide-react";

const ProcessComparison = () => {
  return (
    <div className="mt-12 p-6 bg-white shadow-sm rounded-xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Process Comparison</h2>
      
      {/* Traditional Approach */}
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-4">Traditional Approach</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Detection Method</h4>
            <p className="text-sm text-gray-600">Manual review of patient records and site reports</p>
            <p className="text-sm text-gray-500">Avg. detection time: 72 hours</p>
          </div>
          <div className="border-l-4 border-gray-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Response Protocol</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Site coordinator review</li>
              <li>• Manual escalation process</li>
              <li>• Standard follow-up schedule</li>
            </ul>
          </div>
          <div className="border-l-4 border-gray-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Limitations</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Reactive approach</li>
              <li>• Limited predictive capability</li>
              <li>• Resource-intensive process</li>
              <li>• Inconsistent response times</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AI-Powered Approach */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-md font-semibold text-gray-700 mb-4">AI-Powered Approach</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Predictive Analytics</h4>
            <p className="text-sm text-gray-600">Real-time risk assessment using ML algorithms</p>
            <p className="text-sm text-blue-600">92% prediction accuracy</p>
          </div>
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Automated Response System</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Instant risk detection</li>
              <li>• Automated escalation workflow</li>
              <li>• Personalized intervention plans</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-400 pl-4">
            <h4 className="font-medium text-gray-700 mb-1">Key Advantages</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Proactive intervention</li>
              <li>• 24/7 monitoring</li>
              <li>• Data-driven decisions</li>
              <li>• 70% reduction in dropouts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ComparisonDashboard = () => {
  const navigate = useNavigate();

  const comparisonStats = {
    traditional: {
      dropoutRate: 15.2,
      responseTime: 72,
      preventionRate: 25,
    },
    ai: {
      dropoutRate: 4.6,
      responseTime: 2.4,
      preventionRate: 85,
    },
  };

  const monthlyComparison = [
    { month: "Jan", traditional: 12, ai: 4, predictions: 5 },
    { month: "Feb", traditional: 15, ai: 3, predictions: 4 },
    { month: "Mar", traditional: 14, ai: 5, predictions: 6 },
    { month: "Apr", traditional: 16, ai: 4, predictions: 5 },
    { month: "May", traditional: 13, ai: 3, predictions: 4 },
  ];

  const ComparisonCard = ({ title, traditional, ai, unit = "", icon: Icon }) => (
    <div
      className="border bg-white shadow-sm rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-between"
      onClick={() => navigate("/risk-analysis")}
    >
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Traditional</p>
            <p className="text-2xl font-bold text-gray-700">
              {traditional}
              {unit}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">AI-Powered</p>
            <p className="text-2xl font-bold text-blue-600">
              {ai}
              {unit}
            </p>
          </div>
        </div>
      </div>
      <Icon className="h-8 w-8 text-gray-400" />
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Dropout Management Comparison Dashboard
        </h1>
        <p className="text-gray-600">Traditional vs AI-Powered Approach</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ComparisonCard
          title="Dropout Rate"
          traditional={comparisonStats.traditional.dropoutRate}
          ai={comparisonStats.ai.dropoutRate}
          unit="%"
          icon={UserMinus}
        />

        <ComparisonCard
          title="Response Time"
          traditional={comparisonStats.traditional.responseTime}
          ai={comparisonStats.ai.responseTime}
          unit="h"
          icon={Clock}
        />

        <ComparisonCard
          title="Prevention Success Rate"
          traditional={comparisonStats.traditional.preventionRate}
          ai={comparisonStats.ai.preventionRate}
          unit="%"
          icon={CheckCircle}
        />
      </div>

      {/* Monthly Dropout Comparison */}
      <div className="mt-12 p-6 bg-white shadow-sm rounded-xl">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Monthly Dropout Comparison
        </h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="traditional"
                stroke="#94a3b8"
                name="Traditional"
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="ai"
                stroke="#3b82f6"
                name="AI-Powered"
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="predictions"
                stroke="#f59e0b"
                name="AI Predictions"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Process Comparison */}
      <ProcessComparison />
    </div>
  );
};

export default ComparisonDashboard;
