import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import AuthButtons from './AuthButtons';
import { cn } from '@/lib/utils';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Products', 
      path: '/products',
      subItems: [
        { name: 'All Courses', path: '/products' },
        { name: 'Web Development', path: '/courses/web-development' },
        { name: 'Data Science', path: '/courses/data-science' },
      ]
    },
    { 
      name: 'News', 
      path: '/news',
      subItems: [
        { name: 'Latest News', path: '/news' },
        { name: 'Categories', path: '/news/categories' },
      ]
    },
    { name: 'Kata', path: '/kata' },
    { name: 'Admin', path: '/admin' },
  ];

  // Automatically close menu when the user navigates to a new page
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSubmenu = (itemName) => {
    setExpandedMenu(expandedMenu === itemName ? null : itemName);
  };

  const isActiveRoute = (path, subItems) => {
    if (location.pathname === path) return true;
    if (subItems) {
      return subItems.some(item => location.pathname === item.path);
    }
    return false;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - dims the content behind the menu */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
        onClick={onClose}
        style={{ opacity: isOpen ? 1 : 0 }}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={cn(
          "fixed top-16 right-0 bottom-0 w-full sm:w-80 z-50 lg:hidden",
          "bg-white dark:bg-gray-900 shadow-2xl",
          "transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <div>
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.name)}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-lg",
                            "text-base font-medium transition-colors",
                            isActiveRoute(item.path, item.subItems)
                              ? "bg-primary/10 text-primary"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              expandedMenu === item.name && "rotate-180"
                            )}
                          />
                        </button>
                        
                        {/* Submenu Accordion */}
                        <div 
                          className={cn(
                            "ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-200",
                            expandedMenu === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={cn(
                                "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === subItem.path
                                  ? "bg-primary/10 text-primary"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          isActiveRoute(item.path)
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social / Auth Actions - Utilizes the vertical prop from AuthButtons */}
          <div className="border-t dark:border-gray-800 px-4 py-6">
            <AuthButtons vertical />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;