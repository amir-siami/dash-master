"use client";

import { HomeIcon, NewspaperIcon, CogIcon } from "@heroicons/react/24/solid";
import NavLink from "./links/NavLink";
import { checkPermission } from "@/app/_helpers/permissions";
import { useRouter } from "next/navigation";

interface SideNavigationProps {
  userRole: "Viewer" | "Admin"; // Define the allowed user roles
}
// const userRole = "";

const SideNavigation: React.FC<SideNavigationProps> = ({ userRole }) => {
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
      visible: checkPermission(userRole, "settings"),
    },
  ];
  const router = useRouter();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: { name: string; href: string; visible: boolean }
  ) => {
    if (!link.visible) {
      event.preventDefault(); // Prevent navigation
      router.push("/access-denied"); // Redirect to an access denied page
    }
  };

  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            onClick={(event) => handleNavigation(event, link)} // Pass the event handler here
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
