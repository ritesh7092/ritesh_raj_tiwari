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
import pro1 from "../assests/tic-tac-toe-images.jpg";
import pro2 from "../assests/musicimages.jpg";
import medicare from "../assests/medicare.png"; // Import MediCare image
import programmer from '../assests/programmer.jpg';
import codeforces from '../assests/codeforces.png';
import codechef from '../assests/codechef.png';
import leetcode from '../assests/leetcode.png';
import metaCertificate from '../assests/meta-front-end.png';
import certificateInternship from '../assests/certificate of internship coding ninja.jpeg'
import cplusplus from '../assests/c++.png'
import clang from '../assests/C.jpg'
import java from '../assests/javaImg.png'
import nextj from '../assests/nextjsImg.png'
import sql from '../assests/SQL.jpeg'
import mysql from '../assests/mySql.png'


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
];

const achievements = [
    {
        title: "Competitive Programming",
        description: "Solved over 1500 problems on platforms like Codeforces, Codechef, LeetCode, GFG, AtCoder, and HackerRank, with a focus on data structures and algorithms.",
        icons: [codeforces, codechef, leetcode], // Add icons for competitive programming
    },
    {
        title: "Coding Ninjas Certificate of Internship",
        description: "Recognized for outstanding performance as a Campus Ambassador, hosting events and organizing contests that significantly enhanced participant engagement.",
        icons: [certificateInternship], // Add the certificate image
    },
    {
        title: "Meta Front-End Developer Certification",
        description: "Completed all 9 modules, quizzes, and assignments with top grades, showcasing proficiency in front-end development.",
        icons: [metaCertificate], // Add the Meta certification image
    }
];


export { services, technology, projects, achievements };
