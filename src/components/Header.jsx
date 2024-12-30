import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-purple-700 text-white shadow-lg z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">Ravi Saini</h1>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-teal-400">
            Home
          </a>
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-teal-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-800">
          <a
            href="#home"
            className="block py-2 px-4 hover:bg-purple-600 hover:text-teal-400"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 hover:bg-purple-600 hover:text-teal-400"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 hover:bg-purple-600 hover:text-teal-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 hover:bg-purple-600 hover:text-teal-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 hover:bg-purple-600 hover:text-teal-400"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
