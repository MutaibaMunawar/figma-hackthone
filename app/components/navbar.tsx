'use client';  
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-7 py-1 bg-white shadow-md font-roboto">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <img
          src="Nike-Logo.png" 
          alt="Nike Logo"
          className="h-[70.47px] w-[70.47px]"
        />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
          (item) => (
            <Link key={item} href="/" legacyBehavior>
              <p className="text-sm text-[#111111] "> {item}</p>
            </Link>
          )
        )}
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Image
            src="/search icon.png"
            alt="Search Icon"
            width={24}
            height={24}
            className="absolute top-2.5 left-2.5 px-[5px]"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-40 px-10 py-1 text-sm border rounded-full focus:outline-none focus:ring"
          />
        </div>

        {/* Heart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700 hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-.35.35-.35-.35a5.5 5.5 0 00-7.78 7.78l8.13 8.14a.75.75 0 001.06 0l8.13-8.14a5.5 5.5 0 000-7.78z"
          />
        </svg>

        {/* Cart Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700 hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.34 2M7 13h10l3.34-8H6.66M7 13L5.34 5m1.66 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          />
        </svg>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700 hover:text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2 font-roboto">
            {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
              (item) => (
                <Link key={item} href="/">
                  <p className="text-sm text-gray-700 hover:text-black">
                    {item}
                  </p>
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}