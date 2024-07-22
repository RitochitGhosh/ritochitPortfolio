import React from 'react';

const Card = ({ props }) => {
  const handleGitHubClick = () => {
    window.location.href = props.github;
  };

  const handleDeploymentClick = () => {
    window.location.href = props.deployment;
  };

  const handleLinkClick = () => {
    window.location.href = props.link;
  };

  return (
    <div className="w-full sm:w-[230px] h-auto rounded-xl duration-200 ease-in-out hover:scale-105 flex flex-col justify-between p-4 shadow-md overflow-hidden bg-white transform transition-transform">
      <img src={props.imgSrc} alt="" className="w-full h-[150px] object-cover rounded-md" />
      <div className="flex flex-col justify-between flex-1 overflow-y-auto mt-2">
        <div className="text-lg font-semibold text-black mb-2">{props.title}</div>
        <div className="flex flex-wrap justify-between gap-2 mt-auto">
          {props.github && (
            <button
              onClick={handleGitHubClick}
              className="rounded-md bg-[#15023a] text-white font-semibold shadow-md hover:shadow-lg duration-200 ease-in-out px-2 py-1 text-xs hover:bg-white hover:text-[#15023a] border-2 border-transparent hover:border-[#15023a]"
            >
              GitHub
            </button>
          )}
          {props.deployment && (
            <button
              onClick={handleDeploymentClick}
              className="rounded-md bg-[#15023a] text-white font-semibold shadow-md hover:shadow-lg duration-200 ease-in-out px-2 py-1 text-xs hover:bg-white hover:text-[#15023a] border-2 border-transparent hover:border-[#15023a]"
            >
              Deployed
            </button>
          )}
          {props.link && (
            <button
            onClick={handleLinkClick}
            className="rounded-md bg-[#15023a] text-white font-semibold shadow-md hover
            duration-200 ease-in-out px-2 py-1 text-xs hover
            hover:text-[#15023a] border-2 border-transparent hover:border-[#15023a]"
            >
            Link
            </button>
            )}
            </div>
            </div>
            </div>
            );
            };
            
            export default Card;