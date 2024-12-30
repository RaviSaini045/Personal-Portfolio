import React from "react";

const Skill = () => {
  const skills = [
    { name: "C++", percentage: 92 },
    { name: "Data Structure", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 75 },
    { name: "OOPS", percentage: 89 },
    { name: "Python", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 },
  ];

  return (
    <div className="bg-gray-900 w-full px-4 py-10">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-400 rounded-full h-2 mb-4">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            <p className="text-gray-700">{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
