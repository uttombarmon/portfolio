import avator2 from "../assets/avator2.jpg";
const About = () => {
    return (
        <div id="contacts" className='py-5'>
            <p className=' w-fit mx-auto text-2xl text-white md:text-4xl py-7'>About Me</p>
            <div className=' w-full flex flex-wrap'>
                <div className=' flex flex-wrap'>
                    <div className='w-full md:w-2/4'>
                        <img src={avator2} className='w-3/4 lg:2/4 mx-auto bg-white shadow-lg h-60' alt="avator" />
                    </div>
                    <div className=' w-full md:w-2/4 flex justify-center'>
                        {/* about me bio */}
                        <div className=' h-fit self-center'>
                            <p className=' text-2xl w-fit md:text-3xl mx-auto md:mx-0 my-4'>I am Uttom Barmon</p>
                            <p className=' w-3/4 mx-auto md:mx-0'>Passionate MERN stack developer adept at crafting innovative web solutions. Expertise in MongoDB, Express.js, React, and Node.js. Committed to delivering user-friendly applications with efficiency and precision.</p>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className=' w-full lg:w-2/4 px-3 py-4'>
                    <p className='text-xl py-4 text-white'>Education :</p>
                    <div className='w-full ml-4 flex h-full'>
                        <div className=' w-fit h-fit self-center'>
                            <p>Diploma in Computer Technology (2020-Present)</p>
                            <div className=' text-lg ml-3 font-sans'>
                                <p>Aptouch Polytechnic Institute</p>
                                <p className=' text-xs'>Munshipara, Dinajpur, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* skills  */}
                <div className=' w-full lg:w-2/4 px-3 py-4'>
                    <p className='text-xl text-white py-4'>Skills & Tools :</p>
                    <div>
                        <div>
                            <p className='btn mx-4 my-2'>HTML</p>
                            <p className='btn mx-4 my-2'> CSS</p>
                            <p className='btn mx-4 my-2'>Javascript</p>
                            <p className='btn mx-4 my-2'> React.js</p>
                            <p className='btn mx-4 my-2'> Node.js</p>
                            <p className='btn mx-4 my-2'> Express.js</p>
                            <p className='btn mx-4 my-2'> MongoDB</p>
                            <p className='btn mx-4 my-2'> Firebase</p>
                            <p className='btn mx-4 my-2'> Tailwind CSS</p>
                            <p className='btn mx-4 my-2'> Git & Github</p>
                            <p className='btn mx-4 my-2'> React Router</p>
                            <p className='btn mx-4 my-2'> Responsive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;