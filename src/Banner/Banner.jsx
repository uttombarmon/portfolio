import icon from './banner-icon.svg';
import github from "../assets/GitHub1.svg";
import linkedin from "../assets/LinkedIn.svg";

const Banner = () => {
    return (
        <div className="shadow-md min-h-[500px] md:mt-8 relative flex w-full">
            <div className="md:w-1/2 flex justify-center items-center px-6 md:px-12 py-12 md:py-0">
                <div className="w-full max-w-lg text-center md:text-left">
                    <p className="text-xl md:text-4xl lg:text-5xl font-bold leading-relaxed uppercase mb-4">
                        Turn <span className="text-[#29feae] text-3xl md:text-6xl">Idea</span> into <span className="text-[#29feae] text-3xl md:text-6xl">Code!</span>
                    </p>
                    <p className="text-base md:text-lg text-slate-300 mb-8">
                        Creating real-life solutions from ideas is my passion. It&apos;s about creativity, empathy, and relentless determination to make a difference.
                    </p>
                    <ul className="flex justify-center md:justify-start mb-6">
                        <li>
                            <a href="#github" className="mr-4"><img className="w-6 h-6" src={github} alt="GitHub" /></a>
                        </li>
                        <li>
                            <a href="#linkedin"><img className="w-6 h-6" src={linkedin} alt="LinkedIn" /></a>
                        </li>
                    </ul>
                    <div className="flex justify-center md:justify-start">
                        <a className="btn mr-4 hover:bg-sky-600 bg-[#29feae] text-black border-none" href="#">Download Resume</a>
                        <a className="btn bg-[#29feae] hover:bg-sky-600 text-black border-none" href="#">Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 relative md:flex justify-center items-center hidden">
                <img className="max-h-96 md:max-h-full w-full object-contain" src={icon} alt="" />
            </div>
        </div>
    );
};

export default Banner;
