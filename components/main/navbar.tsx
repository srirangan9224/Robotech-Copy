"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LINKS, SOCIALS } from "@/constants";

// Updated nav links with proper section IDs
const NAV_LINKS = [
  {
    title: "Sponsors",
    link: "#skills",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "FAQ",
    link: "#projects",
  },
  {
    title: "Location",
    link: "#location",
  },
  {
    title: "Schedule",
    link: "#schedule",
  },
  {
    title: "Apply Now",
    link: "https://luma.com/suep29g0",
  },
] as const;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactInfo = [
    {
      label: "Contact IEEE",
      email: "gatechiee@gmail.com",
      type: "general"
    },
    {
      label: "Event Director",
      email: "ctava3@gatech.edu",
      type: "director"
    }
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <button
          onClick={() => handleSmoothScroll('#hero')}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="/IEEE_LOGO.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-xl"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Robotech 2026</div>
        </button>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[700px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 gap-x-4">
            {NAV_LINKS.map((link) => 
              link.link.startsWith('#') ? (
                <button
                  key={link.title}
                  onClick={() => handleSmoothScroll(link.link)}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap"
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  key={link.title}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap"
                >
                  {link.title}
                </Link>
              )
            )}
            
            {/* Contact Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsContactOpen(!isContactOpen)}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition flex items-center gap-1 whitespace-nowrap"
              >
                Contact Us
                <motion.svg
                  animate={{ rotate: isContactOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isContactOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-[rgba(3,0,20,0.9)] backdrop-blur-md border border-[rgba(112,66,248,0.38)] rounded-lg p-4 min-w-[250px] shadow-lg"
                  >
                    {contactInfo.map((contact, index) => (
                      <div key={contact.type} className={`${index > 0 ? 'mt-3 pt-3 border-t border-[rgba(112,66,248,0.2)]' : ''}`}>
                        <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                        <Link
                          href={`mailto:${contact.email}`}
                          className="text-[rgb(112,66,248)] hover:text-white transition text-sm block"
                          onClick={() => setIsContactOpen(false)}
                        >
                          {contact.email}
                        </Link>
                      </div>
                    ))}
                    
                    <div className="mt-3 pt-3 border-t border-[rgba(112,66,248,0.2)]">
                      <Link
                        href="https://sites.gatech.edu/ece-ieee/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="block text-[rgb(112,66,248)] hover:text-white transition text-sm mb-3"
                        onClick={() => setIsContactOpen(false)}
                      >
                        Become a Sponsor
                      </Link>
                    </div>

                    <div className="pt-3 border-t border-[rgba(112,66,248,0.2)]">
                      <p className="text-sm text-gray-400 mb-2">Follow Us</p>
                      <div className="flex gap-3">
                        {SOCIALS.map(({ link, name, icon: Icon }) => (
                          <Link
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            key={name}
                            onClick={() => setIsContactOpen(false)}
                          >
                            <Icon className="h-4 w-4 text-gray-400 hover:text-[rgb(112,66,248)] transition" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex flex-row gap-5">
          <Link
            href="https://robotech-scoring.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 whitespace-nowrap"
          >
            Login
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => 
              link.link.startsWith('#') ? (
                <button
                  key={link.title}
                  onClick={() => {
                    handleSmoothScroll(link.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                >
                  {link.title}
                </button>
              ) : (
                <Link
                  key={link.title}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              )
            )}
            
            {/* Login Button in Mobile */}
            <Link
              href="https://robotech-scoring.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>

            {/* Contact Section in Mobile */}
            <div className="mt-4 pt-4 border-t border-[rgba(112,66,248,0.2)] text-center">
              <p className="text-sm text-gray-400 mb-3">Contact Us</p>
              {contactInfo.map((contact) => (
                <div key={contact.type} className="mb-3">
                  <p className="text-xs text-gray-500">{contact.label}</p>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="text-[rgb(112,66,248)] hover:text-white transition text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {contact.email}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close contact dropdown */}
      {isContactOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsContactOpen(false)}
        />
      )}
    </div>
  );
};
