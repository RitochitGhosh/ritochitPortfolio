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
    <div id="intro" className="h-screen-minus-70 bg-[#fafbf8] snap-start flex">
      <div className="basis-6/12 flex justify-end overflow-hidden">
        <div className="relative left-12 top-28 bg-[#933EFF] rounded-full w-[700px] h-[700px] flex items-start justify-start outline outline-8 outline-[#933EFF]/50 outline-offset-8">
          <img src="public/bgRemoved.png" alt="" className="relative left-40 top-28  w-[500px]" />
        </div>
      </div>

      <div className="basis-6/12 flex justify-center items-center pt-10">
        <div className="flex flex-col gap-5">
          <div className="text-4xl font-bold">Hi There, I'm</div>
          <div className="text-6xl font-bold">Ritochit Ghosh</div>
          <div className="text-3xl font-bold text-[#933EFF] ml-[-6px]">
            <span className='opacity-0'>.</span>
            <span ref={textRef}></span>
          </div>
          <div className="text-[#15023a] " onClick={handleScrollBar}>
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 90 }} className='relative top-36 left-32 opacity-50 hover:opacity-80' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
