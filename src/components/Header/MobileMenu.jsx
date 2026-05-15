import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import AuthButtons from './AuthButtons';
import { cn } from '@/lib/utils';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(null);
  const menuRef = useRef(null);

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

  // ✅ Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  // ✅ Auto-close on navigation
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // ✅ Focus Trap (ONLY when open)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const focusable = menuRef.current?.querySelectorAll(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const toggleSubmenu = (itemName) => {
    setExpandedMenu(expandedMenu === itemName ? null : itemName);
  };

  return (
    <>
      {/* ✅ Backdrop FIXED */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden z-[70]",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* ✅ Panel FIXED */}
      <div 
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white dark:bg-gray-900 shadow-2xl lg:hidden",
          "z-[80] flex flex-col transform transition-all duration-300 ease-in-out",
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b dark:border-gray-800">
          <span className="font-bold text-xl dark:text-white">Navigation</span>
          <button onClick={onClose} className="p-2 text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">
          <nav>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl transition",
                          expandedMenu === item.name
                            ? "bg-gray-100 dark:bg-gray-800"
                            : "text-gray-700 dark:text-gray-300"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 transition-transform",
                            expandedMenu === item.name && "rotate-180"
                          )}
                        />
                      </button>

                      {/* ✅ Smooth submenu */}
                      <div
                        className={cn(
                          "ml-4 space-y-1 transition-all duration-300 overflow-hidden",
                          expandedMenu === item.name
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="p-6 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <AuthButtons vertical />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;