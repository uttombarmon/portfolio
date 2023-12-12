const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="btn font-extrabold text-xl text-fuchsia-300">UTTOM</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li>
                            <a href="#about">About</a>
                            </li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu z-[11] menu-sm dropdown-content right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a href="#about">About</a>
                            </li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://docs.google.com/document/d/1_5H3RzAe4-lb8B_sH5lLyABtlL6mwMfmJi8cqpOwwp8/edit?usp=sharing" className=" btn-link">Download Resume</a></li>
                        </ul>
                    </div>
                    <a href="https://docs.google.com/document/d/1_5H3RzAe4-lb8B_sH5lLyABtlL6mwMfmJi8cqpOwwp8/edit?usp=sharing" className="btn btn-link lg:flex hidden bg-[#00007fff]">Download Rusume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;