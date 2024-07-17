import React from 'react';

const RecipeList: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We&apos;re working hard to bring you this new feature. Stay tuned for updates!
        </p>
        <div className="animate-pulse">
          <svg
            className="w-12 h-12 text-indigo-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M4.929 4.929a10 10 0 0114.142 0m0 0a10 10 0 010 14.142m-14.142 0a10 10 0 010-14.142"
            />
          </svg>
        </div>
        <p className="text-gray-500">
          Thank you for your patience and support.
        </p>
      </div>
    </div>
  );
};

export default RecipeList;
