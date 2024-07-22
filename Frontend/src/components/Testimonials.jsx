import React, { useState } from 'react';
import TestimonialCard from './utils/TestimonialCard';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const testimonials = [
  {
    imgSrc: '/swapnoneel.jpg',
    name: 'Swapnoneel Saha',
    position: 'DevRel Intern,Technical Writer',
    text: "I've been mentoring Ritochit for over an year now, and he is one of the most hardworking and talented guy I've seen. He is a fast learner and really diverse with his skills, and is extremely passionate about learning new skills and likes to learn every topic by going to the very deep!",
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
    <div
      className="relative"
      style={{
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: 'calc(100vh - 100px)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="flex flex-col items-center justify-center h-screen-minus-70 snap-start relative z-10 px-4 sm:px-8">
        <h2 className="text-5xl font-bold text-[#15023a] mb-12 text-center">Testimonials</h2>
        <div className="relative w-full max-w-md flex justify-center items-center">
          <TestimonialCard {...testimonials[currentIndex]} />
          <div className="absolute top-1/2  left-0  flex items-center">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="text-[#15023a] disabled:opacity-50"
            >
              <ArrowBackIosRoundedIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
          <div className="absolute top-1/2  right-0 flex items-center">
            <button
              onClick={handleNext}
              disabled={currentIndex === testimonials.length - 1}
              className="text-[#15023a] disabled:opacity-50"
            >
              <ArrowForwardIosRoundedIcon sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-[#15023a]' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
