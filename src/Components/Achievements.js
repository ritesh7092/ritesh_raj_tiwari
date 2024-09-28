import React from 'react';
import { achievements } from '../Constants/index'; // Adjust the path as necessary

const Achievements = () => {
  return (
    <div className='bg-gray-900 text-gray-100 py-10'>
      <div className='flex-row items-center pl-5 justify-center pt-3'>
        <span className='text-3xl font-bold text-teal-400'>
          Achievements
        </span>
        <hr className='w-[35%] border-gray-700 my-2' />
      </div>

      <div className='mt-5 flex flex-wrap justify-center'>
        {/* Competitive Programming Card */}
        {achievements.filter(achievement => achievement.title === "Competitive Programming").map((achievement, index) => (
          <div key={index} className='bg-gray-800 p-5 m-4 rounded-lg shadow-md w-[300px]'>
            <h3 className='text-teal-400 font-bold text-xl'>{achievement.title}</h3>
            <p className='mt-2 text-gray-300'>{achievement.description}</p>
            <div className='flex flex-wrap mt-3'>
              {achievement.icons.map((icon, idx) => (
                <img 
                  key={idx} 
                  src={icon} 
                  alt={achievement.title} 
                  className='w-10 h-10 m-1' // Smaller size for competitive programming icons
                />
              ))}
            </div>
          </div>
        ))}

        {/* Certifications Cards */}
        {achievements.filter(achievement => achievement.title !== "Competitive Programming").map((achievement, index) => (
          <div key={index} className='bg-gray-800 p-5 m-4 rounded-lg shadow-md w-[300px]'>
            <div className='flex flex-col items-center'>
              <img 
                src={achievement.icons[0]} 
                alt={achievement.title} 
                className='w-24 h-24 mb-3' // Increased size for certification images
              />
              <h3 className='text-teal-400 font-bold text-xl text-center'>{achievement.title}</h3>
              <p className='mt-2 text-gray-300 text-center'>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
