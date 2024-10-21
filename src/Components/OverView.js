import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { technology, services } from "../Constants";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function OverView() {
  const [visibleDots, setVisibleDots] = useState(0);
  const skillsRef = useRef(null);

  // Calculate the width of each skill and number of skills that can be visible
  const skillWidth = 150;
  const visibleSkillsCount = Math.floor(window.innerWidth / skillWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const scrollLeft = skillsRef.current.scrollLeft;
        const scrollWidth = skillsRef.current.scrollWidth;
        const clientWidth = skillsRef.current.clientWidth;

        const totalSkills = technology.length;
        const totalVisibleSkills = Math.floor(clientWidth / skillWidth);

        const startIndex = Math.floor(scrollLeft / skillWidth);
        const endIndex = Math.min(startIndex + totalVisibleSkills, totalSkills);

        setVisibleDots(endIndex - startIndex);
      }
    };

    const skillsElement = skillsRef.current;
    if (skillsElement) {
      skillsElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (skillsElement) {
        skillsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4" id="Overview">
        {/* Introduction Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h2
            className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center leading-tight transition-all duration-300 ease-in-out"
            style={{
              background: "linear-gradient(to right, #ff4a57, #1D4ED8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Introduction
          </h2>
          <hr className="mx-auto w-1/3 border-gray-700 mt-2" />
          <p
            className="w-3/4 justify-between mt-4 text-[18px] leading-[28px] text-center px-4"
            style={{
              color: "#cfd8dc", // Light gray for visibility
              fontFamily: "Roboto, sans-serif",
              lineHeight: "30px",
              maxWidth: "40rem",
            }}
          >
            I'm a computer science engineering student at Indian Institute of
            Information Technology (IIIT), Bhagalpur. As a dedicated computer
            science student with a strong focus on software development, I am
            currently learning Java alongside my studies. I possess hands-on
            experience in JavaScript and have worked extensively with frameworks
            like React.js, Node.js, and Next.js. My interests extend to Machine
            Learning and Artificial Intelligence, where I am eager to apply my
            skills to tackle complex problems. I am passionate about creating
            scalable and user-friendly applications and thrive in collaborative
            environments. I am committed to continuous learning and look forward
            to contributing innovative solutions in software development!
            <br />I have earned the{" "}
            <span className="text-gradient font-bold">
              Meta Front-End Developer Professional Certificate
            </span>
            , which showcases my proficiency in front-end technologies and
            validates my skills in building responsive and user-centric web
            applications.
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
                    className="h-[80px] w-[80px] object-contain"
                    src={service.icon}
                    alt={service.title}
                  />
                  <div className="m-5 text-teal-400 text-center">
                    {service.title}
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col items-center justify-center mt-10">
          {/* <h2
            className="text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-center leading-tight transition-all duration-300 ease-in-out"
            style={{
              background: "linear-gradient(to right, #ff4a57, #1D4ED8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Technical Skills
          </h2> */}
          <h2 className='text-3xl font-bold text-teal-400'>Technical Skills</h2>
          {/* <h2 className="text-3xl font-bold text-teal-400">Technical Skills</h2> */}
          <hr className="w-[35%] border-gray-700 my-2" />
        </div>

        {/* Scrollable Skills Section */}
        <div
          ref={skillsRef}
          className="overflow-x-auto scrollbar-hidden whitespace-nowrap py-4"
        >
          <div className="inline-flex">
            {technology.map((tech) => (
              <div
                key={tech.name}
                className={`inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-center p-4 w-[100px] h-[100px] rounded-full transition-transform duration-300 mx-4 flex flex-col items-center justify-center`}
              >
                <img
                  className="h-8 w-8 object-contain"
                  src={tech.icon}
                  alt={tech.name}
                />
                <div className="text-white font-medium text-lg">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator Below Skills */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {Array.from({
              length: Math.ceil(technology.length / visibleSkillsCount),
            }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 ${
                  index < visibleDots ? "bg-teal-400" : "bg-gray-500"
                } rounded-full`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;

















// import React, { useEffect, useRef, useState } from "react";
// import Tilt from "react-parallax-tilt";
// import { Styles } from "../utils/Style";
// import { technology, services } from "../Constants";
// import "./style.css";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// function OverView() {
//   const [visibleDots, setVisibleDots] = useState(0);
//   const skillsRef = useRef(null);

//   // Calculate the width of each skill and number of skills that can be visible
//   const skillWidth = 150; // Width of each skill box
//   const visibleSkillsCount = Math.floor(window.innerWidth / skillWidth); // Calculate visible skills based on window width

//   useEffect(() => {
//     const handleScroll = () => {
//       if (skillsRef.current) {
//         const scrollLeft = skillsRef.current.scrollLeft;
//         const scrollWidth = skillsRef.current.scrollWidth;
//         const clientWidth = skillsRef.current.clientWidth;

//         // Calculate how many skills are currently in view
//         const totalSkills = technology.length;
//         const totalVisibleSkills = Math.floor(clientWidth / skillWidth);

//         // Calculate the number of skills visible based on scroll position
//         const startIndex = Math.floor(scrollLeft / skillWidth);
//         const endIndex = Math.min(startIndex + totalVisibleSkills, totalSkills);

//         // Update the number of visible dots
//         setVisibleDots(endIndex - startIndex);
//       }
//     };

//     const skillsElement = skillsRef.current;
//     if (skillsElement) {
//       skillsElement.addEventListener("scroll", handleScroll);
//     }

//     // Clean up the event listener on unmount
//     return () => {
//       if (skillsElement) {
//         skillsElement.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className='bg-gray-900 text-gray-100 py-10'>
//       <div className='container mx-auto px-4' id='Overview'>

//         {/* Introduction Section */}
//         <div className='flex flex-col items-center justify-center mb-8'>
//           <h2 className={`text-[#3730A3] md:text-[56px] sm:text-[48px] xs:text-[36px] text-[28px] font-semibold leading-tight transition-all duration-300 ease-in-out text-center`}>
//             Introduction
//           </h2>
//           <hr className='mx-auto w-1/3 border-gray-700 mt-2' />
//           <p className={`w-3/4 justify-between mt-4 text-gray-500 text-[18px] leading-[28px] font-light transition-all duration-300 ease-in-out text-lg leading-relaxed text-center px-4`}>
//             I'm a computer science engineering student at Indian Institute of Information Technology (IIIT), Bhagalpur.
//             As a dedicated computer science student with a strong focus on software development, I am currently learning Java alongside my studies.
//             I possess hands-on experience in JavaScript and have worked extensively with frameworks like React.js, Node.js, and Next.js.
//             My interests extend to Machine Learning and Artificial Intelligence, where I am eager to apply my skills to tackle complex problems.
//             I am passionate about creating scalable and user-friendly applications and thrive in collaborative environments.
//             I am committed to continuous learning and look forward to contributing innovative solutions in software development!
//             <br />
//             I have earned the <span className="text-gradient font-bold">Meta Front-End Developer Professional Certificate</span>,
//             which showcases my proficiency in front-end technologies and validates my skills in building responsive and user-centric web applications.
//             {/* <span className="flex items-center justify-center">
//               <a href="https://drive.google.com/file/d/1EQIAVIvnfMwB7u300ujV1_U0xpkoVozK/view?usp=sharing" className="certification-link" target="_blank" rel="noopener noreferrer">
//                 View Certification
//               </a>
//             </span> */}
//           </p>
//         </div>

//         {/* Services Section */}
//         <div className="flex flex-wrap justify-center mt-8">
//           {services.map((service) => (
//             <div key={service.title} className="m-4">
//               <Tilt
//                 className="parallax-effect-glare-scale"
//                 perspective={500}
//                 glareEnable={true}
//                 glareMaxOpacity={0.5}
//                 scale={1.02}
//                 gyroscope={true}
//               >
//                 <div className="p-3 m-3 flex flex-col justify-evenly items-center bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//                   <img
//                     className="h-[80px] w-[80px] object-contain" // Adjusted size for better responsiveness
//                     src={service.icon}
//                     alt={service.title}
//                   />
//                   <div className="m-5 text-teal-400 text-center">{service.title}</div>
//                 </div>
//               </Tilt>
//             </div>
//           ))}
//         </div>

//         {/* Technologies Section */}
//         <div className='flex flex-col items-center justify-center mt-10'>
//           <h2 className='text-3xl font-bold text-teal-400'>Technical Skills</h2>
//           <hr className='w-[35%] border-gray-700 my-2' />
//         </div>

//         {/* Scrollable Skills Section */}
//         <div ref={skillsRef} className="overflow-x-auto scrollbar-hidden whitespace-nowrap py-4">
//           <div className="inline-flex">
//             {technology.map((tech) => (
//               <div
//                 key={tech.name}
//                 className={`inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-center p-4 w-[100px] h-[100px] rounded-full transition-transform duration-300 mx-4 flex flex-col items-center justify-center`} // Adjusted size for better responsiveness
//               >
//                 <img
//                   className="h-8 w-8 object-contain"  // Adjusted size for better responsiveness
//                   src={tech.icon}
//                   alt={tech.name}
//                 />
//                 <div className="text-white font-medium text-lg">{tech.name}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator Below Skills */}
//         <div className="flex justify-center mt-4">
//           <div className="flex space-x-2">
//             {Array.from({ length: Math.ceil(technology.length / visibleSkillsCount) }).map((_, index) => (
//               <div key={index} className={`h-2 w-2 ${index < visibleDots ? 'bg-teal-400' : 'bg-gray-500'} rounded-full`} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OverView;
