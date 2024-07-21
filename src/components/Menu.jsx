import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

const Menu = ({ sidebar, setSidebar }) => {
    const handleClick = () => {
        setSidebar(!sidebar);
    }

    return (
        sidebar && (
            <div className="fixed right-0 top-[100px] w-1/5 h-screen duration-200 ease-linear bg-[#fafbf8] shadow-lg z-50 flex flex-col justify-start gap-36 rounded-l-xl border-t-4 border-l-4 border-[#3E74FF] ">
                <div className="">
                    <ul className="px-12 py-8 text-xl font-semibold text-[#15023a] flex flex-col justify-start items-start gap-8">
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out ">
                            <a href="#intro" className = "hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Home</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#portfolio" className = "hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Portfolio</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#work" className = "hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>About Me</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#testimonials" className = "hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Testimonials</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#contact" className = "hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="px-12 text-[#15023a] flex flex-col items-start justify-center gap-1">
                    <img src="../../public/myPic.jpeg" alt="Myself" width={50} className='ml-1 rounded-full outline outline-[#15023a] outline-4 outline-offset-2'/>  
                    <a href="#intro" className="ml-1 font text-lg font-bold">
                        <CopyrightIcon sx = {{fontSize: 15}} />
                        <span className="text-[#4087f5]">R</span>
                        <span className="text-[#ec4434]">i</span>
                        <span className="text-[#fbbb06]">t</span>
                        <span className="text-[#4087f5]">o</span>
                        <span className="text-[#30aa53]">c</span>
                        <span className="text-[#eb4034]">h</span>
                        <span className="text-[#4087f5]">i</span>
                        <span className="text-[#fbbb06]">t</span>
                        <span className={`duration-200 ease-linear text-[#15023a]}`}>.</span>
                    </a>
                    <div className="">
                        <PersonIcon sx={{ fontSize: 30 }} /> 
                        <span className="text-[15px] cursor-pointer">+91 7439400371</span>
                    </div>
                    <div className="">
                        <MailIcon sx={{ fontSize: 25 }} />
                        <span className="px-3 text-[15px] cursor-pointer">imrito18@gmail.com</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default Menu;
