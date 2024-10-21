import React from 'react';

const timelineData = [
  {
    title: 'INDIGO SQUAD MEMBER AT IIT BOMBAY',
    organization: 'IIT BOMBAY',
    date: 'Feb 2023',
    imageUrl: '/assets/indigo-11497366.png',
    description: [
      "I learned a lot as an Indigo Squad Member, being involved in all the events organized by Mood Indigo.",
      "I acquired leadership skills by conducting various sessions in colleges and interacting with new people.",
    ],
    certificateLink: '#', // Replace with actual link
  },
  {
    title: 'CAMPUS MANTRI',
    organization: 'GFG',
    date: 'AUG 23 – AUG 24',
    imageUrl: '/assets/gfg-f153b3a0.png',
    description: [
      "This program will be a platform for students passionate about coding and very active in programming competitions.",
      "Geeksforgeeks is now planning to develop communities around campuses.",
    ],
    certificateLink: '#', // Replace with actual link
  },
  {
    title: 'INTERN',
    organization: 'ZUNO',
    date: 'FEB 23 - JUN 23',
    imageUrl: '/assets/zuno-72cd52df.png',
    description: [
      "One of the most underrated yet important benefits of internships is the opportunity to build a strong professional network.",
      "Working with seasoned professionals helps understand how targets are achieved and what challenges can emerge.",
    ],
    certificateLink: '#', // Replace with actual link
  },
  {
    title: 'CAMPUS EXECUTIVE',
    organization: 'E CELL IIT BOMBAY',
    date: 'Jul 23 – Dec 23',
    imageUrl: '/assets/starbucks-d2d9b0fc.png',
    description: [
      "You will gain experience that will help you develop your time management skills and become a part of the largest student network.",
      "Certificates from E-Cell IIT Bombay, gift cards, and internship opportunities in leading companies will be given to deserving Campus Executives.",
    ],
    certificateLink: '#', // Replace with actual link
  },
  {
    title: 'DOUBT EXPERT',
    organization: 'VEDANTU',
    date: 'Jul 23 - Aug 23',
    imageUrl: '/assets/vedantu-bffc31b3.png',
    description: [
      "My experience teaching Vedantu has been, in one word, 'Awesome'.",
      "Teaching was a bit of a passion for me, and I wanted to pursue it.",
    ],
    certificateLink: '#', // Replace with actual link
  },
  {
    title: 'Android Development Intern',
    organization: 'Codsoft',
    date: 'JUL – Aug 23',
    imageUrl: '/assets/codesoft-02846b5f.png',
    description: [
      "Nice place to work with more exposure and flexibility.",
      "A typical day at work taught me how to manage my co-workers and the challenges faced.",
    ],
    certificateLink: '#', // Replace with actual link
  },
];

const VerticalTimeline = () => {
  return (
    <section className="bg-gray-900 py-10" id="timeline">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Experience Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 w-1 bg-gray-600 h-full"></div>
          {timelineData.map((item, index) => (
            <div className="flex items-center mb-10" key={index}>
              <div className="w-16 h-16 flex justify-center items-center rounded-full border-4 border-gray-700 bg-gray-800 transform -translate-x-1/2">
                <img
                  src={item.imageUrl}
                  alt={item.organization}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="bg-gray-800 p-5 rounded-lg shadow-lg w-full ml-4">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-secondary text-sm font-semibold">{item.organization}</p>
                <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-200">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-[14px] pl-1 tracking-wider">{desc}</li>
                  ))}
                </ul>
                <span className="text-gray-400 block mt-2">{item.date}</span>
                <a
                  href={item.certificateLink}
                  className="text-blue-400 hover:underline mt-2 block"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalTimeline;
