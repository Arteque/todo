import AccountState from "./AccountState/AccountState";
import Logo from "./Nav/Logo";
import Nav from "./Nav/Nav";
import NavLinksList from "./Nav/NavLinksList";

interface HeaderProps {
  className?: string;
}

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={`${className}`} {...props}>
      <Nav>
        <Logo />
        <NavLinksList />
      </Nav>
      <AccountState />
    </header>
  );
};

export default Header;
