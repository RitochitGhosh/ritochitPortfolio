import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <footer className="h-min w-full bg-[#15023a] text-white py-4 flex justify-center items-center">
      <div className="text-center font-bold">
        <CopyrightIcon className="mr-2" /> 
        2024 Ritochit Ghosh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
