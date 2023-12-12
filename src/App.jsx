import './App.css'
import Navbar from './Navbar/Navbar'
import avator from "./avator.png";
import github from "./assets/GitHub.svg";
import linkedin from "./assets/LinkedIn.svg";
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

function App() {

  return (
    <>
      <div className='w-full bg-[#1a151581]'>
        <Navbar></Navbar>
      </div>
      <div className='h-fit bg-[#3d3737] relative w-full'>
        {/* banner */}
        <div className=' shadow-md h-fit relative flex flex-wrap w-full bg-[#504646c5]'>
          <div className='w-2/4 flex justify-center pl-2'>
            <div className=' w-fit h-fit self-center'>
              <p className=' text-2xl md:text-4xl font-bold leading-normal'>Hey,</p>
              <p className=' text-xl tracking-wide md:text-3xl font-bold'>I am <span className=' text-3xl md:text-5xl font-extrabold text-fuchsia-400'>Uttom</span></p>
              <p className='text-xl md:text-2xl'>Working as an <span className=' tracking-wide text-xl underline text-fuchsia-300'>MERN STACK DEVELOPER</span></p>
              <ul className=' flex my-2'>
                <li><a href="#github"><img className=' w-6 h-6 mr-2' src={github} alt="" /></a></li>
                <li><a href="#linkedin"><img className=' w-6 h-6' src={linkedin} alt="" /></a></li>
              </ul>
            </div>
          </div>
          <div className=' w-2/4 relative'>
            <img className='relative right-0 z-10 w-full md:w-3/4 mx-auto h-60 md:h-92 lg:h-[500px]' src={avator} alt="" />
            <div className=' absolute w-[170px] md:w-72 lg:w-[300px] right-11 lg:right-28 bottom-0 md:bottom-0  h-[200px] lg:h-[400px] bg-gradient-to-br from-50% from-fuchsia-400 to-teal-50 blur-xl bg-orange-500 opacity-5'></div>
          </div>
        </div>
        {/* about */}
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
