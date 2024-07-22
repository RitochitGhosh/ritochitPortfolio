import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
      setCurrentTime(timeString);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/send', { name, email, message });
      alert('Message sent successfully');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <div id="contact" className="lg:h-screen-minus-70 bg-[#fafbf8] snap-start flex justify-center items-center px-4 md:px-0">
      <div className="flex flex-col md:flex-row w-full mx-auto max-w-screen-lg">
        <div className="basis-2/3 flex flex-col items-start py-6 md:pr-10">
          <div className="text-[#15023a] mb-8 flex flex-col gap-3">
            <div className="text-4xl md:text-6xl font-bold">Have some ideas?</div>
            <div className="text-2xl md:text-4xl opacity-50 text-[#933EFF]">
              I'm always eager for new opportunities to learn. <br />
              Let's bring the idea to reality.
            </div>
            <div className="text-lg md:text-2xl">Just fill out the details, I will reach you out as soon as possible.</div>
          </div>
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="mb-6">
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-3 py-2 border-b-2 bg-[#fafbf8] border-[#933EFF] focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-3 py-2 border-b-2 bg-[#fafbf8] border-[#933EFF] focus:outline-none focus:ring-0"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full py-4 border-b-2 bg-[#fafbf8] border-[#933EFF] focus:outline-none focus:ring-0 overflow-scroll"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#933EFF] text-white py-3 rounded-md opacity-70 hover:opacity-100 transition-opacity duration-200 ease-in-out font-bold"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="basis-2/5 flex flex-col items-start justify-center pl-0 md:pl-10 gap-6 md:gap-24 mt-8 md:mt-0">
          <div className="text-[#15023a] text-3xl md:text-4xl font-bold mb-4">
            Contact Details <br /> 
            <a href="mailto:imrito18@gmail.com" className="text-[#933EFF] hover:underline text-lg md:text-xl px-1">
              imrito18@gmail.com
            </a>
          </div>
          <div className="text-3xl md:text-4xl font-bold flex flex-col gap-3 pb-20">
            Location <br /> 
            Kolkata, India
            <div className="text-[#933EFF] opacity-80">{currentTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
