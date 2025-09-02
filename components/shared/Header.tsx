import Logo from "./Nav/Logo";
import Nav from "./Nav/Nav";
import NavLinksList from "./Nav/NavLinksList";

const Header = () => {
  return (
    <header>
      <Nav>
        <Logo />
        <NavLinksList />
      </Nav>
    </header>
  );
};

export default Header;
