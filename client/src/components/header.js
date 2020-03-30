import React from "react";
import MenuIcon from "../img/icons/menu-bar.svg";
import SearchIcon from "../img/icons/search.svg";
import MoreIcon from "../img/icons/menu-ellipsis.svg";

const Header = () => {
  return <header className="header">
      <ul className="header-icons">
          <li><MenuIcon /></li>
          <li>Channel Name</li>
          <li><SearchIcon /></li>
          <li><MoreIcon /></li>
      </ul>
  </header>;
};

export default Header;
