"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { MenuOverlay } from "./MenuOverlay";

const NavLinks = [
    { title: "About Me", path: "#about" },
    { title: "My Projects", path: "#projects" },
    { title: "What I Get Up To", path: "#stuff"},
    { title: "Contact", path: "#contact" },
];


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavLinkClick = (e, index) => {
        e.preventDefault();

        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrollToPosition;

        const isMobile = window.innerWidth <= 768;  // You can adjust this value as per your requirements

        if (isMobile) {
            switch (index) {
                case 0:
                    scrollToPosition = totalHeight * 0.165;  
                    break;
                case 1:
                    scrollToPosition = totalHeight * 0.29;  
                    break;
                case 2:
                    scrollToPosition = totalHeight * 0.75;  
                    break;
                case 3:
                    scrollToPosition = totalHeight * 0.91;  
                    break;
                default:
                    return;
            }
        } else {
            switch (index) {
                case 0:
                    scrollToPosition = totalHeight * 0.20;
                    break;
                case 1:
                    scrollToPosition = totalHeight * 0.36;
                    break;
                case 2:
                    scrollToPosition = totalHeight * 0.74;
                    break;
                case 3:
                    scrollToPosition = totalHeight * 0.94;
                    break;
                default:
                    return;
            }
        }

        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
        setNavbarOpen(false);
    }
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 py-1 shadow-md transition-all duration-300 ease-in-out animate-gradientShift infinite 30s bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
                <span
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setNavbarOpen(false);
                    }}
                    className="text-lg md:text-xl text-white font-medium cursor-pointer hover:text-gray-400 transition-all duration-300 ease-in-out">
                    jacksCV.com
                </span>
                <div className="mobile-menu block md:hidden z-30"> 
                    {navbarOpen ? (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-gray-300 hover:text-white hover:border-white text-gray-300 transition-all duration-300 ease-in-out">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-gray-300 hover:text-white hover:border-white text-gray-300 transition-all duration-300 ease-in-out">
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-2 md:mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    href={link.path}
                                    title={link.title}
                                    onClick={(e) => handleNavLinkClick(e, index)}
                                    className="text-white hover:text-gray-400 transition-all duration-300 ease-in-out"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NavLinks} onLinkClick={handleNavLinkClick} /> : null}
        </nav>
    );
}

export default Navbar;