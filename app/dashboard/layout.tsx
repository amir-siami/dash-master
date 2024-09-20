import SideNavigation from "../_components/navigation/SideNavigation";
import type { Metadata } from "next";

import getUserRole from "@/app/_utils/api/getUserRole";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Welcome | React Query Dashboard",
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserRole();

  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <div>
        <SideNavigation userRole={user.role} />
      </div>
      <div className="py-1">{children}</div>
    </div>
  );
}
