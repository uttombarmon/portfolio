import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
function App() {

  return (
    <>
      <div className=" overflow-x-hidden text-black 2xl:max-w-screen-2xl mx-auto relative">
        <Navbar />
        <section id="home" data-bg-color="bg-gray-800" className="h-fit bg-gradient-to-b to-salate-200 from-[#F5F5F5]">
          <Banner></Banner>
        </section>
        <section id="about" data-bg-color="bg-blue-500" className="h-fit bg-[#e0dcd5]">
          <About></About>
        </section>
        <section id='projects' className="h-fit bg-[#e0dcd5]">
          <Projects></Projects>
        </section>
        <section id="contact" className="h-fit bg-[#e0dcd5]">
          <Contact></Contact>
        </section>
      </div>
    </>
  )
}

export default App
