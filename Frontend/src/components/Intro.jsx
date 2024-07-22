import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

const Intro = () => {
  const textRef = useRef();

  const handleScrollBar = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Check if textRef is already initialized
    if (textRef.current && !textRef.current.hasAttribute('data-initialized')) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Web Developer", "UI/UX Designer", "Developer", "Competitive Programmer", "Blog Writer"]
      });
      textRef.current.setAttribute('data-initialized', 'true');
    }
  }, []);

  return (
    <div id="intro" className="h-screen-small lg:h-screen-minus-70 bg-[#fafbf8] snap-start flex flex-col lg:flex-row">
      <div className="hidden lg:flex basis-6/12 lg:mr-40 justify-end overflow-hidden">
        <div className="relative left-12 top-24 bg-[#933EFF] rounded-full w-[700px] h-[700px] flex items-start justify-start outline outline-8 outline-[#933EFF]/50 outline-offset-8">
          <img src="/bgRemoved.png" alt="" className="relative left-40 top-28 w-[500px]" />
        </div>
      </div>

      <div className="basis-full lg:basis-1/2 flex justify-center items-center p-10 lg:p-0">
        <div className="relative text-center lg:text-left w-full flex flex-col lg:justify-center lg:mt-40 gap-5 z-10">
          <div className="text-2xl lg:text-6xl font-bold">Hi There, I'm</div>
          <div className="text-5xl lg:text-8xl font-bold">Ritochit Ghosh</div>
          <div className="text-2xl lg:text-5xl font-bold text-[#15023a] lg:text-[#933EFF]">
            <span className='opacity-0'>.</span>
            <span ref={textRef}></span>
          </div>
          <div className="text-[#15023a] hidden lg:block mt-20" onClick={handleScrollBar}>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 100 }} className='opacity-30 hover:opacity-70 duration-200 ease-in-out' />
          </div>
        </div>

        <div className="block lg:hidden absolute top-[25%] left-[15%] w-full h-full ">
          <img src="/mobile.jpg" alt="" className=" w-[70%] h-[50%] object-cover object-center opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
