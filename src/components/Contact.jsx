import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center h-screen bg-gray-900"> 
      <div className="w-full max-w-md p-10 rounded-lg shadow-md bg-gray-700"> 
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" 
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;