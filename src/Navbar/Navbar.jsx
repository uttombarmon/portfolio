import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
    return (
        <div className={`navcss ${visible ? 'visible' : 'hidden'} top-0 z-20 fixed w-full 2xl:w-[1536px] uppercase font-semibold`}>
            <div className="navbar bg-opacity-5 backdrop-blur-sm bg-white flex justify-between items-center">
                <div className="navbar-start md:ml-6">
                    <a className="font-extrabold text-2xl normal-case">Port<span className="text-[#29feae]">folio</span></a>
                </div>
                <div className="navbar-end md:mr-6">
                    <ul className="mr-10 hidden lg:inline-flex">
                        <li className=" py-2 px-3 border-y-2 border-transparent hover:bg-[#29feae] hover:text-black"><a href="#about">About</a></li>
                        <li className="py-2 px-3 border-y-2 border-transparent hover:bg-[#29feae] hover:text-black"><a href="#projects">Projects</a></li>
                        <li className="py-2 px-3 border-y-2 border-transparent hover:bg-[#29feae] hover:text-black"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu z-[11] menu-sm dropdown-content right-0 mt-3 p-2 shadow-lg bg-white bg-opacity-75 backdrop-blur-lg rounded-lg w-52">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://docs.google.com/document/d/1_5H3RzAe4-lb8B_sH5lLyABtlL6mwMfmJi8cqpOwwp8/edit?usp=sharing" className="btn btn-primary">Resume</a></li>
                        </ul>
                    </div>
                    <a href="#" className="btn bg-[#29feae] border-none hover:bg-[#59fc8a] text-black lg:flex hidden">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;