import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md py-1' 
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm py-2'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Logo />
            
            <div className="hidden lg:flex items-center flex-1 ml-10">
              <Navigation />
            </div>
            
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <AuthButtons />
            </div>
            
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <Button 
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* The Menu stays "mounted" but hidden via CSS transforms */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;