import React from 'react';
import crms from "../assets/crms.jpg";
import LaF from "../assets/LaF.jpg";
import mail from "../assets/mail.jpg";

const Project = () => {
  return (
    <div className="bg-gray-900 items-center min-h-screen px-8 pt-10 text-white pb-10">
      <h2 className="text-4xl font-bold my-8 text-center">Projects</h2>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1 - FOUNDiFY */}
        <div key="1" className="bg-gray-500 p-6 rounded-lg shadow-md">
          <img src={LaF} alt="FOUNDiFY" className="w-full h-40 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">FOUNDiFY</h3>
          <p className="text-gray-700 mb-4">Lost And Found Portal</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">React</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">Node.js</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">MongoDB</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">ExpressJS</span>
          </div>
          <a href="https://lost-and-found-lac.vercel.app/login" className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project</a>
        </div>
        
        {/* Project 2 - Mail Bridge */}
        <div key="2" className="bg-gray-500 p-6 rounded-lg shadow-md">
          <img src={mail} alt="Mail Bridge" className="w-full h-40 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">Mail Bridge</h3>
          <p className="text-gray-700 mb-4">Gmail-Like Messenger System</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">C++</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">Data Structure</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">Algorithms</span>
          </div>
          <a href="https://github.com/RaviSaini045/Gmail_Messanger" className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project</a>
        </div>

        {/* Project 3 - CRMS */}
        <div key="3" className="bg-gray-500 p-6 rounded-lg shadow-md">
          <img src={crms} alt="CRMS" className="w-full h-40 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">CRMS</h3>
          <p className="text-gray-700 mb-4">Citizen Reporting and Monitoring System</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">React</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">Node.js</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">MongoDB</span>
            <span className="bg-gray-800 text-white px-2 py-1 rounded-sm">ExpressJS</span>
          </div>
          <a href="https://github.com/RaviSaini045/Public_Sphere_Backend" className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project</a>
        </div>

      </div>
    </div>
  );
};

export default Project;
