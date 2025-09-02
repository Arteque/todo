"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface NavLinkItemProps {
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

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Link
      href={href}
      className={`${className}`}
      {...props}
      aria-current={pathname === href ? true : false}
    >
      {children}
    </Link>
  );
};

export default NavLinkItem;
