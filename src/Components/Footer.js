import React from 'react'
import { GrGithub, GrLinkedin, GrMail } from 'react-icons/gr'

function Footer() {
  return (
    <div>
      <div className='w-[screen] bg-black'>
        <div className='flex flex-row flex-wrap p-2 justify-around '>
          <a href='https://www.linkedin.com/in/ritesh-raj-tiwari-b084a0259/' target='blank' className='text-lg flex flex-row text-violet-300'>
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrLinkedin className='text-white'></GrLinkedin>
            </div>
            <span className='text-white ml-1 mt--[0.1rem]'>linkedin.com/ritesh</span>
          </a>


          <a href='https://github.com/ritesh7092/' target='blank' className='text-lg flex flex-row text-violet-300'>
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrGithub className='text-white'></GrGithub>
            </div>
            <span className='text-white ml-1 mt--[0.1rem]'>github.com/ritesh</span>
          </a>


          <a href='riteshrajtiwari.999@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300'>
            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
              <GrMail className='text-white'></GrMail>
            </div>
            <span className='text-white ml-1 mt--[0.1rem]'>riteshrajtiwari.999@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
