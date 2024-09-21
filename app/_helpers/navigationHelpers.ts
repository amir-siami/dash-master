import { useRouter } from "next/navigation";
import { checkPermission } from "@/app/_helpers/permissions";

interface NavLink {
  name: string;
  href: string;
  visible: boolean;
}

export const useHandleNavigation = (userRole: string) => {
  const router = useRouter();

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: NavLink
  ) => {
    // Check permission before navigating
    if (!checkPermission(userRole, link.name.toLowerCase())) {
      event.preventDefault(); // Prevent navigation
      router.push("/access-denied"); // Redirect to an access denied page
    }
  };

  return handleNavigation;
};
