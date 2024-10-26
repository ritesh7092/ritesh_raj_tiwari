import React, { useState } from 'react';
import { Styles } from '../utils/Style';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isCooldown, setIsCooldown] = useState(false);
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
            <div className="flex-[0.75] bg-gray-800 p-8 rounded-2xl">
              <p className="sm:text-[18px] text-[14px] text-teal-400 uppercase tracking-wider">Get in touch</p>
              <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
              <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="What's your good name?"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="What's your web address?"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">Your Message</span>
                  <textarea
                    rows={7}
                    name="message"
                    placeholder="What you want to say?"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="bg-teal-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                  disabled={isCooldown}
                >
                  Send
                </button>
              </form>
            </div>
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
//                 <div className="flex-[0.75] bg-gray-800 p-8 rounded-2xl">
//                   <p className="sm:text-[18px] text-[14px] text-teal-400 uppercase tracking-wider">Get in touch</p>
//                   <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>
//                   <form className="mt-12 flex flex-col gap-8" onSubmit={handleSubmit}>
//                     <label className="flex flex-col">
//                       <span className="text-white font-medium mb-4">Your Name</span>
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="What's your good name?"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                       />
//                     </label>
//                     <label className="flex flex-col">
//                       <span className="text-white font-medium mb-4">Your email</span>
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="What's your web address?"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                       />
//                     </label>
//                     <label className="flex flex-col">
//                       <span className="text-white font-medium mb-4">Your Message</span>
//                       <textarea
//                         rows={7}
//                         name="message"
//                         placeholder="What you want to say?"
//                         value={formData.message}
//                         onChange={handleChange}
//                         className="bg-gray-700 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                       />
//                     </label>
//                     <button
//                       type="submit"
//                       className="bg-teal-500 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//                       disabled={isCooldown}
//                     >
//                       Send
//                     </button>
//                   </form>
//                 </div>
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





