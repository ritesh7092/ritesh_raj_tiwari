import tailwind from "../assests/tailwindcss.jpg";
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/js.png";
import web from "../assests/webdeveloper.jpg";
import ux from "../assests/uiuxdesigne.jpg";
import reactjs from "../assests/reactjs.png";
import reacr from "../assests/reactdev.jpg";
import git from "../assests/git.png";
import nodejs from "../assests/node-js.png";
import mongodb from "../assests/mongodb.jpg";
import python from "../assests/python.jpg";
import myportfolio from "../assests/myportfolio.png"
import pro1 from "../assests/tic-tac-toe-images.jpg";
import pro2 from "../assests/musicimages.jpg";
import medicare from "../assests/medicare.png"; // Import MediCare image
import better from "../assests/better.png"
import programmer from '../assests/programmer1.png';
import codeforces from '../assests/codeforces.png';
import codechef from '../assests/codechef.png';
import leetcode from '../assests/leetcode.png';
import metaCertificate from '../assests/meta-front-end.png';
import certificateInternship from '../assests/certificate of internship coding ninja.jpeg'
import codecombat from '../assests/codecombat.png'
import adobezensolve from '../assests/adobezensolve.png'
import cplusplus from '../assests/c++.png'
import clang from '../assests/C.jpg'
import java from '../assests/javaImg.png'
import nextj from '../assests/nextjsImg.png'
import sql from '../assests/SQL.jpeg'
import mysql from '../assests/mySql.png'
import nextjs from '../assests/nextJs.jpeg'


const services = [ 
    {
        title: "Programmer",
        icon: programmer,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "NextJs Developer",
        icon: nextjs,
    },
    {
        title: "React Developer",
        icon: reacr,
    },
    {
        title: "UI/UX Designer",
        icon: ux,
    },
    
];

const technology = [
    {
        name: "Java",
        icon: java
    },
    {
        name: "C++",
        icon: cplusplus
    },
    {
        name: "C",
        icon: clang
    },
    {
        name: "SQL",
        icon: sql
    },
    {
        name: "MySQL",
        icon: mysql
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reacr,
    },
    {
        name: "Next JS",
        icon: nextj,
    },
    {
        name: "Tailwind",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
];

const projects = [
    {
        name: "Portfolio",
        description:
"My React.js portfolio uses Tailwind CSS for styling, Google Forms for messaging, TS Particles for a dynamic background, and Swiper for showcasing achievements smoothly.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "GoogleForm",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: myportfolio, // Use the imported MediCare image
        source_code_link: "https://github.com/ritesh7092/ritesh_raj_tiwari",
        source_deploy_link: "https://ritesh7092.github.io/ritesh_raj_tiwari/",
    },
    {
        name: "MediCare",
        description:
        "A full-stack appointment booking system built with Next.js, Appwrite, TypeScript, TailwindCSS, ShadCN, and Twilio.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "Appwrite",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: medicare, // Use the imported MediCare image
        source_code_link: "https://github.com/ritesh7092/MediCare_Appointment",
        source_deploy_link: "https://ritesh-medi-care-appointment-vaf9.vercel.app/",
    },
    {
        name: "Tic-Tac-Toe",
        description:
        "Web application made using React styled with CSS. It's a two-player Tic-Tac-Toe game.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
        ],
        image: pro1,
        source_code_link: "https://github.com/ritesh7092/Tic-tac-toe_reactApp",
        source_deploy_link: "https://tic-tac-toe-ritesh.netlify.app/",
    },
    {
        name: "MusiPlay",
        description:
        "Web application made using HTML, CSS, and JavaScript where users can select a song to play from given choices.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "HTML",
                color: "pink-text-gradient",
            },
        ],
        image: pro2,
        source_code_link: "https://github.com/ritesh7092/musiplay",
        source_deploy_link: "https://musiplay.netlify.app/",
    },
    {
        name: "Better(Clone)",
        description:
        "A responsive multi-page web application replicating the design and functionality of Better.com",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: better, // Use the imported MediCare image
        source_code_link: "https://github.com/ritesh7092/Assignment1",
        source_deploy_link: "https://modusbetterritesh.vercel.app/",
    },
];

const achievements = [
    {
        title: "Competitive Programming",
        description: "Solved over 1500 problems on platforms like Codeforces, Codechef, LeetCode, GFG, AtCoder, and HackerRank, with a focus on data structures and algorithms.",
        icons: [codeforces, codechef, leetcode], // Add icons for competitive programming
    },
    {
        title: "Meta Front-End Developer Certification",
        description: "Completed all 9 modules, quizzes, and assignments with top grades, showcasing proficiency in front-end development.",
        icons: [metaCertificate], // Add the Meta certification image
        link: "https://drive.google.com/file/d/1EQIAVIvnfMwB7u300ujV1_U0xpkoVozK/view?usp=sharing",
    },
    {
        title: "Coding Ninjas Certificate of Internship",
        description: "Recognized for outstanding performance as a Campus Ambassador.",
        icons: [certificateInternship], // Add the certificate image
        link: "https://drive.google.com/file/d/1AtlfvyFFZ6HZmh5_Bvix6kD3akf0vINq/view?usp=sharing",
    },
    {
        title: "CodeCombat3",
        description: "Achieved a rank of 450 out of over 15,000 participants in Coding Ninjas Code Combat 3, demonstrating strong problem-solving skills and competitive programming proficiency.",
        icons: [codecombat], // Add the certificate image
        link: "https://drive.google.com/file/d/1yLvqfxviaiMs9kqQo3vHEgqHoN0AC5om/view?usp=sharing",
    },
    {
        title: "Adobe ZenSolve",
        description: "Qualified for Round 2 of the Adobe GenSolve Hackathon after successfully clearing the first round, which involved a coding assessment, showcasing my technical skills and problem-solving abilities.",
        icons: [adobezensolve], // Add the certificate image
        link: "https://drive.google.com/file/d/1s9uzZyfdEOKJTZX1dRAk2i4zALyZydRt/view?usp=sharing",
    },
];

const certificates = [
    {
      title: "Introduction to Front-End Development",
      description: "A comprehensive certification ...",
      icon: metaCertificate,
      link: "https://drive.google.com/file/d/1EQIAVIvnfMwB7u300ujV1_U0xpkoVozK/view?usp=sharing",
    },
    {
      title: "Coding Ninjas Certificate of Internship",
      description: "Recognized for outstanding performance...",
      icon: certificateInternship,
      link: "https://drive.google.com/file/d/1AtlfvyFFZ6HZmh5_Bvix6kD3akf0vINq/view?usp=sharing",
    },
    // Add additional certificates as needed...
  ];
  

export { services, technology, projects, achievements, certificates };
