import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Menu from "./Menu";

const Topbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleHamburger = () => {
    setSidebar(sidebar => !sidebar);
  };

  const handleResumeClick = () => {
    window.location.href = "https://docs.google.com/document/d/15ZljaKjL_F1nXXfCOgpxfec92_GZfk-tPCTxDRygJsw/edit?usp=sharing";
  };

  // 
  return (
    <>
      <div id="topbar" className={`px-16 w-screen h-[100px] ${sidebar ? "bg-[#933EFF] " : "bg-[#15023a]"} fixed top-0 z-20 flex justify-center items-center ease-linear duration-200`}>
        <div className="mx-[30px] my-[10px] w-full flex justify-between items-center">
          <div className="w-1/2 flex items-baseline">
            <a href="#intro" className="font text-5xl font-bold">
              <span className={`${sidebar ? "text-white" : "text-[#4087f5]" }`}>R</span>
              <span className={`${sidebar ? "text-white" : "text-[#ec4434]" }`}>i</span>
              <span className={`${sidebar ? "text-white" : "text-[#fbbb06]" }`}>t</span>
              <span className={`${sidebar ? "text-white" : "text-[#4087f5]" }`}>o</span>
              <span className={`${sidebar ? "text-white" : "text-[#30aa53]" }`}>c</span>
              <span className={`${sidebar ? "text-white" : "text-[#ec4434]" }`}>h</span>
              <span className={`${sidebar ? "text-white" : "text-[#4087f5]" }`}>i</span>
              <span className={`${sidebar ? "text-white" : "text-[#fbbb06]" }`}>t</span>
              <span className={`duration-200 ease-linear text-white`}>.</span>
            </a>
          </div>

          <div className={`duration-200 text-3xl ease-in-out ${sidebar ? "mr-44 text-[#f4f3f0]" : "mr-0 text-white flex gap-16"} `}>
            <div 
              className={`duration-200 text-xl cursor-pointer ease-in-out rounded-full px-6 py-3 flex justify-center items-center ${sidebar ? "hidden " : "bg-[#f4f3f0] hover:bg-[#15023a] hover:border-2 hover:text-[#fafbf8] hover:border-[#fafbf8] hover: font-bold text-[#15023a]"}`} 
              onClick={handleResumeClick}
            >
              Resume
            </div>
            <button onClick={handleHamburger}>
              {sidebar ? <CloseRoundedIcon sx={{ fontSize: 60 }} /> : <MenuRoundedIcon sx={{ fontSize: 50 }} />}
            </button>
          </div>
        </div>
      </div>
      {sidebar && <Menu sidebar={sidebar} setSidebar={setSidebar} />}
    </>
  );
}

export default Topbar;
