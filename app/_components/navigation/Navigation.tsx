"use client";

import { checkPermission } from "@/app/_helpers/permissions";
import NavLink from "./links/NavLink";

const Navigation: React.FC<{ userRole: string }> = ({ userRole }) => {
  const navLinks = [
    { name: "Home", href: "/", visible: true },
    {
      name: "Dashboard",
      href: "/dashboard",
      visible: checkPermission(userRole, "Dashboard"),
    },
    {
      name: "Settings",
      href: "/settings",
      visible: checkPermission(userRole, "settings"),
    },
  ];

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: { name: string; href: string; visible: boolean }
  ) => {
    if (!link.visible) {
      event.preventDefault(); // Prevent navigation
      alert("Access Denied: You do not have permission to view this page.");
    }
  };

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navLinks
          // .filter((link) => link.visible)
          .map((link) => (
            <NavLink
              key={link.name}
              name={link.name}
              href={link.href}
              onClick={(event) => handleNavigation(event, link)} // Pass the event handler here
            />
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
