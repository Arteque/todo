const Nav = ({
  className = "",
  children,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
}) => {
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
