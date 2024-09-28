import React from 'react';
import { Styles } from '../utils/Style';
import './style.css';
import { projects } from '../Constants';
import Tilt from 'react-parallax-tilt';
import { SiGithub, SiNetlify } from 'react-icons/si';

function Projects() {
  return (
    <div className='bg-gray-900 text-gray-100 py-10' id='Projects'>
      <div className='p-3'>
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className='w-[35%] border-gray-700' />
        <div className={Styles.sectionText}>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </div>
      </div>

      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {projects.map((project) => (
          <Tilt
            key={project.name}
            className='w-[250px] h-[400px] flex flex-col justify-evenly
              shadow-lg m-4 items-center bg-gray-800 border border-teal-600
              hover:shadow-2xl hover:shadow-teal-400 rounded-xl transition-shadow duration-300'
          >
            <div>
              <div className='flex justify-center items-center mb-3'>
                <div className='h-[35px] w-[35px] m-3 bg-slate-50 rounded-full shadow-lg 
                  shadow-teal-500 flex justify-center items-center'>
                  <a href={project.source_deploy_link} target='_blank' rel='noopener noreferrer'>
                    <SiNetlify className="text-2xl font-bold text-teal-600" />
                  </a>
                </div>
                <div className='h-[35px] w-[35px] m-3 bg-slate-50 rounded-full shadow-lg 
                  shadow-teal-500 flex justify-center items-center'>
                  <a href={project.source_code_link} target='_blank' rel='noopener noreferrer'>
                    <SiGithub className="text-2xl font-bold text-teal-600" />
                  </a>
                </div>
              </div>
              {/* Reduced image size */}
              <img src={project.image} alt={project.name} className='h-[150px] w-[200px] self-center border-2 border-teal-400
                rounded-2xl shadow-lg' />
            </div>

            <div className='text-xl text-teal-400 font-extrabold'>{project.name}</div> {/* Adjusted font size */}

            <div className='text-center'>
              <span className='text-[#D3D3D3]'>{project.description}</span> {/* Light gray for visibility */}
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
