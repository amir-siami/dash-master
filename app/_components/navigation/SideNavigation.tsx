import { HomeIcon, NewspaperIcon, CogIcon } from "@heroicons/react/24/solid";
import NavLink from "./links/NavLink";
// import SignOutButton from './SignOutButton';

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Blogs",
    href: "/dashboard/blog",
    icon: <NewspaperIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: <CogIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            name={link.name}
            href={link.href}
            icon={link.icon}
            classes="py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors  font-semibold text-primary-200"
          />
        ))}
      </ul>
    </nav>
  );
}

export default SideNavigation;
