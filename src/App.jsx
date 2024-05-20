import About from './About/About'
import './App.css'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import Projects from './Projects/Projects'
function App() {

  return (
    <>
      <div className=" overflow-x-hidden bg-[#191918] text-white 2xl:max-w-screen-2xl mx-auto relative">
        <Navbar />
        <section id="home" data-bg-color="bg-gray-800" className="h-fit shadow-2xl shadow-[#ffffff17]">
          {/* bg-gradient-to-b to-salate-200 from-[#F5F5F5] */}
          <Banner></Banner>
        </section>
        <section id="about" className="h-fit shadow-2xl shadow-[#ffffff17]">
          {/* bg-[#e0dcd5] */}
          <About></About>
        </section>
        <section id='projects' className="h-fit shadow-2xl shadow-[#ffffff17]">
          <Projects></Projects>
        </section>
        <section id="contact" className="h-fit shadow-2xl shadow-[#ffffff17]">
          <Contact></Contact>
        </section>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
