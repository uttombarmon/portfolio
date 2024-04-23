import avator2 from "../assets/avator3.png";
const About = () => {
    return (
        <div id="contacts" className='py-5'>
            <p className=' w-fit mx-auto text-2xl md:text-4xl font-extrabold py-2 px-6 border-y-8 rounded-se-full rounded-es-full border-sky-600 my-10'>About Me</p>
            <div className=' w-full flex flex-wrap'>
                <div className=' flex flex-wrap'>
                    <div className='w-full md:w-2/4'>
                        <img src={avator2} className='w-3/4 lg:2/4 mx-auto h-fit' alt="avator" />
                    </div>
                    <div className=' w-full md:w-2/4 flex justify-center flex-wrap'>
                        {/* about me bio */}
                        <div className=' h-fit self-center'>
                            <p className=' text-2xl w-fit md:text-3xl mx-auto md:mx-0 my-4'>I am <span className=" text-sky-400 text-3xl font-bold underline">Uttom Barmon</span></p>
                            <p className=' w-3/4 mx-auto md:mx-0'>Passionate MERN stack developer adept at crafting innovative web solutions. Expertise in MongoDB, Express.js, React, and Node.js. Committed to delivering user-friendly applications with efficiency and precision.</p>
                        </div>
                        {/* Education */}
                        <div className=' w-full py-4'>
                            <p className='text-xl font-bold'>Education :</p>
                            <div className='w-full ml-4 flex h-full'>
                                <div className=' w-fit h-fit self-center'>
                                    <p className="text-lg font-extralight">Diploma in Computer Technology (2020-Present)</p>
                                    <div className=' text-lg ml-3 font-sans'>
                                        <p>Aptouch Polytechnic Institute</p>
                                        <p className=' text-xs'>Munshipara, Dinajpur, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-full px-3 py-4'>
                    <div className=" w-full flex justify-center">
                        <p className='text-2xl font-extrabold my-6 text-center border-b-2 border-black w-fit'>Technical Skills & Tools</p>
                    </div>
                    <div>
                        <div className=" font-extrabold flex text-center flex-wrap">
                        </div>
                        <div className=" font-extrabold flex text-center flex-wrap mx-auto justify-center">
                            {/* html  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">HTML</p>
                            </div>

                            {/* css  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    CSS
                                </p>
                            </div>

                            {/* javascript  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    Javascript
                                </p>
                            </div>

                            {/* react js  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    React.js
                                </p>
                            </div>

                            {/* node js  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    Node.js
                                </p>
                            </div>

                            {/* express js  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    Express.js
                                </p>
                            </div>

                            {/* MongoDB  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    MongoDB
                                </p>
                            </div>

                            {/* firebase  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">
                                    Firebase
                                </p>
                            </div>

                            {/* tailwind css  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center"> Tailwind CSS</p>
                            </div>

                            {/* git & github  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center"> Git & Github</p>
                            </div>

                            {/* React Router  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center"> React Router</p>
                            </div>

                            {/* Responsive  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center"> Responsive</p>
                            </div>
                            {/* jwt  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center"> JWT</p>
                            </div>
                            {/* mySQL  */}
                            <div className='mx-4 justify-center my-2 px-6 py-4 rounded-md bg-opacity-10 backdrop-filter backdrop-blur-lg bg-black flex'>
                                <p className="text-black self-center">MySQL</p>
                            </div>
                        </div>
                    </div>
                    {/* front-end  */}
                    {/* <div>
                            <h1 className=" text-xl font-extrabold">Front-End Technologies</h1>
                            <div className=" ml-4 my-4">
                                <p className="font-medium font-serif">
                                    <span className="font-extrabold">Core:</span> HTML5, CSS3, JavaScript
                                </p>
                                <p className="font-medium font-serif">
                                    <span className="font-extrabold">Framework/Libraries:</span> ReactJS, NextJs
                                </p>
                                <p className="font-medium font-serif">
                                    <span className="font-extrabold">Styling:</span> CSS preprocessors (Sass), Responsive Design, Tailwind
                                </p>
                            </div>
                        </div> */}
                    {/* backend  */}
                    {/* <div>
                            <h1 className=" text-xl font-extrabold">Back-End Technologies</h1>
                            <div className=" ml-4 my-4">
                                <p className="font-medium font-serif">
                                    <span className="font-extrabold">Languages:</span>Node.js, Express.js, Mongoose.js
                                </p>
                                <p className="font-medium font-serif">
                                    <span className="font-extrabold">Databases:</span> SQL (MySQL), NoSQL (MongoDB)
                                </p>
                            </div>
                        </div> */}
                    {/* others */}
                    {/* <div>
                            <h1 className=" text-xl font-extrabold">Others</h1>
                            <div className=" ml-4 my-4">
                                <p className="font-medium font-serif">
                                    Firebase, JSON Web Token(JWT), 
                                </p>
                            </div>
                        </div> */}
                </div>
            </div>
        </div>
    );
};

export default About;