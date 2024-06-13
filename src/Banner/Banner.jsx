import icon from './banner-icon.svg';
import github from "../assets/GitHub1.svg";
import linkedin from "../assets/LinkedIn.svg";
import './banner.css'

const Banner = () => {
    return (
        <div className="shadow-md min-h-[500px] mt-12 md:mt-8 relative flex w-full">
            <div className="md:w-1/2 w-full h-full md:h-auto absolute z-10 md:z-0 md:relative flex justify-center items-center px-6 md:px-12 py-12 md:py-0">
                <div className="w-full max-w-lg text-center self-center md:text-left">
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
                        <a className="btn mr-4 hover:bg-[#59fc8a] bg-[#29feae] text-black border-none" href="https://docs.google.com/document/d/16ROGJG23RNJM3dWTT2n24191hKVgv-4GGLBsi5xnxQY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        <a className="btn bg-[#29feae] hover:bg-[#59fc8a] text-black border-none" href="#contact">Contact Me</a>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 w-full h-full relative md:flex justify-center items-center">
                <img className="max-h-full w-full bg-cover md:object-contain blur-sm contrast-100 brightness-50 md:filter-none" src={icon} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;
