import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='fixed w-full z-20 top-0 bg-gradient-to-r from-purple-700 to-blue-600 shadow-lg'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex flex-row'>
            <h2 className='text-white text-2xl font-bold ml-4 hover:text-yellow-400 transition duration-300'>
              <b>Portfolio</b>
            </h2>
          </div>
          <div className='flex md:order-2 bg-blue-700 rounded-lg md:hidden focus:ring-2'>
            <button
              onClick={toggle}
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:ring-2 focus:ring-gray-300'
            >
              <AiOutlineMenuUnfold className='text-white text-lg' />
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isOpen ? 'bg-blue-600 bg-opacity-90' : ''
              }`}
            >
              <Link spy={true} to='Home' activeClass='activeClass'>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out'>
                    Home
                  </div>
                </li>
              </Link>
              <Link spy={true} to='Overview' activeClass='activeClass'>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out'>
                    About
                  </div>
                </li>
              </Link>
              <Link spy={true} to='Projects' activeClass='activeClass'>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out'>
                    Projects
                  </div>
                </li>
              </Link>
              <Link spy={true} to='Contact' activeClass='activeClass'>
                <li>
                  <div className='block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out'>
                    Contact
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
