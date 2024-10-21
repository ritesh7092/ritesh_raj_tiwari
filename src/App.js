import './App.css';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import OverView from './Components/OverView';
import Projects from './Components/Projects';

function App() {
  return (
    <div className=' flex flex-col overflow-x-hidden'>
     <div className='absolute w-screen '>
      <Navbar/>
     </div>
    <div className=' min-h-screen '>
       <div className=' absolute'>
          <Main/>
           
       </div>
       <div className=' relative '>
       <About/>
       </div>
    </div>

     <div className='flex flex-col relative bg-white'>
        <OverView/>
        <Projects/>
        <Achievements/>
        {/* <Certifications/> */}
        <Contact/>  
        <Footer/>
     </div>


    </div>
  );
}

export default App; 
