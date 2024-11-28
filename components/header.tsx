"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    const element = targetId ? document.getElementById(targetId) : null;

    if (element) {
      // Get the height of the sticky header
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      // Calculate the scroll position with the offset
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      // Scroll smoothly to the calculated position
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-[#040a30] text-white py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image
              src="/images/srbcelogo.png"
              width={50}
              height={50}
              alt="logo"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-8 lg:ml-auto text-sm font-medium">
            <li>
              <a
                href="#about"
                onClick={handleScroll}
                className="hover:text-[#5eb4f7]"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={handleScroll}
                className="hover:text-[#5eb4f7]"
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={handleScroll}
                className="hover:text-[#5eb4f7]"
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleScroll}
                className="hover:text-[#5eb4f7]"
              >
                CONTACT
              </a>
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
