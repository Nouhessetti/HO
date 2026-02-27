import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, Info } from 'lucide-react';
import Logo from '../Header/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="flex flex-col space-y-4">
            <Logo className="justify-start" />
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 max-w-xs">
              Master your coding skills through fun and challenging Katas. Join our community of developers today!
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/kata" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                  <Info className="h-4 w-4 mr-2" />
                  Challenges
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>support@katasolution.com</span>
              </li>
              <li className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Kata Dojo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;