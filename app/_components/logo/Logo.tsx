import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image src="/icon.png" height={60} width={60} alt="The dashboard logo" />
      <span className="text-xl font-semibold text-primary-100">
        The Master Dashboard
      </span>
    </Link>
  );
};

export default Logo;
