import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import { AlertTriangle, CheckCircle, Clock, User } from 'lucide-react';

const studyData = {
  currentStatus: {
    enrolled: 45,
    active: 41,
    dropouts: 4,
    waitlist: 6,
    predictedEndDate: '2026-01-15',
    originalEndDate: '2025-12-31',
  },
  dropoutAnalysis: [
    {
      reason: 'Adverse Events',
      count: 2,
      impact: 'Medium',
      aiRecommendation: 'Enhance symptom monitoring',
      resolved: true,
    },
    {
      reason: 'Lost to Follow-up',
      count: 1,
      impact: 'Low',
      aiRecommendation: 'Increase engagement touchpoints',
      resolved: true,
    },
    {
      reason: 'Protocol Non-compliance',
      count: 1,
      impact: 'Low',
      aiRecommendation: 'Simplify visit schedule',
      resolved: true,
    },
  ],
  waitlistPatients: [
    {
      id: 'WL001',
      status: 'Ready',
      screeningScore: 95,
      matchScore: 98,
      lastContact: '2025-04-08',
      availableFrom: '2025-04-15',
    },
    {
      id: 'WL002',
      status: 'Ready',
      screeningScore: 92,
      matchScore: 95,
      lastContact: '2025-04-09',
      availableFrom: '2025-04-16',
    },
    {
      id: 'WL003',
      status: 'Pending Screening',
      screeningScore: null,
      matchScore: 88,
      lastContact: '2025-04-10',
      availableFrom: '2025-04-20',
    },
  ],
  riskPatients: [
    {
      id: 'PT023',
      riskLevel: 'High',
      riskScore: 85,
      nextVisit: '2025-04-20',
      lastContact: '2025-04-08',
      riskFactors: [
        'Missed last phone check-in',
        'App engagement decreased by 60%',
        'Rescheduled twice',
      ],
      aiSuggestions: [
        'Immediate coordinator outreach',
        'Offer transportation support',
        'Schedule home visit',
      ],
    },
    {
      id: 'PT018',
      riskLevel: 'Medium',
      riskScore: 65,
      nextVisit: '2025-04-25',
      lastContact: '2025-04-10',
      riskFactors: ['App engagement decreased by 30%', 'Reported transportation issues'],
      aiSuggestions: ['Schedule follow-up call', 'Review transportation options'],
    },
  ],
//   trends: [
//     { month: 'Jan 25', enrolled: 12, retained: 12, predicted: 12 },
//     { month: 'Feb 25', enrolled: 24, retained: 23, predicted: 23 },
//     { month: 'Mar 25', enrolled: 35, retained: 33, predicted: 33 },
//     { month: 'Apr 25', enrolled: 45, retained: 41, predicted: 41 },
//     { month: 'May 25', enrolled: null, retained: null, predicted: 48 },
//     { month: 'Jun 25', enrolled: null, retained: null, predicted: 54 },
//     { month: 'Jul 25', enrolled: null, retained: null, predicted: 58 },
//   ],
trends: [
    { 
      month: 'Jan 25', 
      enrolled: 12,
      retained: 12,
      aiPrediction: 11,
      dropouts: 0
    },
    { 
      month: 'Feb 25', 
      enrolled: 24,
      retained: 23,
      aiPrediction: 22,
      dropouts: 1
    },
    { 
      month: 'Mar 25', 
      enrolled: 35,
      retained: 33,
      aiPrediction: 34,
      dropouts: 2
    },
    { 
      month: 'Apr 25', 
      enrolled: 45,
      retained: 41,
      aiPrediction: 40,
      dropouts: 4
    },
    { 
      month: 'May 25', 
      enrolled: 45,
      retained: null,
      aiPrediction: 39,
      dropouts: null
    },
    { 
      month: 'Jun 25', 
      enrolled: 45,
      retained: null,
      aiPrediction: 38,
      dropouts: null
    },
    { 
      month: 'Jul 25', 
      enrolled: 45,
      retained: null,
      aiPrediction: 37,
      dropouts: null
    }
  ]
};

const DropoutPage = () => {
  const [selectedRiskPatient, setSelectedRiskPatient] = useState(null);

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Active / Enrolled */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Study Progress</p>
                <p className="text-2xl font-bold">{studyData.currentStatus.active}/{studyData.currentStatus.enrolled}</p>
              </div>
              <span className="text-green-500"><CheckCircle size={24} /></span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Active/Total Enrolled</p>
          </div>

          {/* Delay */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Timeline Impact</p>
                <p className="text-2xl font-bold">+2 weeks</p>
              </div>
              <span className="text-yellow-500"><Clock size={24} /></span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Current Delay</p>
          </div>

          {/* Waitlist */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">Waitlist Available</p>
                <p className="text-2xl font-bold">{studyData.currentStatus.waitlist}</p>
              </div>
              <span className="text-blue-500"><User size={24} /></span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Ready for Enrollment</p>
          </div>

          {/* At Risk */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-red-600">At Risk Patients</p>
                <p className="text-2xl font-bold">{studyData.riskPatients.length}</p>
              </div>
              <span className="text-red-500"><AlertTriangle size={24} /></span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Requiring Attention</p>
          </div>
        </div>

        {/* Dropout Analysis */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Dropout Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={studyData.trends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line dataKey="predicted" stroke="#FF8042" name="AI Prediction" />
              <Line dataKey="retained" stroke="#00C49F" name="Retained" />
              <Line dataKey="enrolled" stroke="#8884D8" name="Enrolled" />
            </ComposedChart>
          </ResponsiveContainer>
        </div> */}
        {/* Study Prediction Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Study Progress and AI Prediction</h2>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={studyData.trends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month" 
                  angle={-45} 
                  textAnchor="end" 
                  height={60} 
                  tick={{ fill: '#666' }}
                />
                <YAxis 
                  yAxisId="left"
                  domain={[0, 70]} 
                  tick={{ fill: '#666' }}
                  label={{ value: 'Number of Patients', angle: -90, position: 'insideLeft' }}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 10]}
                  tick={{ fill: '#666' }}
                  label={{ value: 'Dropouts', angle: 90, position: 'insideRight' }}
                />
                <Tooltip />
                <Legend />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="retained"
                  fill="#4CAF50"
                  stroke="#4CAF50"
                  name="Retained Patients"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="enrolled"
                  stroke="#2196F3"
                  strokeWidth={2}
                  name="Total Enrolled"
                  dot={{ r: 4 }}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="aiPrediction"
                  stroke="#FF9800"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="AI Prediction"
                  dot={{ r: 4 }}
                />
                <Bar
                  yAxisId="right"
                  dataKey="dropouts"
                  fill="#FF5252"
                  name="Dropouts"
                  barSize={20}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        
      </div>
        {/* At Risk Patients */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">At Risk Patients</h2>
            <div className="space-y-4">
              {studyData.riskPatients.map((patient) => (
                <div 
                  key={patient.id}
                  className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedRiskPatient(patient)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Patient {patient.id}</h3>
                      <p className="text-sm text-gray-600">
                        Next Visit: {patient.nextVisit}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.riskLevel === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.riskLevel} Risk
                    </span>
                  </div>
                  <div className="space-y-2">
                    {patient.riskFactors.map((factor, index) => (
                      <p key={index} className="text-sm text-red-600">• {factor}</p>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm font-medium text-blue-600">AI Recommendations:</p>
                    {patient.aiSuggestions.map((suggestion, index) => (
                      <p key={index} className="text-sm text-blue-600">• {suggestion}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        {/* Waitlist Management */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">Waitlist Management</h2>
            <div className="space-y-4">
              {studyData.waitlistPatients.map((patient) => (
                <div key={patient.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">Candidate {patient.id}</h3>
                      <p className="text-sm text-gray-600">
                        Available: {patient.availableFrom}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.status === 'Ready' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {patient.status}
                    </span>
                  </div>
                  {patient.screeningScore && (
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm text-gray-600">Screening Score</p>
                        <p className="font-bold text-lg">{patient.screeningScore}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Match Score</p>
                        <p className="font-bold text-lg">{patient.matchScore}%</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>  

        {/* Dropout Analysis */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Dropout Analysis & AI Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studyData.dropoutAnalysis.map((item) => (
              <div key={item.reason} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.reason}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.impact === 'High' ? 'bg-red-100 text-red-800' :
                    item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {item.impact} Impact
                  </span>
                </div>
                <p className="text-3xl font-bold mb-2">{item.count}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">AI Recommendation:</p>
                  <p className="text-sm text-blue-600">{item.aiRecommendation}</p>
                </div>
                {item.resolved && (
                  <div className="mt-2 flex items-center text-green-600">
                    <CheckCircle size={16} className="mr-1" />
                    <span className="text-sm">Resolved with waitlist</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>  
        </div>
    </div>
  );
};

export default DropoutPage;










//================================================================================================


