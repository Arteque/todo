import { FaHome } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem";
const LinksList = [{ href: "/", label: "Home", icon: <FaHome /> }];

const NavLinksList = () => {
  return (
    <>
      <ul className="fixed bottom-0 inset-x-0 bg-background-100">
        {LinksList.map((link, index) => (
          <li key={index}>
            <NavLinkItem
              key={link.href}
              href={link.href}
              className="flex gap-3 items-center justify-center w-fit lg:w-auto"
            >
              <span className="icon">{link.icon}</span>
              <span className="text hidden md:inline">{link.label}</span>
            </NavLinkItem>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinksList;
