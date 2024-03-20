import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";

import yourData from "../../data/portfolio.json";

const icons = {
  email: <AiOutlineMail />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />
};

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <button 
          key={index} 
          onClick={() => window.open(social.link)}
          className="flex items-center space-x-2 text-xl hover:bg-gray-200 text-black-300 rounded-full p-2" 
        >
          {icons[social.icon]}
          <span>{social.title}</span>
        </button>
      ))}
    </div>
  );
};

export default Socials;




