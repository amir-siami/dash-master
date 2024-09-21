"use client";

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
  const handleNavigation = useHandleNavigation(userRole);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
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
