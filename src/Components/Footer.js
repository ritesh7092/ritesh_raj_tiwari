import React from 'react';
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr';

function Footer() {
  return (
    <div className='bg-gray-800'>
      <div className='flex flex-row flex-wrap justify-around p-4'>
        <a
          href='https://www.linkedin.com/in/ritesh-raj-tiwari-b084a0259/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-sm text-violet-300 hover:text-violet-400 transition duration-300'
        >
          <div className='h-8 w-8 rounded-full flex justify-center items-center bg-violet-500 mr-2'>
            <GrLinkedin className='text-white' />
          </div>
          <span className='text-white'>linkedin.com/ritesh</span>
        </a>

        <a
          href='https://github.com/ritesh7092/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center text-sm text-violet-300 hover:text-violet-400 transition duration-300'
        >
          <div className='h-8 w-8 rounded-full flex justify-center items-center bg-violet-500 mr-2'>
            <GrGithub className='text-white' />
          </div>
          <span className='text-white'>github.com/ritesh</span>
        </a>

        <a
          href='mailto:riteshrajtiwari.999@gmail.com'
          className='flex items-center text-sm text-violet-300 hover:text-violet-400 transition duration-300'
        >
          <div className='h-8 w-8 rounded-full flex justify-center items-center bg-violet-500 mr-2'>
            <GrMail className='text-white' />
          </div>
          <span className='text-white'>riteshrajtiwari.cse@gmail.com</span>
        </a>
      </div>
      <div className='text-center text-gray-400 text-sm p-2'>
        &copy;  Ritesh Raj Tiwari. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
