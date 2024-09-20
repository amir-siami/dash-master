import React from "react";
import SideNavigation from "../_components/navigation/SideNavigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Welcome | React Query Dashboard",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
