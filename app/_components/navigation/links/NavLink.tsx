import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation"; // Hook to get the current path

interface NavLinkProps {
  name: string;
  href: string;
  icon?: React.ReactNode;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Allow onClick event
}

const NavLink: React.FC<NavLinkProps> = ({
  name,
  href,
  icon,
  classes,
  onClick,
}) => {
  const pathname = usePathname(); // Get the current path

  const isActive = pathname === href; // Check if the current route matches the link href

  return (
    <li
      key={name}
      className={clsx(
        "hover:text-accent-400 transition-colors",
        classes,
        isActive && "text-accent-600 font-semibold" // Active link styles
      )}
    >
      <Link
        onClick={onClick}
        href={href}
        className={clsx(
          "flex items-center gap-4",
          classes,
          isActive && "border-b-2 border-accent-600" // Add styles for active state
        )}
      >
        {icon && <span>{icon}</span>}
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
