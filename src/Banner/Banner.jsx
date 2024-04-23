// import avator from "../avator.png";
import icon from './banner-icon.svg'
import github from "../assets/GitHub.svg";
import linkedin from "../assets/LinkedIn.svg";
const Banner = () => {
    return (
        <div className=' shadow-md h-[500px] md:h-full relative flex flex-wrap w-full'>
            <div className='w-2/4 self-center flex justify-center pl-2'>
                <div className=' w-fit h-full self-center mx-8'>
                    <p className='text-xl mb-10 md:text-5xl font-bold leading-normal uppercase'>Turn <span className=' text-[#3ec4ee] md:text-6xl'>Idea</span> into <span className=' text-[#3ec4ee] md:text-6xl'>Code!</span></p>
                    <p className=' text-lg md:text-xl text-slate-300 my-4'>Creating real-life solutions from ideas is my passion. It&apos;s about creativity, empathy, and relentless determination to make a difference.</p>
                    <ul className=' flex my-2'>
                        <li><a href="#github"><img className=' w-6 h-6 mr-2' src={github} alt="" /></a></li>
                        <li><a href="#linkedin"><img className=' w-6 h-6' src={linkedin} alt="" /></a></li>
                    </ul>
                    <div className='my-8'>
                        <a className='btn mr-4 hover:bg-sky-600 bg-[#3ec4ee] text-black border-none' href="#">Download Resume</a>
                        <a className='btn bg-[#3ec4ee] hover:bg-sky-600 text-black border-none' href="#">Contact Me</a>
                    </div>
                </div>
            </div>
            <img className='relative right-0 w-2/4 md:w-2/4 mx-auto h-60 md:h-92 lg:h-full self-center lg:py-14' src={icon} alt="" />
        </div>
    );
};

export default Banner;