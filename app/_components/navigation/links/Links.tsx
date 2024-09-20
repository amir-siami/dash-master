import React from "react";
import Link from "next/link";

// Define the shape of each link item
export interface LinkItem {
  path: string;
  title: string;
}

// Define the props for the Links component
export interface LinksProps {
  links: LinkItem[];
}

// Functional component with React.FC type and optional NavbarProps
const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <li
          key={link.title}
          className="hover:text-blue-400 text-blue-600 transition-colors"
        >
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
    </>
  );
};

export default Links;
