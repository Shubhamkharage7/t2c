// import React from 'react';
// import { Brain } from 'lucide-react';

// const Header = ({ currentPage, onNavigate }) => (
//   <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
//     <div
//       className="flex items-center space-x-2 cursor-pointer"
//       onClick={() => onNavigate('home')}
//     >
//       <Brain className="w-8 h-8 text-primary" />
//       <span className="text-xl font-semibold">ClinicalAI</span>
//     </div>
//     <div className="flex items-center space-x-8">
//       <button className="text-gray-600 hover:text-primary">Solutions</button>
//       <button className="text-gray-600 hover:text-primary">Benefits</button>
//       <button className="text-gray-600 hover:text-primary">About</button>
//       <button
//         onClick={() => onNavigate('dashboard')}
//         className={`text-gray-600 hover:text-primary ${
//           currentPage === 'dashboard' ? 'text-primary' : ''
//         }`}
//       >
//         Dashboard
//       </button>
//       <button className="px-4 py-2 text-white bg-primary rounded-full hover:bg-blue-700">
//         Request Demo
//       </button>
//     </div>
//   </nav>
// );

// export default Header;


////==============================================IN USE===========================================

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Brain } from 'lucide-react';

// const Header = () => (
//   <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
//     <div className="flex items-center space-x-2 cursor-pointer">
//       <Brain className="w-8 h-8 text-primary" />
//       <NavLink to="/" className="text-xl font-semibold hover:text-primary">
//         ClinicalAI
//       </NavLink>
//     </div>
//     <div className="flex items-center space-x-8">
//       <NavLink
//         to="/solutions"
//         className={({ isActive }) =>
//           isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
//         }
//       >
//         Solutions
//       </NavLink>
//       <NavLink
//         to="/benefits"
//         className={({ isActive }) =>
//           isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
//         }
//       >
//         Benefits
//       </NavLink>
//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
//         }
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/dashboard"
//         className={({ isActive }) =>
//           isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
//         }
//       >
//         Dashboard
//       </NavLink>
//       <NavLink
//         to="/request-demo"
//         className="px-4 py-2 text-white bg-primary rounded-full hover:bg-blue-700"
//       >
//         Request Demo
//       </NavLink>
//     </div>
//   </nav>
// );

// export default Header;




////==============================================IN USE===========================================



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 cursor-pointer">
        <Brain className="w-8 h-8 text-primary" />
        <NavLink to="/" className="text-xl font-semibold hover:text-primary">
          ClinicalAI
        </NavLink>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static bg-white md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto p-4 md:p-0 shadow-md md:shadow-none border-b md:border-none`}
      >
        <NavLink
          to="/solutions"
          className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
          }
        >
          Solutions
        </NavLink>
        <NavLink
          to="/benefits"
          className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
          }
        >
          Benefits
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/request-demo"
          className="px-4 py-2 text-white bg-primary rounded-full hover:bg-blue-700"
        >
          Request Demo
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
