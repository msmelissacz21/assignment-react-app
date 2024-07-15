import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-300 bg-opacity-40 text-black py-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm">&copy; 2024 Melissa Zuengler. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-black-400 hover:text-orange-500 mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-black-400 hover:text-orange-500 mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-black-400 hover:text-orange-500 mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
