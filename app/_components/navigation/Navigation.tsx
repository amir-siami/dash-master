"use client";

import React, { useState } from "react";
import NavLink from "./links/NavLink";
import { useHandleNavigation } from "@/app/_helpers/navigationHelpers";

const navLinks = [
  { name: "Home", href: "/", visible: true },
  {
    name: "Dashboard",
    href: "/dashboard",
    visible: true,
  },
  {
    name: "Settings",
    href: "/settings",
    visible: true,
  },
];

const Navigation: React.FC<{ userRole: string }> = ({ userRole }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleNavigation = useHandleNavigation(userRole);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="z-10 text-xl">
      <div className="flex justify-between items-center">
        <button onClick={toggleMobileMenu} className="md:hidden mb-4">
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>
      </div>
      <ul
        className={`flex md:flex-row md:gap-16 gap-4 items-center ${
          isMobileMenuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            name={link.name}
            href={link.href}
            onClick={(event) => handleNavigation(event, link)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
