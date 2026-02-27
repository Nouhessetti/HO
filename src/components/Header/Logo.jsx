import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

// By adding = "", we tell the editor "if className isn't provided, use this empty string"
const Logo = ({ className = "" }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <Link to="/" className="flex items-center">
        <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-md flex items-center justify-center mr-2 shadow-sm">
          <span className="text-white font-bold text-lg">L</span>
        </div>
        
        <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          LogoApp
        </span>
      </Link>
    </div>
  );
};

export default Logo;