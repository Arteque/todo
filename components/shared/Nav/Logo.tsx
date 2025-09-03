import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/" className="block max-w-[17.25rem] h-auto">
      <Image
        alt="Managit Main Logo"
        src="/Shared/Logo/Logo.svg"
        width={276}
        height={61}
        className="w-full h-auto"
      />
    </Link>
  );
};

export default Logo;
