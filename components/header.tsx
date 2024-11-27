"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#040a30] text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/images/srbcelogo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 lg:ml-auto text-sm font-medium">
            <li>
              <Link href="#about" className="hover:text-[#5eb4f7]">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#5eb4f7]">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="#gallery" className="hover:text-[#5eb4f7]">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#5eb4f7]">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block lg:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
