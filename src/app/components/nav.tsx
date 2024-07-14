import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 fixed top-0 w-full font-sans">
      <div className="flex-shrink-0">
        <img src="./photos/glazy-ramen-bowl.png" alt="Logo" className="h-12" />
      </div>
      <div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-gray-800 hover:text-red-500">Home</a>
          </li>
          <li>
            <a href="/projects" className="text-gray-800 hover:text-red-500">Recipes</a>
          </li>
          <li>
            <a href="/about" className="text-gray-800 hover:text-red-500">About</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-800 hover:text-red-500">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
