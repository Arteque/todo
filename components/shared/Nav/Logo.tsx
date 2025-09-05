import Link from "next/link";
import Image from "next/image";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

const Logo = ({ className, ...props }: LogoProps) => {
  return (
    <Link href="/" className={`${className}`} {...props}>
      <Image
        alt="Managit Main Logo"
        src="/Shared/Logo/Logo.svg"
        width={276}
        height={61}
        className="w-[17.25rem] h-[3.8125rem]"
      />
    </Link>
  );
};

export default Logo;
