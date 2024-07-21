import React, { useState } from 'react';
import TestimonialCard from './utils/TestimonialCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const testimonials = [
  {
    imgSrc: '/public/myPic.jpeg',
    name: 'John Doe',
    position: 'Software Engineer',
    text: 'Ritochit is a highly skilled developer with a keen eye for detail. His work is impeccable and he is a pleasure to work with.',
  },
  {
    imgSrc: '/public/myPic.jpeg',
    name: 'Jane Smith',
    position: 'Project Manager',
    text: 'Working with Ritochit has been a wonderful experience. His dedication and passion for technology are truly inspiring.',
  },
  {
    imgSrc: '/public/myPic.jpeg',
    name: 'Michael Johnson',
    position: 'UX Designer',
    text: 'Ritochit’s ability to translate complex requirements into elegant solutions is unmatched. He’s a great asset to any team.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, testimonials.length - 1));
  };

  return (
    <div className="relative" style={{ backgroundImage: 'url(/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', width: '100vw', height: 'calc(100vh - 100px)' }}>
      <div className="absolute top-0 left-0 w-full h-full "></div>
      <div className="flex flex-col items-center justify-center h-screen-minus-70 snap-start relative z-10">
        <h2 className="text-5xl font-bold text-[#15023a] mb-12">Testimonials</h2>
        <div className="relative w-[400px]">
          <TestimonialCard {...testimonials[currentIndex]} />
          <div className="absolute top-1/2 left-[-40px] transform -translate-y-1/2">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="text-[#15023a]">
              <ArrowBackIosRoundedIcon
                sx={{ fontSize: 30, opacity: currentIndex === 0 ? 0.3 : 1 }}
              />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={handleNext} disabled={currentIndex === testimonials.length - 1} className="text-[#15023a]">
              <ArrowForwardIosRoundedIcon
                sx={{ fontSize: 30, opacity: currentIndex === testimonials.length - 1 ? 0.3 : 1 }}
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? 'bg-[#15023a]' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
