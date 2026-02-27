import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ className = "", vertical = false }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'News', path: '/news' },
    { name: 'Kata', path: '/kata' },
  ];

  // Dropdown menu items
  const productsDropdown = [
    { name: 'All Courses', path: '/products' },
    { name: 'Web Development', path: '/courses/web-development' },
    { name: 'Data Science', path: '/courses/data-science' },
  ];

  const newsDropdown = [
    { name: 'Latest News', path: '/news' },
    { name: 'Categories', path: '/news/categories' },
  ];

  return (
    <nav className={cn(className)}>
      <ul className={cn(
        'flex gap-x-6 items-center',
        vertical && 'flex-col gap-y-4'
      )}>
        {navItems.map((item) => {
          // Logic to determine if the link or its sub-routes are active
          const isActive = location.pathname === item.path;
          const isProductsPage = item.path === '/products' && location.pathname.startsWith('/courses');
          const isNewsPage = item.path === '/news' && location.pathname.startsWith('/news');
          
          return (
            <li key={item.name} className="relative group">
              <Link
                to={item.path} 
                className={cn(
                  'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors nav-item px-2 py-1',
                  (isActive || isProductsPage || isNewsPage) && 'text-blue-600 dark:text-blue-400',
                  vertical && 'text-lg py-2'
                )}
              >
                {item.name}
              </Link>
              
              {/* Desktop Dropdowns - Triggered by the 'group-hover' class on parent <li> */}
              {item.path === '/products' && !vertical && (
                <div className="absolute left-0 top-full mt-1 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {productsDropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
              
              {item.path === '/news' && !vertical && (
                <div className="absolute left-0 top-full mt-1 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {newsDropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;