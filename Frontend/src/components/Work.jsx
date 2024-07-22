import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const handleGitHub = () => {
  window.location.href = "https://github.com/RitochitGhosh";
};
const handleLinkedIn = () => {
  window.location.href = "https://www.linkedin.com/in/ritochit-ghosh-3861372a0/";
};
const handleTwitter = () => {
  window.location.href = "https://twitter.com/18Ritochit";
};
const handleYouTube = () => {
  window.location.href = ""; // Add your YouTube URL here
};
const handleHashnode = () => {
  window.location.href = "https://ritochit.hashnode.dev/";
};
const handleLeetCode = () => {
  window.location.href = "https://leetcode.com/ghosh_ritochit/"; // Replace with your LeetCode URL
};
const handleSwapnoneel = () => {
  window.open("https://swapnoneel.vercel.app/#about", "_blank");
};
const handleArindam = () => {
  window.open("https://arindam-majumder.vercel.app/", "_blank");
};
const handleArnab = () => {
  window.open("https://itzarnabpal.vercel.app/", "_blank");
};

const stacks = ["JavaScript", "ReactJS", "MongoDB", "ExpressJS", "Java", "TailwindCSS", "FramerMotion", "Figma", "Python"];

const Work = () => {
  return (
    <div id="work" className="lg:h-screen-minus-70 bg-[#fafbf8] snap-start flex flex-col justify-center items-center py-12 lg:px[15%] ">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-[150px] lg:py-[50px] w-full px-4 lg:px-0">
        <div className="lg:basis-1/2 flex flex-col gap-6 lg:text-xl sm:text-md text-center lg:text-left lg:pl-[10%]">
          <div className="font-bold text-[#15023a] text-5xl text-left">About Me</div>
          <div className="text-[#15023a] text-left">
            I am a BTech CSE first-year student, focusing on both academics & skill development simultaneously. Currently, I am a Full Stack Web Developer, Open-Source Enthusiast, and an AI/ML admirer. I also write technical blogs on
            <span className="text-[#933EFF] font-semibold opacity-50 cursor-pointer hover:opacity-80 ease-in-out duration-200" onClick={handleHashnode}> Hashnode</span>.
          </div>
          <div className="text-[#15023a] text-left">
            You can also find me solving problems on various coding platforms like
            <span className="text-[#933EFF] font-semibold opacity-50 cursor-pointer hover:opacity-80 ease-in-out duration-200" onClick={handleLeetCode}> LeetCode</span>. Along this process, I share my journey on
            <span className="text-[#933EFF] font-semibold opacity-50 cursor-pointer hover:opacity-80 ease-in-out duration-200" onClick={handleLinkedIn}> LinkedIn</span> &
            <span className="text-[#933EFF] font-semibold opacity-50 cursor-pointer hover:opacity-80 ease-in-out duration-200" onClick={handleTwitter}> Twitter</span>. My goal is to continuously learn and grow in the field of technology, contributing to open-source projects and exploring new advancements in AI/ML.
          </div>
          <div className="text-[#15023a] text-left">
            Also, my friends and I are trying to build a
            <span className="text-[#933EFF] font-semibold opacity-50 cursor-pointer hover:opacity-80 ease-in-out duration-200"> coding community</span> in our college to help our juniors stay on the right track, just as our seniors 
            <span className="underline font-semibold cursor-pointer" onClick={handleSwapnoneel}> Swapnoneel Saha</span>, 
            <span className="underline font-semibold cursor-pointer" onClick={handleArindam}> Arindam Majumder</span>, and 
            <span className="underline font-semibold cursor-pointer" onClick={handleArnab}> Arnab Pal</span> guided us when we stepped into this tech world.
          </div>
          <div className="text-[#15023a] text-left">
            Thanks for reading! <br /><br />
            Feel free to connect with me through the following platforms:
          </div>
          <div className="flex justify-center lg:justify-start gap-3">
            <LinkedInIcon onClick={handleLinkedIn} className="cursor-pointer" />
            <TwitterIcon onClick={handleTwitter} className="cursor-pointer" />
            <GitHubIcon onClick={handleGitHub} className="cursor-pointer" />
            <YouTubeIcon onClick={handleYouTube} className="cursor-pointer" />
          </div>
        </div>
        <div className="lg:basis-1/2 flex flex-col justify-center items-center lg:items-start px-4 lg:px-16 gap-3 mt-10 lg:mt-0">
          {stacks.map((stack) => (
            <div key={stack} className="cursor-pointer text-2xl sm:text-3xl lg:text-5xl font-bold text-[#933EFF] opacity-50 hover:opacity-80 duration-200 ease-in-out text-center lg:text-left">
              {stack}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
