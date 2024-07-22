import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Featured from './locations/Featured';
import WebApp from './locations/WebApp';
import TechBlogs from './locations/TechBlogs';
import AiMlProjects from './locations/AiMlProjects';
import Content from './locations/Content';

const Portfolio = () => {
  const [location, setLocation] = useState("featured");

  const handleLocation = (location) => {
    setLocation(location);
  };

  const variants = {
    hidden: (direction) => ({ opacity: 0, x: direction < 0 ? -100 : 100 }),
    enter: { opacity: 1, x: 0 },
    exit: (direction) => ({ opacity: 0, x: direction < 0 ? 100 : -100 }),
  };

  const locations = [
    { name: 'featured', label: 'Featured' },
    { name: 'webApp', label: 'Web App' },
    { name: 'techBlogs', label: 'Tech Blogs' },
    { name: 'aiMlProjects', label: 'AI/ML Projects' },
    { name: 'content', label: 'Content' }
  ];

  const currentLocationIndex = locations.findIndex(loc => loc.name === location);

  return (
    <div id="portfolio" className="h-screen-minus-70 bg-[#fafbf8] snap-start flex flex-col justify-center items-center" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: 'calc(100vh - 100px)' }}>
      <div className="w-11/12 sm:w-3/4 lg:w-1/2 border-2 rounded-xl border-black flex flex-col justify-start items-center p-4">
        <div className="flex justify-center items-center mb-4">
          <div className="text-5xl font-bold text-[#15023a]">Portfolio</div>
        </div>
        <div className="block lg:hidden mb-4">
          <select 
            className="p-2 border rounded-md" 
            value={location} 
            onChange={(e) => handleLocation(e.target.value)}
          >
            {locations.map(loc => (
              <option key={loc.name} value={loc.name}>{loc.label}</option>
            ))}
          </select>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-8 mb-4">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`${location === loc.name ? "text-white bg-[#15023a] rounded-lg" : ""} duration-200 ease-in-out p-2 cursor-pointer`}
              onClick={() => handleLocation(loc.name)}
            >
              {loc.label}
            </motion.div>
          ))}
        </div>
        <div className="h-[438px] w-full p-8 relative overflow-hidden">
          <AnimatePresence mode="wait" custom={currentLocationIndex}>
            {location === "featured" && (
              <motion.div
                key="featured"
                initial="hidden"
                animate="enter"
                exit="exit"
                custom={currentLocationIndex}
                variants={variants}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <Featured />
              </motion.div>
            )}
            {location === "webApp" && (
              <motion.div
                key="webApp"
                initial="hidden"
                animate="enter"
                exit="exit"
                custom={currentLocationIndex}
                variants={variants}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <WebApp />
              </motion.div>
            )}
            {location === "techBlogs" && (
              <motion.div
                key="techBlogs"
                initial="hidden"
                animate="enter"
                exit="exit"
                custom={currentLocationIndex}
                variants={variants}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <TechBlogs />
              </motion.div>
            )}
            {location === "aiMlProjects" && (
              <motion.div
                key="aiMlProjects"
                initial="hidden"
                animate="enter"
                exit="exit"
                custom={currentLocationIndex}
                variants={variants}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <AiMlProjects />
              </motion.div>
            )}
            {location === "content" && (
              <motion.div
                key="content"
                initial="hidden"
                animate="enter"
                exit="exit"
                custom={currentLocationIndex}
                variants={variants}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <Content />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
