import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our website! We are dedicated to providing the best service
          to our customers. Our team works hard to meet your needs and exceed
          your expectations.
        </p>
        <p className="text-gray-600">
          Our mission is to deliver high-quality products and ensure customer
          satisfaction. Thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default About;