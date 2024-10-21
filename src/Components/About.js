import React, { useState, useEffect } from "react";
import Profile from "../assests/profile.png";
import { Styles } from "../utils/Style";
import Resume from "../assests/skillSection.pdf";
import { TiArrowDownOutline } from "react-icons/ti";
import "../App.css";

function About() {
  const interests = ["Java Development", "AI/ML", "Web Development"];
  const [currentInterest, setCurrentInterest] = useState(interests[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % interests.length);
      setCurrentInterest(interests[index]);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, interests]);

  return (
    <div className="flex flex-wrap justify-center items-center py-16 lg:py-24" id="Home">
      {/* Main content with adjusted spacing */}
      <div className="flex-1 py-4 sm:py-10 sm:pl-16 pl-5 mt-12 sm:mt-0 lg:mt-16"> {/* Added lg:mt-16 for large screens */}
        <div className="flex justify-start">
          <span className={`${Styles.heroHeadText} text-left`}>
            <span className="typewriter block sm:inline">
              Hi, I'm <span className="text-gradient block sm:inline">Ritesh Raj Tiwari</span>
            </span>
            <br />
            <span className={`${Styles.heroSubtext} hero-flip-animation mt-1 sm:mt-2`}>
              Passionate Programmer & MERN Stack Developer,<br />
              specializing in <span className="gradient-animation">{currentInterest}</span>.
            </span>
          </span>
        </div>

        {/* Adjust spacing for the resume button */}
        <br />
        <div className="w-[14rem] mt-2 sm:mt-4">
          <a href={Resume} download="Resume" target="blank" rel="noreferrer">
            <div className="p-4 w-[13rem] rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FFB200] text-white flex justify-center items-center border-2 border-transparent hover:border-violet-500 shadow-lg hover:shadow-violet-500 transform transition-transform duration-300 ease-in-out hover:scale-105">
              <TiArrowDownOutline className="text-lg mr-3 mt-1" />
              <span className="font-semibold text-lg">Resume</span>
            </div>
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center items-center w-[200px] h-[200px] mt-4 sm:w-[250px] sm:h-[250px] sm:ml-10 lg:mt-16"> {/* Added lg:mt-16 for large screens */}
        <img
          src={Profile}
          alt="profile"
          className="w-full h-full rounded-full object-cover element object-contain p-4"
        />
      </div>
    </div>
  );
}

export default About;
