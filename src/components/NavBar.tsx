import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4 md:py-6 sticky top-0 ">
      <div className="container mx-auto md:flex md:items-center md:justify-between	">
        <div className="flex justify-between items-center ">
          <img
            src="https://img.freepik.com/premium-vector/ed-drop-logo-design_705304-253.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <button
            className="md:hidden rounded-lg p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4.25C3 4.11193 3.11193 4 3.25 4H16.75C16.8881 4 17 4.11193 17 4.25C17 4.38807 16.8881 4.5 16.75 4.5H3.25C3.11193 4.5 3 4.38807 3 4.25ZM3 9.25C3 9.11193 3.11193 9 3.25 9H16.75C16.8881 9 17 9.11193 17 9.25C17 9.38807 16.8881 9.5 16.75 9.5H3.25C3.11193 9.5 3 9.38807 3 9.25ZM3.25 14C3.11193 14 3 14.1119 3 14.25C3 14.3881 3.11193 14.5 3.25 14.5H16.75C16.8881 14.5 17 14.3881 17 14.25C17 14.1119 16.8881 14 16.75 14H3.25Z"
                  fill="currentColor"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4.25C3 4.11193 3.11193 4 3.25 4H16.75C16.8881 4 17 4.11193 17 4.25C17 4.38807 16.8881 4.5 16.75 4.5H3.25C3.11193 4.5 3 4.38807 3 4.25ZM3 9.25C3 9.11193 3.11193 9 3.25 9H16.75C16.8881 9 17 9.11193 17 9.25C17 9.38807 16.8881 9.5 16.75 9.5H3.25C3.11193 9.5 3 9.38807 3 9.25ZM3 14.25C3 14.1119 3.11193 14 3.25 14H16.75C16.8881 14 17 14.1119 17 14.25C17 14.3881 16.8881 14.5 16.75 14.5H3.25C3.11193 14.5 3 14.3881 3 14.25Z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center mt-4 md:mt-0`}
        >
          <a
            href="/"
            className="block text-black font-bold md:inline-block md:mt-0 mx-4"
          >
            Home
          </a>
          <a
            href="/"
            className="block text-black font-bold md:inline-block md:mt-0 mx-4"
          >
            About
          </a>
          <a
            href="/"
            className="block text-black font-bold md:inline-block md:mt-0 mx-4"
          >
            Services
          </a>
          <a
            href="/products"
            className="block text-black font-bold md:inline-block md:mt-0 mx-4"
          >
            Products
          </a>
        </div>
        <button className="hidden md:block rounded-lg bg-black px-6 py-2 text-lg font-medium text-white ml-4">
          Call to Action
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
