import React, { useState, useEffect } from "react";
import cn from "classnames";

import Logo from "../logo";
import Hyperlink from "../../atoms/hyperlink";
import Hamburger from "../../atoms/hamburger";

import navigationLinks from "../../content/navigation-links";

import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuToggledClass = isMenuOpen ? "navbar--open" : undefined;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("body__no-scroll");
    } else {
      document.body.classList.remove("body__no-scroll");
    }
  });

  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />
      <div className="navbar__toggle">
        <Hamburger
          isToggled={isMenuOpen}
          onClick={() => setMenuOpen(!isMenuOpen)}
        />
      </div>
      <div className={cn("navbar__links", menuToggledClass)}>
        {navigationLinks.map((navLink, index) => (
          <Hyperlink
            key={index}
            className="navbar__link"
            onClick={() => setMenuOpen(false)}
            {...navLink}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
