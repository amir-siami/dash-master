import NavLink from "./links/NavLink";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "/settings" },
];

const Navigation: React.FC = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navLinks.map((link) => (
          <NavLink key={link.name} name={link.name} href={link.href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
