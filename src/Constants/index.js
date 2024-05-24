import tailwind from "../assests/tailwindcss.jpg"
import html from "../assests/html.png"
import css from "../assests/css.png"
import javascript from "../assests/js.png"
import web from "../assests/webdeveloper.jpg"
import ux from "../assests/uiuxdesigne.jpg"
import reactjs from "../assests/reactjs.png"
import reacr from "../assests/reactdev.jpg"
import git from "../assests/git.png"
import nodejs from "../assests/node-js.png"
import mongodb from "../assests/mongodb.jpg"
import python from "../assests/python.jpg"
import pro1 from "../assests/tic-tac-toe-images.jpg"
import pro2 from "../assests/musicimages.jpg"



const services = [ 
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
        "Webapplication made using react styled using css its a two player tic-tac-toe",
        tags:[
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
        source_deploy_link: "https://tic-tac-toe-ritesh.netlify.app/"
    },
    
    {
        name: "MusiPlay",
        description:
        "Webapplication made using html, css, and javascript for users to select a song from given choices to play",
        tags:[
            {
                name: "Javascript",
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
        source_deploy_link: "https://musiplay.netlify.app/"
    },
    
];

export { services, technology, projects };
