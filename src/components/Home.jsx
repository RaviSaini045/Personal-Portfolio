import React from "react";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import vr from "../assets/vr.png";

const Home = () => {
  return (
    <div className="bg-gray-900 flex flex-col md:flex-row justify-around items-center min-h-screen px-8 pt-20 pb-8 text-white">
      
      <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-6">
        <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
          Hello, My name is <span className="text-purple-500">RAVI SAINI</span>
        </h1>
        <div className="text-xl md:text-3xl font-medium">
          I am a Passionate Frontend Developer
        </div>
        
        {/* Social Media Links */}
        <div className="social-media flex space-x-6 mt-4">
          <a href="https://www.linkedin.com/in/ravi-saini-78096a22a/" className="hover:text-blue-600">
            <FaLinkedinIn size={32} />
          </a>
          <a href="https://x.com/ravisaini045?t=q0PGH9OPFs9WLaDMtnMOHQ&s=09" className="hover:text-blue-400">
            <FaTwitter size={32} />
          </a>
          <a href="https://x.com/ravisaini045?t=q0PGH9OPFs9WLaDMtnMOHQ&s=09" className="hover:text-pink-500">
            <FaInstagram size={32} />
          </a>
          <a href="https://www.linkedin.com/in/ravi-saini-78096a22a/" className="hover:text-blue-500">
            <FaFacebook size={32} />
          </a>
        </div>

        <a
          href="https://drive.google.com/file/d/1xyNAFgMvqc2d-yrE39zbI_ydfb2SBTNy/view?usp=drivesdk"
          download="Ravi_Resume.pdf"
          className="btn inline-block mt-8 px-8 py-4 bg-teal-500 text-lg font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-10 md:mt-0">
        <img
          src={vr}
          alt="Virtual Representation"
          className="w-96 h-96 object-contain shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
