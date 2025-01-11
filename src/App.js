

// //--------------------------------------------------------------------=========================================


// import React, { useState } from 'react';
// import Layout from './components/Layout';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Homepage from './pages/HomePage';
// import TrialDashboard from './pages/TrialDashboard';
// import TrialDetailView from './pages/TrialDetailView';
// import SitesDashboard from './pages/SitesDashboard';

// // Define navigation constants
// const PAGES = {
//   HOME: 'home',
//   DASHBOARD: 'dashboard',
//   TRIAL_DETAILS: 'trialDetails',
//   SITES_DASHBOARD: 'sitesDashboard',
// };

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(PAGES.HOME); // Current page state
//   const [selectedTrial, setSelectedTrial] = useState(null); // Selected trial data

//   const handleNavigateToTrialDetails = (trial) => {
//     setSelectedTrial(trial); // Save the selected trial data
//     setCurrentPage(PAGES.TRIAL_DETAILS); // Navigate to TrialDetailView
//   };

//   const handleNavigateToSites = () => {
//     console.log('Navigating to SitesDashboard'); // Debugging
//     setCurrentPage(PAGES.SITES_DASHBOARD); // Navigate to SitesDashboard
//   };

//   // return (
//   //   <Layout>
//   //     <Header currentPage={currentPage} onNavigate={setCurrentPage} />
//   //     <main className="flex-grow">
//   //       {currentPage === PAGES.HOME && <Homepage onNavigate={setCurrentPage} />}
//   //       {currentPage === PAGES.DASHBOARD && (
//   //         <TrialDashboard onNavigateToTrialDetails={handleNavigateToTrialDetails} />
//   //       )}
//   //       {currentPage === PAGES.TRIAL_DETAILS && (
//   //         selectedTrial ? (
//   //           <TrialDetailView
//   //             trial={selectedTrial}
//   //             onBack={() => setCurrentPage(PAGES.DASHBOARD)} // Back to TrialDashboard
//   //             onNavigateToSites={handleNavigateToSites} // Navigate to SitesDashboard
//   //           />
//   //         ) : (
//   //           <p>No trial selected. Please go back to the Dashboard.</p>
//   //         )
//   //       )}
//   //       {currentPage === PAGES.SITES_DASHBOARD && (
//   //         <SitesDashboard onBack={() => setCurrentPage(PAGES.TRIAL_DETAILS)} />
//   //       )}
//   //       {!Object.values(PAGES).includes(currentPage) && (
//   //         <p>Page not found. Please return to the homepage.</p>
//   //       )}
//   //     </main>
//   //     <Footer />
//   //   </Layout>
//   // );
// return (
//   <Layout>
//     <Header currentPage={currentPage} onNavigate={setCurrentPage} />
//     <main className="flex-grow">
//       {currentPage === PAGES.HOME && <Homepage onNavigate={setCurrentPage} />}
//       {currentPage === PAGES.DASHBOARD && (
//         <TrialDashboard onNavigateToTrialDetails={handleNavigateToTrialDetails} />
//       )}
//       {currentPage === PAGES.TRIAL_DETAILS && (
//         selectedTrial ? (
//           <>
//             {console.log('Passing onNavigateToSites:', handleNavigateToSites)} {/* Step 2 */}
//             <TrialDetailView
//               trial={selectedTrial}
//               onBack={() => setCurrentPage(PAGES.DASHBOARD)} // Back to TrialDashboard
//               onNavigateToSites={handleNavigateToSites} // Navigate to SitesDashboard
//             />
//           </>
//         ) : (
//           <p>No trial selected. Please go back to the Dashboard.</p>
//         )
//       )}
//       {currentPage === PAGES.SITES_DASHBOARD && (
//         <SitesDashboard onBack={() => setCurrentPage(PAGES.TRIAL_DETAILS)} />
//       )}
//       {!Object.values(PAGES).includes(currentPage) && (
//         <p>Page not found. Please return to the homepage.</p>
//       )}
//     </main>
//     <Footer />
//   </Layout>
// );

// };

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import TrialDashboard from './pages/TrialDashboard';
import TrialDetailView from './pages/TrialDetailView';
import SitesDashboard from './pages/SitesDashboard';
import SitesDetailView from './pages/SitesDetailView';
import DropoutPage from './pages/DropoutPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<TrialDashboard />} />
            <Route path="/trial/:id" element={<TrialDetailView />} />
            <Route path="/sites" element={<SitesDashboard />} />
            <Route path="/sites/:id" element={<SitesDetailView />} />
            <Route path="/sites/:id/dropout" element={<DropoutPage />} />
            <Route
              path="*"
              element={<div className="p-8">404 - Page Not Found</div>}
            />
          </Routes>
        </main>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
