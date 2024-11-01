import React from "react";
import Tilt from "react-parallax-tilt";
import {certificates} from "../Constants"; // Your certificates data file
import meta from "../assests/meta-front-end.png"; // Import the main certificate image

const Certification = () => {
  return (
    <div className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-4" id="Certification">
        {/* Certification Section Title */}
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
            Certifications
          </h2>
          <hr className="w-[35%] border-gray-700 my-2" />
        </div>

        {/* Main Certification (Meta Front-End Developer) */}
        <div className="flex flex-col items-center justify-center mb-8">
          {/* Certification Image */}
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.5}
            scale={1.02}
            gyroscope={true}
          >
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={meta}
                alt="Meta Front-End Developer Professional Certificate"
                className="w-full max-w-md rounded-md object-contain"
              />
            </div>
          </Tilt>

          {/* Main Certification Description with Color Effects */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-xl mt-4">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Meta Front-End Developer Professional Certificate
            </h3>
            <p className="text-white leading-relaxed mb-4">
              A comprehensive certification that validates my expertise in
              front-end web development. This professional program, offered by
              Meta (formerly Facebook), equipped me with advanced skills in
              modern web technologies, including:
            </p>
            <ul className="text-white list-disc list-inside mb-4 space-y-2">
              <li>Advanced React.js Development</li>
              <li>Responsive Web Design Techniques</li>
              <li>Front-End Development Best Practices</li>
              <li>User Interface (UI) Design Principles</li>
            </ul>
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1EQIAVIvnfMwB7u300ujV1_U0xpkoVozK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 text-white hover:bg-teal-500 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>

        {/* Additional Certifications with Tilt Effect */}
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center space-x-0 md:space-x-6 space-y-6 md:space-y-0">
          {certificates.map((cert, index) => (
            index > 0 && ( // Exclude the first one
              <div key={index} className="flex flex-col items-center">
                {/* Tilt for Certification with Icon Inside */}
                <Tilt
                  className="parallax-effect-glare-scale w-40 l-100" // Fixed width for description box
                  perspective={500}
                  glareEnable={true}
                  glareMaxOpacity={0.5}
                  scale={1.02}
                  gyroscope={true}
                >
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
                    {/* Certification Icon */}
                    <div className="bg-gray-700 p-2 rounded-full shadow-lg mb-4 w-16 h-16 flex items-center justify-center border-4 border-blue-400 transition-transform duration-300 transform hover:scale-105">
                      <img
                        src={cert.icon}
                        alt={`${cert.title} Icon`}
                        className="rounded-full object-cover w-14 h-14" // Fixed size for icons
                      />
                    </div>

                    {/* Certification Title and Description */}
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{cert.title}</h3>
                    <p className="text-white leading-relaxed text-center">{cert.description}</p>

                    {/* View Certificate Button */}
                    <div className="flex justify-center mt-4">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-teal-600 text-white hover:bg-teal-500 font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </Tilt>
              </div>
            )
          ))}
        </div>

      </div>
    </div>
  );
};

export default Certification;
