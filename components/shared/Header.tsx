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
      <Nav className="px-3 pt-5">
        <Logo className="block w-fit mx-auto lg:mx-[unset]" />
        <NavLinksList />
      </Nav>
      {/* <AccountState /> */}
    </header>
  );
};

export default Header;
