import React from 'react';
import crms from "../assets/crms.jpg"
import LaF from "../assets/LaF.jpg"
import mail from "../assets/mail.jpg"


const Project = () => {
  const projects = [
    {
      id: 1,
      title: "FOUNDiFY",
      description: "Lost And Found Portal",
      image: {LaF},
      techStack: ["React", "Node.js", "MongoDB", "ExpressJS"],
      link: "https://project1-link.com"
    },
    {
      id: 2,
      title: "Mail Bridge",
      description: "Gmail-Like Messenger System",
      image: {mail},
      techStack: ["C++", "Data Structure", "Algorithms"],
      link: "https://project2-link.com"
    },
    {
      id: 3,
      title: "CRMS",
      description: "Citizen Reporting and Monitoring system",
      image: {crms},
      techStack: ["React", "Node.js", "MongoDB", "ExpressJS"],
      link: "https://project2-link.com"
    }
  ];

  return (
    <div className="bg-gray-900 items-center min-h-screen px-8 pt-10 text-white pb-10">
      <h2 className="text-4xl font-bold my-8 text-center">Projects</h2>
      <div className=" text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-500 p-6 rounded-lg shadow-md">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-sm">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;