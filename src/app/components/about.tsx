import React from 'react';
import { useAbout } from '../hooks/useAbout';

const About: React.FC = () => {
  const { useAboutResponse } = useAbout()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          {
            useAboutResponse.aboutString1
          }
        </p>
        <p className="text-gray-600">
          {
            useAboutResponse.aboutString2
          }
        </p>
      </div>
    </div>
  );
};

export default About;