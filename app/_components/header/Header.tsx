import Navigation from "@/app/_components/navigation/Navigation";
import Logo from "@/app/_components/logo/Logo";

interface HeaderProps {
  userRole: "Viewer" | "Admin"; // Define the allowed user roles
}

const Header: React.FC<HeaderProps> = ({ userRole }) => {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation userRole={userRole} />
      </div>
    </header>
  );
};

export default Header;
