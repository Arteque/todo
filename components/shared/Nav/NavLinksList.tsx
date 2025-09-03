import { FaHome, FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import NavLinkItem from "./NavLinkItem";
const LinksList = [{ href: "/", label: "Home", icon: <FaHome /> }];

const NavLinksList = () => {
  return (
    <>
      <ul>
        {LinksList.map((link, index) => (
          <li key={index}>
            <NavLinkItem
              key={link.href}
              href={link.href}
              className="flex gap-3 items-center"
            >
              <span className="icon">{link.icon}</span>
              <span className="text">{link.label}</span>
            </NavLinkItem>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinksList;
