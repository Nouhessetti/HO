import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = ({ className, mobile = false }) => {
  const location = useLocation();
  
  const links = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products', 
      sublinks: [
        { name: 'All Courses', path: '/products' },
        { name: 'Web Development', path: '/courses/web-development' },
        { name: 'Data Science', path: '/courses/data-science' },
      ]
    },
    { 
      name: 'News', 
      path: '/news', 
      sublinks: [
        { name: 'Latest News', path: '/news' },
        { name: 'Categories', path: '/news/categories' },
      ]
    },
    { name: 'Kata', path: '/kata' },
    { name: 'Kata2', path: '/kata2' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className={className}>
      <ul className={`flex ${mobile ? 'flex-col space-y-4' : 'space-x-8'}`}>
        {links.map((link) => {
          // Check if parent or any child route is active
          const isParentActive = location.pathname === link.path;
          const isChildActive = link.sublinks?.some(sub => location.pathname === sub.path);
          const isActive = isParentActive || isChildActive;

          return (
            <li key={link.name} className={mobile ? 'mb-2' : ''}>
              <Link
                to={link.path}
                className={`nav-item text-base font-medium transition-colors duration-200
                  ${isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 't http://localhost:5173/ext-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                  }`}
              >
                {link.name}
              </Link>
              
              {/* Nested mobile links - only renders if 'mobile' prop is true */}
              {link.sublinks && mobile && (
                <ul className="ml-4 mt-2 space-y-2">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.path}>
                      <Link
                        to={sublink.path}
                        className={`nav-item text-sm font-medium transition-colors duration-200
                          ${location.pathname === sublink.path
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                          }`}
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;