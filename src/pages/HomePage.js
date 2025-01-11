// import React from 'react';
// import { Brain, Clock, Search, Users, Activity, Globe } from 'lucide-react';

// const Homepage = ({ onNavigate }) => (
//   <div className="bg-white">
//     {/* Hero Section */}
//     <div className="px-8 py-16 text-center">
//       <div className="flex items-center justify-center space-x-2 mb-8">
//         <Brain className="w-6 h-6 text-primary" />
//         <span className="text-primary">AI-Powered Clinical Trials</span>
//       </div>
//       <h1 className="mb-4 text-6xl font-bold">
//         Accelerate Your Clinical Research with
//         <span className="text-primary"> Artificial Intelligence</span>
//       </h1>
//       <p className="mb-8 text-xl text-gray-600 max-w-3xl mx-auto">
//         Transform your clinical trials with our AI platform. Streamline patient recruitment,
//         optimize protocols, and analyze results faster than ever before.
//       </p>
//       <div className="flex justify-center space-x-4">
//         <button
//           className="px-6 py-3 text-white bg-primary rounded-full hover:bg-blue-700"
//           onClick={() => onNavigate('dashboard')}
//         >
//           Schedule Demo →
//         </button>
//         <button className="px-6 py-3 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50">
//           Learn More
//         </button>
//       </div>
//     </div>

//     {/* Statistics Section */}
//     <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 px-8 py-16">
//       <div className="text-center">
//         <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">86%</div>
//         <div className="text-gray-600">Trials Face Delays</div>
//       </div>
//       <div className="text-center">
//         <Search className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">80%</div>
//         <div className="text-gray-600">Miss Enrollment Targets</div>
//       </div>
//       <div className="text-center">
//         <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">400K+</div>
//         <div className="text-gray-600">Active Global Trials</div>
//       </div>
//       <div className="text-center">
//         <Activity className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">$2.6B</div>
//         <div className="text-gray-600">Avg Cost Per Drug</div>
//       </div>
//       <div className="text-center">
//         <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">48%</div>
//         <div className="text-gray-600">Increase in Complex Trials</div>
//       </div>
//       <div className="text-center">
//         <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
//         <div className="text-4xl font-bold">70%</div>
//         <div className="text-gray-600">Face Recruitment Issues</div>
//       </div>
//     </div>

//     {/* Features Section */}
//     <div className="bg-gray-50 px-8 py-16">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4">The Future of Clinical Trials</h2>
//         <p className="text-xl text-gray-600 text-center mb-12">
//           Global clinical trials are evolving rapidly with AI and technology leading the way.
//         </p>
//         <div className="grid grid-cols-3 gap-8">
//           <div className="bg-white p-8 rounded-lg">
//             <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
//               <Brain className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-4">AI-Driven Protocol Optimization</h3>
//             <p className="text-gray-600">
//               Machine learning algorithms analyze historical trial data to optimize study
//               protocols, reducing amendments by 45%.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg">
//             <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
//               <Search className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Precision Patient Matching</h3>
//             <p className="text-gray-600">
//               Advanced algorithms match patients to trials with 95% accuracy, reducing
//               screening failures by 60%.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg">
//             <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-lg mb-6">
//               <Activity className="w-6 h-6 text-primary" />
//             </div>
//             <h3 className="text-xl font-bold mb-4">Real-time Data Analysis</h3>
//             <p className="text-gray-600">
//               Continuous monitoring and analysis of trial data enables faster decision-making
//               and reduced study timelines.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Global Statistics Section */}
//     <div className="max-w-7xl mx-auto px-8 py-16">
//       <div className="bg-primary rounded-2xl p-8 text-white">
//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <h3 className="text-2xl font-bold mb-6">Global Trial Statistics</h3>
//             <ul className="space-y-4">
//               <li>• Over 400,000 clinical trials currently active worldwide</li>
//               <li>• 48% increase in complex trial designs since 2019</li>
//               <li>• 70% of trials facing patient recruitment challenges</li>
//               <li>• $2.6B average cost to develop a new drug</li>
//             </ul>
//           </div>
//           <div className="bg-blue-700/30 rounded-xl p-6">
//             <h3 className="text-2xl font-bold mb-6">AI Impact</h3>
//             <ul className="space-y-4">
//               <li>• 45% reduction in protocol amendments</li>
//               <li>• 60% faster patient recruitment</li>
//               <li>• 35% cost reduction in data analysis</li>
//               <li>• 80% improvement in site selection accuracy</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Homepage;





//================================================================================================


import React from 'react';
import { Brain, Clock, Search, Users, Activity, Globe } from 'lucide-react';

const Homepage = ({ onNavigate }) => (
  <div className="bg-white">
    {/* Hero Section */}
    <div className="px-4 md:px-8 py-12 md:py-16 text-center">
      <div className="flex flex-col items-center space-y-2 mb-6 md:mb-8">
        <Brain className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        <span className="text-primary text-sm md:text-base">AI-Powered Clinical Trials</span>
      </div>
      <h1 className="mb-4 text-2xl sm:text-3xl md:text-6xl font-bold">
        Accelerate Your Clinical Research with
        <span className="text-primary"> Artificial Intelligence</span>
      </h1>
      <p className="mb-6 md:mb-8 text-sm sm:text-base md:text-xl text-gray-600 max-w-lg md:max-w-3xl mx-auto">
        Transform your clinical trials with our AI platform. Streamline patient recruitment,
        optimize protocols, and analyze results faster than ever before.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          className="w-full sm:w-auto px-6 py-3 text-white bg-primary rounded-full hover:bg-blue-700"
          onClick={() => onNavigate('dashboard')}
        >
          Schedule Demo →
        </button>
        <button className="w-full sm:w-auto px-6 py-3 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50">
          Learn More
        </button>
      </div>
    </div>

    {/* Statistics Section */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 py-12 md:py-16">
      {[
        { Icon: Clock, value: '86%', text: 'Trials Face Delays' },
        { Icon: Search, value: '80%', text: 'Miss Enrollment Targets' },
        { Icon: Users, value: '400K+', text: 'Active Global Trials' },
        { Icon: Activity, value: '$2.6B', text: 'Avg Cost Per Drug' },
        { Icon: Brain, value: '48%', text: 'Increase in Complex Trials' },
        { Icon: Globe, value: '70%', text: 'Face Recruitment Issues' },
      ].map(({ Icon, value, text }, idx) => (
        <div key={idx} className="text-center">
          <Icon className="w-10 h-10 mx-auto mb-2 text-primary" />
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{value}</div>
          <div className="text-gray-600 text-sm sm:text-base">{text}</div>
        </div>
      ))}
    </div>

    {/* Features Section */}
    <div className="bg-gray-50 px-4 md:px-8 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">The Future of Clinical Trials</h2>
        <p className="text-sm sm:text-base md:text-xl text-gray-600 text-center mb-8 md:mb-12">
          Global clinical trials are evolving rapidly with AI and technology leading the way.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              Icon: Brain,
              title: 'AI-Driven Protocol Optimization',
              description:
                'Machine learning algorithms analyze historical trial data to optimize study protocols, reducing amendments by 45%.',
            },
            {
              Icon: Search,
              title: 'Precision Patient Matching',
              description:
                'Advanced algorithms match patients to trials with 95% accuracy, reducing screening failures by 60%.',
            },
            {
              Icon: Activity,
              title: 'Real-time Data Analysis',
              description:
                'Continuous monitoring and analysis of trial data enables faster decision-making and reduced study timelines.',
            },
          ].map(({ Icon, title, description }, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow">
              <div className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-lg mb-4">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Global Statistics Section */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="bg-primary rounded-xl p-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Global Trial Statistics</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• Over 400,000 clinical trials currently active worldwide</li>
              <li>• 48% increase in complex trial designs since 2019</li>
              <li>• 70% of trials facing patient recruitment challenges</li>
              <li>• $2.6B average cost to develop a new drug</li>
            </ul>
          </div>
          <div className="bg-blue-700/30 rounded-xl p-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">AI Impact</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>• 45% reduction in protocol amendments</li>
              <li>• 60% faster patient recruitment</li>
              <li>• 35% cost reduction in data analysis</li>
              <li>• 80% improvement in site selection accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;

