import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
};