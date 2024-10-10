import React, { useState } from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item) => {
    setClickedItem(item);
    setTimeout(() => setClickedItem(''), 800); // Longer animation timeout for new style
  };

  return (
    <div>
      <nav className='fixed w-full z-20 top-0 bg-gradient-to-r from-purple-700 to-blue-600 shadow-lg'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <div className='flex flex-row'>
            <h2 className='text-white text-2xl font-bold ml-4 hover:text-yellow-400 transition duration-300'>
              <b>Ritesh</b>
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
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? 'block' : 'hidden'}`}
          >
            <ul
              className={`flex flex-col p-4 md:p-0 mt-4 text-xl border cursor-pointer border-gray-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ${
                isOpen ? 'bg-blue-600 bg-opacity-90' : ''
              }`}
            >
              <Link
                spy={true}
                to='Home'
                activeClass='activeClass'
                onClick={() => handleClick('Home')}
              >
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out ${
                    clickedItem === 'Home' ? 'animate-stylish-flip' : ''
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link
                spy={true}
                to='Overview'
                activeClass='activeClass'
                onClick={() => handleClick('Overview')}
              >
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out ${
                    clickedItem === 'Overview' ? 'animate-stylish-flip' : ''
                  }`}
                >
                  About
                </li>
              </Link>
              <Link
                spy={true}
                to='Projects'
                activeClass='activeClass'
                onClick={() => handleClick('Projects')}
              >
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out ${
                    clickedItem === 'Projects' ? 'animate-stylish-flip' : ''
                  }`}
                >
                  Projects
                </li>
              </Link>
              <Link
                spy={true}
                to='Achievements'
                activeClass='activeClass'
                onClick={() => handleClick('Achievements')}
              >
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out ${
                    clickedItem === 'Achievements' ? 'animate-stylish-flip' : ''
                  }`}
                >
                  Achievements
                </li>
              </Link>
              <Link
                spy={true}
                to='Contact'
                activeClass='activeClass'
                onClick={() => handleClick('Contact')}
              >
                <li
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 hover:text-orange-400 text-white transition duration-300 ease-in-out ${
                    clickedItem === 'Contact' ? 'animate-stylish-flip' : ''
                  }`}
                >
                  Contact
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







// import React, { useState } from 'react';
// import { AiOutlineMenuUnfold } from 'react-icons/ai';
// import { Link } from 'react-scroll';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [clickedItem, setClickedItem] = useState('');

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClick = (item) => {
//     setClickedItem(item);
//     setTimeout(() => setClickedItem(''), 800);
//   };

//   return (
//     <nav className='fixed w-full z-20 top-0 bg-gray-800 shadow-lg transition duration-300'>
//       <div className='max-w-screen-xl flex items-center justify-between mx-auto p-4'>
//         <div className='flex items-center'>
//           <h2 className='text-white text-2xl font-bold ml-4 hover:text-orange-400 transition duration-300'>
//             <b>Ritesh</b>
//           </h2>
//         </div>
//         <div className='flex md:hidden'>
//           <button
//             onClick={toggle}
//             className='inline-flex items-center p-2 text-white rounded-lg focus:outline-none'
//           >
//             <AiOutlineMenuUnfold className='text-2xl' />
//           </button>
//         </div>
//         <div className={`md:flex md:items-center md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
//           <ul className='flex flex-col md:flex-row md:p-0 text-lg border border-gray-200 rounded-lg md:space-x-4 bg-gray-800 md:bg-transparent'>
//             {['Home', 'Overview', 'Projects', 'Achievements', 'Contact'].map((item) => (
//               <Link
//                 key={item}
//                 spy={true}
//                 to={item}
//                 activeClass='activeClass'
//                 onClick={() => handleClick(item)}
//               >
//                 <li
//                   className={`block py-2 px-4 rounded-md hover:bg-gray-700 text-white transition duration-300 ease-in-out ${
//                     clickedItem === item ? 'bg-gray-600' : ''
//                   }`}
//                 >
//                   {item}
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


