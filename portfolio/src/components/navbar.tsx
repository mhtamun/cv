"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar = ({ navItems }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={`navbar fixed top-0 left-0 right-0 z-50 py-4 px-6 ${isScrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-2xl font-bold gradient-text">
          Maruf Hossain
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          id="mobile-menu-button"
          className="md:hidden text-gray-700 hover:text-cyan-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg overflow-hidden`}
      >
        <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;