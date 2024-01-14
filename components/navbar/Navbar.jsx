"use client"
// components/Navbar.js
// components/Navbar.js
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-5 relative">
      <Image src={logo} alt="" className=' h-16  md:h-auto xl:h-auto' />

      <div className="md:hidden">
        {/* Hamburger Icon */}
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-0 z-50 right-0 h-screen w-64 bg-[#003C82] p-5">
            <button
              className="text-white absolute top-2 right-2"
              onClick={closeMenu}
            >
              {/* Close Button Icon */}
              <svg
                className="w-6 h-6 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <nav className="flex flex-col gap-4 text-white">
              <Link href="/">Home</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Menu */}
      <nav className="gap-6 border-2 md:flex xl:flex 2xl:flex hidden text-white rounded-full px-4 border-white font-bold py-3">
        <Link className="mr-2 hover:text-[#003C82]" href="/">
          Home
        </Link>
        <Link className="mr-2 hover:text-[#003C82]" href="/">
          Blog
        </Link>
        <Link className="mr-2 hover:text-[#003C82]" href="/">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
