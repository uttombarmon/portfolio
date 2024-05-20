import { useEffect } from "react";
import avator2 from "../assets/avator3.png";
import Skills from "./Skills";
import "./skill.css";
const About = () => {
    useEffect(() => {
        // This useEffect will run after the component renders
        const skills = document.querySelectorAll('.animate-fade-in'); // Select all elements with the animation class
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.animationDelay = `${index * 0.2}s`; // Set an increasing delay for each skill
            }, 0);
        });
    }, []);
    return (
        <div id="contacts" className='py-5'>
            <p className=' w-fit mx-auto text-2xl md:text-4xl font-extrabold py-2 px-6 border-b-8 border-[#29feae] my-10'>About Me</p>
            <div className=' w-full flex flex-wrap'>
                <div className=' flex flex-wrap'>
                    {/* personal photo */}
                    <div className='w-full md:w-2/4'>
                        <img src={avator2} className='w-3/4 lg:2/4 mx-auto h-fit' alt="avator" />
                    </div>
                    {/* bio and Educations */}
                    <div className=' w-full md:w-2/4 px-4 md:px-0 flex justify-center flex-wrap md:border-l-4 border-green-400 md:pl-6'>
                        {/* about me bio */}
                        <div className=' h-fit self-center'>
                            <p className=' text-2xl w-fit md:text-3xl my-4'>I am <span className=" text-[#29feae] text-3xl font-bold underline">Uttom Barmon</span></p>
                            <p className='mx-auto md:mx-0'>Passionate MERN stack developer adept at crafting innovative web solutions. Expertise in MongoDB, Express.js, React, and Node.js. Committed to delivering user-friendly applications with efficiency and precision.</p>
                        </div>
                        {/* Education */}
                        <div className='py-4 w-full self-center'>
                            <p className='text-2xl font-bold'>Education :</p>
                            <div className='w-full flex h-full'>
                                <div className='w-fit h-fit self-center'>
                                    <p className="text-lg font-extralight">Diploma in Computer Technology (2020-Present)</p>
                                    <div className=' text-lg font-sans'>
                                        <p>Aptouch Polytechnic Institute</p>
                                        <p className=' text-xs'>Munshipara, Dinajpur, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default About;