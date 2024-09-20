"use client";
import React from "react";
import Links, { LinkItem } from "./links/Links";

const links: LinkItem[] = [
  { title: "Home", path: "/" },
  { title: "List", path: "/list" },
  { title: "Settings", path: "/settings" },
];

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <Links links={links} />
      </ul>
    </nav>
  );
};

export default Navigation;
