import Link from "next/link";
import clsx from "clsx";

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
  return (
    <li
      key={name}
      className={clsx("hover:text-accent-400 transition-colors", classes)}
    >
      <Link
        onClick={onClick}
        href={href}
        className={clsx("flex items-center gap-4", classes)}
      >
        {icon && <span>{icon}</span>}
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
