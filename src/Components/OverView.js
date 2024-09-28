import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technology, services } from "../Constants";
import "./style.css";

function OverView() {
  return (
    <div className='bg-gray-900 text-gray-100 py-10'>
      <div className='container mx-auto px-4' id='Overview'> {/* Container for better centering */}
        
        {/* Introduction Section */}
        <div className='flex flex-col items-center justify-center mb-8'>
          <h2 className={`${Styles.sectionHeadText} text-3xl font-bold text-center`}>Introduction</h2>
          <hr className='mx-auto w-1/3 border-gray-700 mt-2' />
          <p className={`${Styles.sectionText} mt-4 text-lg leading-relaxed text-center`}>
            As a dedicated computer science student with a strong focus on software development, I am currently learning Java alongside my studies. I possess hands-on experience in JavaScript and have worked extensively with frameworks like React.js, Node.js, and Next.js. My interests extend to Machine Learning and Artificial Intelligence, where I am eager to apply my skills to tackle complex problems. I am passionate about creating scalable and user-friendly applications and thrive in collaborative environments. I am committed to continuous learning and look forward to contributing innovative solutions in software development!
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-wrap justify-center mt-8">
          {services.map((service) => (
            <div key={service.title} className="m-4">
              <Tilt
                className="parallax-effect-glare-scale"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.5}
                scale={1.02}
                gyroscope={true}
              >
                <div className="p-3 m-3 flex flex-col justify-evenly items-center bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <img
                    className="h-[100px] w-[100px]"
                    src={service.icon}
                    alt={service.title}
                  />
                  <div className="m-5 text-teal-400">{service.title}</div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className='flex flex-col items-center justify-center mt-10'>
          <h2 className='text-3xl font-bold text-teal-400'>Technical Skills</h2>
          <hr className='w-[35%] border-gray-700 my-2' />
        </div>
        
        <div className="flex flex-wrap justify-center items-center mt-8">
          {technology.map((tech) => (
            <div
              key={tech.name}
              className="m-4 h-[100px] w-[100px] rounded-3xl shadow-lg bg-gray-800 border border-teal-400 hover:shadow-orange-300 transition-shadow duration-300"
            >
              <img className="p-2" src={tech.icon} alt={tech.name} />
              <div className="text-teal-400 text-center">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverView;
