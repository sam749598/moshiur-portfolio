import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {currentYear} Moshiur Rahman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;