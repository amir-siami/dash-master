"use client";

import { HomeIcon, NewspaperIcon, CogIcon } from "@heroicons/react/24/solid";
import { useHandleNavigation } from "@/app/_helpers/navigationHelpers";

import NavLink from "./links/NavLink";

interface SideNavigationProps {
  userRole: "Viewer" | "Admin"; // Define the allowed user roles
}
const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
    visible: true,
  },
  {
    name: "Blogs",
    href: "/dashboard/blog",
    icon: <NewspaperIcon className="h-5 w-5 text-primary-600" />,
    visible: true,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <CogIcon className="h-5 w-5 text-primary-600" />,
    visible: true,
  },
];
const SideNavigation: React.FC<SideNavigationProps> = ({ userRole }) => {
  const handleNavigation = useHandleNavigation(userRole);

  return (
    <nav className="border-r border-primary-900 h-full">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            onClick={(event) => handleNavigation(event, link)}
            name={link.name}
            href={link.href}
            icon={link.icon}
            classes="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors  font-semibold text-primary-200"
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
