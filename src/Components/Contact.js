import React, { useState } from 'react';
import { Styles } from '../utils/Style';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isCooldown, setIsCooldown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCooldown) {
      alert('Please wait before submitting again.');
      return;
    }

    const googleFormUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLScNHsYYwraQtZq2xExgoR1Oq_45RKxE29-rcOTwtma-7lcqdQ/formResponse';

    const form = new FormData();
    form.append('entry.2005620554', formData.name);
    form.append('entry.1045781291', formData.email);
    form.append('entry.839337160', formData.message);

    fetch(googleFormUrl, {
      method: 'POST',
      body: form,
      mode: 'no-cors',
    })
      .then(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        });

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

        alert('Form submitted successfully');
        setFormSubmitted(true);

        setIsCooldown(true);
        setTimeout(() => {
          setIsCooldown(false);
        }, 60000);
      })
      .catch((err) => {
        alert('Error submitting form');
      });
  };

  return (
    <div className='bg-gray-900 text-gray-100 py-10' id='Contact'>
      <div className='flex flex-col items-center mb-6'>
        <h2 className={`${Styles.sectionHeadText} text-lg leading-tight font-semibold`}>
          Excited to Collaborate? <br /> Let's Connect for Opportunities!
        </h2>
        <hr className='w-[35%] border-gray-700 my-3' />
      </div>

      <div className='flex justify-center items-start relative'>
        <div className='lg:w-[40%] p-5'>
          {!formSubmitted ? (
            <>
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  className='bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 mt-4'
                >
                  <PaperAirplaneIcon className="h-5 w-5 mr-2 inline" aria-hidden="true" />
                  Send Message
                </button>
              ) : (
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                  <label className='flex flex-col gap-1'>
                    <span className='text-teal-400 font-medium'>Your Name</span>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
                    />
                  </label>

                  <label className='flex flex-col gap-1'>
                    <span className='text-teal-400 font-medium'>Your Email</span>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
                    />
                  </label>

                  <label className='flex flex-col gap-1'>
                    <span className='text-teal-400 font-medium'>Your Message</span>
                    <textarea
                      rows={5}
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Your Message'
                      className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
                    />
                  </label>

                  <button
                    type='submit'
                    className='bg-teal-500 hover:bg-teal-400 py-2 rounded-lg shadow-md transition-all duration-300 text-white font-semibold'
                    disabled={isCooldown}
                  >
                    Submit
                  </button>
                  {isCooldown && (
                    <p className="text-red-400 text-sm mt-2">Please wait for a minute before submitting again.</p>
                  )}
                </form>
              )}
            </>
          ) : (
            <p className="text-green-500 font-semibold text-lg mt-4">Thank you for your message! I will get back to you soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;



// import React, { useState } from 'react';
// import { Styles } from '../utils/Style';
// import contact from '../assests/contactImg.webp';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isCooldown, setIsCooldown] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isCooldown) {
//       alert('Please wait before submitting again.');
//       return;
//     }

//     const googleFormUrl =
//       'https://docs.google.com/forms/d/e/1FAIpQLScNHsYYwraQtZq2xExgoR1Oq_45RKxE29-rcOTwtma-7lcqdQ/formResponse';

//     const form = new FormData();
//     form.append('entry.2005620554', formData.name); // Name field
//     form.append('entry.1045781291', formData.email); // Email field
//     form.append('entry.839337160', formData.message); // Message field

//     fetch(googleFormUrl, {
//       method: 'POST',
//       body: form,
//       mode: 'no-cors',
//     })
//       .then(() => {
//         // Reset the form fields
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         });

//         // Redirect to top of the page
//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });

//         alert('Form submitted successfully');

//         // Set cooldown
//         setIsCooldown(true);
//         setTimeout(() => {
//           setIsCooldown(false);
//         }, 60000); // 1 minute cooldown
//       })
//       .catch((err) => {
//         alert('Error submitting form');
//       });
//   };

//   return (
//     <div className='bg-gray-900 text-gray-100 py-10' id='Contact'>
//       <div className='flex flex-col items-center'>
//         <h2 className={`${Styles.sectionHeadText} text-lg leading-tight`}>
//           Excited to Collaborate? <br/> Let's Connect for Opportunities!
//         </h2>
//         <hr className='w-[35%] border-gray-700 my-3' />
//       </div>

//       <div className='mt-5 flex flex-wrap justify-center items-center'>
//         <div className='lg:w-[40%] p-5'>
//           <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//             <label className='flex flex-col gap-3'>
//               <span className='text-teal-400 font-medium mb-2'>Your Name</span>
//               <input
//                 type='text'
//                 name='name'
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="What's your good name?"
//                 className='bg-gray-800 py-4 px-6 placeholder-gray-500 
//                   text-teal-200 rounded-lg outline-none border-none font-medium shadow-md'
//               />
//             </label>

//             <label className='flex flex-col gap-3'>
//               <span className='text-teal-400 font-medium mb-2'>Your Email</span>
//               <input
//                 type='email'
//                 name='email'
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="What's your email address?"
//                 className='bg-gray-800 py-4 px-6 placeholder-gray-500 
//                   text-teal-200 rounded-lg outline-none border-none font-medium shadow-md'
//               />
//             </label>

//             <label className='flex flex-col gap-3'>
//               <span className='text-teal-400 font-medium mb-2'>Your Message</span>
//               <textarea
//                 rows={5}
//                 name='message'
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder='What do you want to say?'
//                 className='bg-gray-800 py-4 px-6 placeholder-gray-500 
//                   text-teal-200 rounded-lg outline-none border-none font-medium shadow-md'
//               />
//             </label>

//             <button
//               type='submit'
//               className='bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-blue-400 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit text-white font-bold shadow-md transition-all duration-300 ease-in-out'
//               disabled={isCooldown} // Disable button during cooldown
//             >
//               Submit
//             </button>
//             {isCooldown && <p className="text-red-400">Please wait for a minute before submitting again.</p>}
//           </form>
//         </div>

//         {/* Core Competencies Card */}
//         <div className='lg:w-[50%] p-5'>
//           <div className='bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
//             <h3 className='text-teal-400 font-bold text-2xl text-center mb-4'>
//               Core Competencies
//             </h3>
//             <p className='text-gray-300 text-center mb-2'>
//               I am driven by a passion for technology and eager to contribute my skills in challenging environments. My primary areas of interest include:
//             </p>
//             <ul className='text-gray-300 list-disc list-inside mb-4'>
//               <li className='font-semibold'>Software Development</li>
//               <li className='font-semibold'>Java Development</li>
//               <li className='font-semibold'>Web Development</li>
//               <li>Mobile Development</li>
//               <li>Distributed Systems</li>
//               <li>Machine Learning</li>
//               <li>Artificial Intelligence</li>
//               <li>Natural Language Processing (NLP)</li>
//               <li>Networking</li>
//             </ul>
//             <p className='text-gray-300 text-center'>
//               I approach each project with dedication and a commitment to excellence, always seeking to push the boundaries of what is possible.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;






// import React, { useState } from 'react';
// import { Styles } from '../utils/Style';
// import contact from '../assests/contactImg.webp';
// import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isCooldown, setIsCooldown] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isCooldown) {
//       alert('Please wait before submitting again.');
//       return;
//     }

//     const googleFormUrl =
//       'https://docs.google.com/forms/d/e/1FAIpQLScNHsYYwraQtZq2xExgoR1Oq_45RKxE29-rcOTwtma-7lcqdQ/formResponse';

//     const form = new FormData();
//     form.append('entry.2005620554', formData.name);
//     form.append('entry.1045781291', formData.email);
//     form.append('entry.839337160', formData.message);

//     fetch(googleFormUrl, {
//       method: 'POST',
//       body: form,
//       mode: 'no-cors',
//     })
//       .then(() => {
//         setFormData({
//           name: '',
//           email: '',
//           message: '',
//         });

//         window.scrollTo({
//           top: 0,
//           behavior: 'smooth',
//         });

//         alert('Form submitted successfully');
//         setFormSubmitted(true);

//         setIsCooldown(true);
//         setTimeout(() => {
//           setIsCooldown(false);
//         }, 60000);
//       })
//       .catch((err) => {
//         alert('Error submitting form');
//       });
//   };

//   return (
//     <div className='bg-gray-900 text-gray-100 py-10' id='Contact'>
//       <div className='flex flex-col items-center mb-6'>
//         <h2 className={`${Styles.sectionHeadText} text-lg leading-tight font-semibold`}>
//           Excited to Collaborate? <br /> Let's Connect for Opportunities!
//         </h2>
//         <hr className='w-[35%] border-gray-700 my-3' />
//       </div>

//       <div className='flex justify-center items-start relative'>
//         <div className='lg:w-[40%] p-5'>
//           {!formSubmitted ? (
//             <>
//               {!showForm ? (
//                 <button
//                   onClick={() => setShowForm(true)}
//                   className='bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300 mt-4'
//                 >
//                   <PaperAirplaneIcon className="h-5 w-5 mr-2 inline" aria-hidden="true" />
//                   Send Message
//                 </button>
//               ) : (
//                 <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//                   <label className='flex flex-col gap-1'>
//                     <span className='text-teal-400 font-medium'>Your Name</span>
//                     <input
//                       type='text'
//                       name='name'
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Your Name"
//                       className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
//                     />
//                   </label>

//                   <label className='flex flex-col gap-1'>
//                     <span className='text-teal-400 font-medium'>Your Email</span>
//                     <input
//                       type='email'
//                       name='email'
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Your Email"
//                       className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
//                     />
//                   </label>

//                   <label className='flex flex-col gap-1'>
//                     <span className='text-teal-400 font-medium'>Your Message</span>
//                     <textarea
//                       rows={5}
//                       name='message'
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder='Your Message'
//                       className='bg-gray-800 py-2 px-4 placeholder-gray-500 text-gray-300 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400'
//                     />
//                   </label>

//                   <button
//                     type='submit'
//                     className='bg-teal-500 hover:bg-teal-400 py-2 rounded-lg shadow-md transition-all duration-300 text-white font-semibold'
//                     disabled={isCooldown}
//                   >
//                     Submit
//                   </button>
//                   {isCooldown && (
//                     <p className="text-red-400 text-sm mt-2">Please wait for a minute before submitting again.</p>
//                   )}
//                 </form>
//               )}
//             </>
//           ) : (
//             <p className="text-green-500 font-semibold text-lg mt-4">Thank you for your message! I will get back to you soon.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;
