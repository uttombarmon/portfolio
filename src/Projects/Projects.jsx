import skyline from '../assets/p11.png'
import foodhub from '../assets/p21.png'
import techhub from '../assets/p31.png'

const Projects = () => {
    return (
        <div id='projects' className=' mx-3 py-10'>
            <p className=' w-fit mx-auto text-2xl md:text-4xl font-extrabold py-2 px-6 border-b-8 border-[#29feae] my-10'>Projects</p>
            <div>
                <div className=' flex flex-wrap justify-around'>
                    {/* skyline */}
                    <div className="card w-96 bg-base-100 shadow-xl my-2">
                        <figure><img src={skyline} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                SkyLine
                            </h2>
                            <p>This website make for grow-up realestate bussiness by online. Here has many role(admin,agent,user) and role based dashboard. This project is MERN Based Application.</p>
                            <div className="card-actions justify-end">
                                <div className="btn bg-[#29feae] text-black"><a href="https://skyline-fb8da.web.app/">Live</a></div>
                                <div className="btn bg-[#29feae] text-black"><a href="https://github.com/uttombarmon/skyline">Code</a></div>
                            </div>
                        </div>
                    </div>
                    {/* foodhub */}
                    <div className="card w-96 bg-base-100 shadow-xl my-2">
                        <figure><img src={foodhub} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                FoodHub
                            </h2>
                            <p>This website make for stop wasting food and give it anothers.This project is MERN Based Application.</p>
                            <div className="card-actions justify-end">
                                <div className="btn bg-[#29feae] text-black"><a href="https://foodhub-3a8d3.web.app/">Live</a></div>
                                <div className="btn bg-[#29feae] text-black"><a href="https://github.com/uttombarmon/Hello-Food">Code</a></div>
                            </div>
                        </div>
                    </div>
                    {/* techhub  */}
                    <div className="card w-96 bg-base-100 shadow-xl my-2">
                        <figure><img src={techhub} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                TechHub
                            </h2>
                            <p>This website make for grow your mobile brand bussiness by online.This project is MERN Based Application.</p>
                            <div className="card-actions justify-end">
                                <div className="btn bg-[#29feae] text-black"><a href="https://techhub-85948.web.app/">Live</a></div>
                                <div className="btn bg-[#29feae] text-black"><a href="https://github.com/uttombarmon/brand-shop">Code</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;