import React from 'react'
import Profile from "../assests/profile.png"
import { Styles } from '../utils/Style'
import Resume from '../assests/resume.pdf'
import { TiArrowDownOutline } from "react-icons/ti"
import '../App.css'

function About() {
    return (
        <div className=' flex flex-wrap justify-center items-center  h-screen ' id='Home'>

            <div className='flex-1 py-4 pl-20'>
                <div className="flex justify-start">
                    <span className={`${Styles.heroHeadText} text-left`}>
                        Hi, I'm <span className='text-orange-600'>
                            Ritesh Raj Tiwari
                        </span>
                        <br />
                        <span className={Styles.heroSubtext}>
                            I am a Programmer &
                            <br />
                            MERN Stack Developer
                        </span>
                    </span>
                </div>

                <br />
                <div className='w-[14rem]'>
                    <a
                        href={Resume}
                        download="Resume"
                        target='blank'
                        rel="noreferrer"
                    >
                        <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 shadow-lg hover:shadow-pink-500 ' ><TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange'>
                        </TiArrowDownOutline> Resume

                        </div>

                    </a>
                </div>

            </div>
            <div className=' object-cover flex justify-center items-center w-[257px] h-[257px]'>
                <img src={Profile} alt='profile' className='w-full h-full rounded-full object-cover element object-contain p-4' />
            </div>



        </div>
    )
}
export default About