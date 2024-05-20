// import img from './fff.jpg'
const Contact = () => {
    return (
        <div id="contact" className={`w-full relative overflow-hidden`}>
            <p className=' w-fit mx-auto text-2xl md:text-4xl font-extrabold py-2 px-6 border-b-8 border-[#29feae] my-10'>About Me</p>
            <div className={` h-full opacity-60 blur-3xl absolute w-full bg-[url('./src/Contact/fff.jpg')] bg-cover`}></div>
            <form className=" relative w-full lg:w-2/4 mx-auto px-2 py-5">
                <div className=" md:flex justify-between">
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Full Name</span>
                        </div>
                        <input type="text" placeholder="name.." className="input input-bordered w-full max-w-xs" />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input type="text" placeholder="email.." className="input input-bordered w-full max-w-xs" />
                    </label>
                </div>
                <label className="form-control w-full max-w-2xl">
                    <div className="label">
                        <span className="label-text"> Subject </span>
                    </div>
                    <input type="text" placeholder="subject.." className="input input-bordered w-full max-w-2xl" />
                </label>
                <label className="form-control w-full max-w-2xl">
                    <div className="label">
                        <span className="label-text"> Message </span>
                    </div>
                    <textarea placeholder="Write message.." className="textarea textarea-bordered textarea-lg w-full max-w-2xl" ></textarea>
                </label>
                <button type="submit" className="btn bg-[#29feae] my-2 border-none text-black">Send</button>
            </form>
        </div>
    );
};

export default Contact;