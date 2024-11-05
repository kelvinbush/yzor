"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#0A2342] shadow-lg" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">Yzor</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#team">Team</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="bg-[#FFD700] text-[#0A2342] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#E5C100] transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FFD700] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A2342]">
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#services" mobile>
              Services
            </NavLink>
            <NavLink href="#team" mobile>
              Team
            </NavLink>
            <NavLink href="#contact" mobile>
              Contact
            </NavLink>
            <button className="w-full text-left bg-[#FFD700] text-[#0A2342] px-3 py-2 rounded-md text-base font-medium hover:bg-[#E5C100] transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

function NavLink({ href, children, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${mobile ? "block" : "inline-block"} text-white hover:text-[#FFD700] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
    >
      {children}
    </Link>
  );
}
