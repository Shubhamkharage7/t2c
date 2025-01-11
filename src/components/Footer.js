// import React from 'react';
// import { Brain } from 'lucide-react';

// const Footer = () => (
//   <footer className="px-8 py-16 bg-gray-900 text-white">
//     <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
//       <div>
//         <div className="flex items-center space-x-2 mb-4">
//           <Brain className="w-8 h-8 text-primary" />
//           <span className="text-xl font-semibold">ClinicalAI</span>
//         </div>
//         <p className="text-neutral">
//           Accelerating clinical trials through artificial intelligence and machine learning.
//         </p>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
//         <ul className="space-y-2 text-neutral">
//           <li className="hover:text-white cursor-pointer">Solutions</li>
//           <li className="hover:text-white cursor-pointer">Case Studies</li>
//           <li className="hover:text-white cursor-pointer">About Us</li>
//           <li className="hover:text-white cursor-pointer">Careers</li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Resources</h4>
//         <ul className="space-y-2 text-neutral">
//           <li>Blog</li>
//           <li>Documentation</li>
//           <li>Research Papers</li>
//           <li>Compliance</li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Contact</h4>
//         <ul className="space-y-2 text-neutral">
//           <li>contact@clinicalai.com</li>
//           <li>+1 (555) 234-5678</li>
//           <li>Boston, MA</li>
//         </ul>
//       </div>
//     </div>
//     <div className="mt-16 pt-8 border-t border-gray-800 text-center text-neutral">
//       © 2025 ClinicalAI. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer;



//==========================================================IN USE===================================

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Brain } from 'lucide-react';

// const Footer = () => (
//   <footer className="px-8 py-16 bg-gray-900 text-white">
//     <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto">
//       <div>
//         <div className="flex items-center space-x-2 mb-4">
//           <Brain className="w-8 h-8 text-primary" />
//           <NavLink to="/" className="text-xl font-semibold hover:text-white">
//             ClinicalAI
//           </NavLink>
//         </div>
//         <p className="text-neutral">
//           Accelerating clinical trials through artificial intelligence and machine learning.
//         </p>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
//         <ul className="space-y-2 text-neutral">
//           <li>
//             <NavLink
//               to="/solutions"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Solutions
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/case-studies"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Case Studies
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/careers"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Careers
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Resources</h4>
//         <ul className="space-y-2 text-neutral">
//           <li>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Blog
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/documentation"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Documentation
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/research-papers"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Research Papers
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/compliance"
//               className={({ isActive }) =>
//                 isActive ? 'text-white' : 'hover:text-white cursor-pointer'
//               }
//             >
//               Compliance
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h4 className="mb-4 text-lg font-semibold">Contact</h4>
//         <ul className="space-y-2 text-neutral">
//           <li>contact@clinicalai.com</li>
//           <li>+1 (555) 234-5678</li>
//           <li>Boston, MA</li>
//         </ul>
//       </div>
//     </div>
//     <div className="mt-16 pt-8 border-t border-gray-800 text-center text-neutral">
//       © 2025 ClinicalAI. All rights reserved.
//     </div>
//   </footer>
// );

// export default Footer;





//==========================================================IN USE===================================

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Footer = () => (
  <footer className="px-4 md:px-8 py-12 md:py-16 bg-gray-900 text-white">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {/* Logo and Description */}
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Brain className="w-8 h-8 text-primary" />
          <NavLink to="/" className="text-xl font-semibold hover:text-white">
            ClinicalAI
          </NavLink>
        </div>
        <p className="text-neutral text-sm md:text-base">
          Accelerating clinical trials through artificial intelligence and machine learning.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
        <ul className="space-y-2 text-neutral text-sm md:text-base">
          <li>
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Case Studies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Careers
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="mb-4 text-lg font-semibold">Resources</h4>
        <ul className="space-y-2 text-neutral text-sm md:text-base">
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/documentation"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Documentation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/research-papers"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Research Papers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/compliance"
              className={({ isActive }) =>
                isActive ? 'text-white' : 'hover:text-white cursor-pointer'
              }
            >
              Compliance
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h4 className="mb-4 text-lg font-semibold">Contact</h4>
        <ul className="space-y-2 text-neutral text-sm md:text-base">
          <li>contact@clinicalai.com</li>
          <li>+1 (555) 234-5678</li>
          <li>Boston, MA</li>
        </ul>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-neutral text-sm md:text-base">
      © 2025 ClinicalAI. All rights reserved.
    </div>
  </footer>
);

export default Footer;
