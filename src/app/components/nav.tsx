import React, {useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //Toggle to handle navbar visibility
  const handleNav = ()=> {
    setNav(!nav);
  }

  //Array with navbar items
  //Todo: fix this routing so it works with both cloudfront and local 
  const navItems = [
    { id: 1, text: 'Home', path: "/"},
    { id: 2, text: 'Recipes', path: "/recipelist.html"},
    { id: 3, text: 'About', path: "/about.html"},
    { id: 4, text: 'Contact', path: "/contact.html"}
  ];
  


  return (
    <div className='bg-black flex justify-between items-center h-24 mx-auto px-4 text-white'>
      {/* Logo */}
      <img src="./photos/glazy-ramen-bowl.png" alt="Logo" className="h-12" />
      <h1 className='w-full text-3xl font-bold text-[#52595D] m-5'>Recipies Web App</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#6A7280] w-[7em] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            <a href={item.path}>
                <p className='mx-auto w-fit'>{item.text}</p>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#52595D] m-4'>MZP</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#52595D] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <a href={item.path}>
                <p className='mx-auto w-fit'>{item.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
