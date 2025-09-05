interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const Nav = ({ className = "", children, ...props }: NavProps) => {
  return (
    <nav
      className={`${className ? className : ""}`}
      {...props}
      aria-label="Main Navigation"
    >
      {children}
    </nav>
  );
};

export default Nav;
