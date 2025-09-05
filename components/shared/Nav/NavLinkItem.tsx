"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: string | React.ReactNode;
}

const NavLinkItem = ({
  href,
  className = "",
  children,
  ...props
}: NavLinkItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`px-5 py-4 duration-1000 hover:bg-background-100 ${className} ${
        pathname === href
          ? "pt-5 border-t-5 border-t-call-100 lg:pl-5 lg:pt-0 lg:border-l-5 lg:border-t-0 lg:border-l-call-100"
          : ""
      }`}
      {...props}
      aria-current={pathname === href ? true : false}
    >
      {children}
    </Link>
  );
};

export default NavLinkItem;
