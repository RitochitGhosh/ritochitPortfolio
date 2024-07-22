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
            <div className="fixed right-0 top-[60px] lg:top-[100px] w-full sm:w-3/5 md:w-2/5 lg:w-1/5 h-full duration-200 ease-linear bg-[#fafbf8] shadow-lg z-50 flex flex-col justify-start gap-[25%] rounded-l-xl border-l-4 border-[#933EFF]">
                <div className="px-6 py-8 text-xl font-semibold text-[#15023a] flex flex-col gap-8">
                    <ul className="flex flex-col gap-6">
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#intro" className="hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Home</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#portfolio" className="hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Portfolio</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#work" className="hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>About Me</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#testimonials" className="hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Testimonials</a>
                        </li>
                        <li className="opacity-60 hover:opacity-100 duration-200 ease-in-out">
                            <a href="#contact" className="hover:underline shadow-xl hover:shadow-none" onClick={handleClick}>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="px-6 py-8 text-[#15023a] flex flex-col items-start gap-4">
                    <img src="../../public/myPic.jpeg" alt="Myself" width={50} className='rounded-full outline outline-[#15023a] outline-4 outline-offset-2' />  
                    <a href="#intro" className="font text-lg font-bold flex items-center gap-1">
                        <CopyrightIcon sx={{ fontSize: 15 }} />
                        <span className="text-[#4087f5]">R</span>
                        <span className="text-[#ec4434]">i</span>
                        <span className="text-[#fbbb06]">t</span>
                        <span className="text-[#4087f5]">o</span>
                        <span className="text-[#30aa53]">c</span>
                        <span className="text-[#eb4034]">h</span>
                        <span className="text-[#4087f5]">i</span>
                        <span className="text-[#fbbb06]">t</span>
                        <span className="text-[#15023a]">.</span>
                    </a>
                    <div className="flex items-center gap-2">
                        <PersonIcon sx={{ fontSize: 20 }} /> 
                        <span className="text-[15px] cursor-pointer">+91 7439400371</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MailIcon sx={{ fontSize: 20 }} />
                        <span className="text-[15px] cursor-pointer">imrito18@gmail.com</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default Menu;
