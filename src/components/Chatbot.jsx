import React from 'react';
import getResponse from '../chatbot/index.js';
import { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleChat = () => setIsOpen(!isOpen);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about Ravi's resume." },
  ]);
  const [input, setInput] = useState("");

  const handler = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    const userMessage = input;
    setInput("");
    try {
      const reply = await getResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops! Something went wrong." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleChat}
        className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
      >
        <span className="text-4xl">👨‍🦱💭</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white shadow-lg rounded-lg w-72 h-96 flex flex-col">
          <div className="bg-purple-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <span>Hi....Chat with Me</span>
            <button onClick={toggleChat} className="text-white font-bold">
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-gray-300 flex flex-wrap gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg p-2 w-full sm:w-auto"
              placeholder="Type your query..."
            />
            <button
              onClick={handler}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full sm:w-full hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
