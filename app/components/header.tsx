"use client"; 

import { useState, useEffect } from "react";

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="flex items-center justify-between px-8 py-2 bg-white border-b shadow-sm">
      {/*  Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="nike logo.png" 
          alt="Nike Logo"
          className="h-6"
        />
      </div>

      {/*  Navigation */}
      <nav className="hidden md:flex space-x-[12.69px] items-center">
  <a href="/home" className="text-black text-sm hover:text-gray-700">Find a Store</a>
  <span className="text-black mx-[12.69px]">|</span>
  <a href="/help" className="text-black text-sm hover:text-gray-700">Help</a>
  <span className="text-black mx-[12.69px]">|</span>
  <a href="/joinUs" className="text-black text-sm hover:text-gray-700">Join Us</a>
  <span className="text-black mx-[12.69px]">|</span>
  <a href="/login" className="text-black text-sm hover:text-gray-700">Sign in</a>
</nav>




      {/* Responsive Menu for Mobile */}
      {isClient && (
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700 hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}
