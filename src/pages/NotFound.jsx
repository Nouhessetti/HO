import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the error for debugging purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">404</h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;