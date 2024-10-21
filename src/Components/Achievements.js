import React from 'react';
import { achievements } from '../Constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

const Achievements = () => {
  return (
    <div id="Achievements" className='bg-gray-900 text-gray-100 py-10'>
      <div className='container mx-auto px-4'>
        
        {/* Header */}
        <div className='flex-row items-center justify-center pt-3 text-center'>
  <span
    className='text-3xl font-bold text-teal-400 sm:text-2xl lg:text-4xl xl:text-5xl' // Increased sizes for larger screens
    style={{
      background: "linear-gradient(to right, #ff4a57, #1D4ED8)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontFamily: "Poppins, sans-serif",
    }}
  >
    Achievements
  </span>
  <hr className='w-[35%] border-gray-700 my-2 mx-auto' />
</div>


        {/* Swiper for Achievements */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide key={index}>
              <div className='bg-gray-800 p-6 rounded-lg shadow-md w-[300px] h-[320px] mx-auto
                  sm:w-[220px] sm:h-[220px] xs:w-[180px] xs:h-[200px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[380px]'> {/* Increased size for large screens */}
                
                {/* Competitive Programming Achievements with Increased Content Size */}
                {achievement.title === "Competitive Programming" && (
                  <>
                    <h3 className='text-teal-400 font-bold text-xl lg:text-2xl'>{achievement.title}</h3> {/* Increased title size for large screens */}
                    <p className='mt-2 text-gray-300 text-sm lg:text-lg'>{achievement.description}</p> {/* Increased description size for large screens */}
                    <div className='flex flex-col justify-center items-center h-full'>
                      <div className='flex justify-center items-start mt-[-100px] sm:mt-[-70px] xs:mt-[-50px]'>
                        {achievement.icons.map((icon, idx) => (
                          <img 
                            key={idx} 
                            src={icon} 
                            alt={achievement.title} 
                            className='w-full h-full max-w-[90px] max-h-[90px] m-2 object-contain 
                            sm:max-w-[50px] sm:max-h-[50px] xs:max-w-[40px] xs:max-h-[40px]' 
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Other Achievements */}
                {achievement.title !== "Competitive Programming" && (
                  <div className='flex flex-col items-center'>
                    <img 
                      src={achievement.icons[0]} 
                      alt={achievement.title} 
                      className='w-24 h-24 mb-3 sm:w-16 sm:h-16 xs:w-12 xs:h-12 lg:w-28 lg:h-28' 
                    />
                    <h3 className='text-teal-400 font-bold text-xl text-center sm:text-lg xs:text-sm lg:text-2xl'>{achievement.title}</h3>
                    <p className='mt-2 text-gray-300 text-center text-sm sm:text-xs xs:text-[10px] lg:text-base'>{achievement.description}</p>

                    {achievement.link && (
                      <a 
                        href={achievement.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='mt-3 text-teal-400 hover:underline flex items-center text-sm xs:text-xs lg:text-base'>
                        View More
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
          
          {/* Slider Controls */}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Achievements;
