import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { title: "LiveMath", link: "1", dev: false },
  { title: "Zadania otwarte", link: "2", dev: false },
  { title: "Zadanie zamknięte", link: "3", dev: false },
  { title: "Zadanie prawda/fałsz", link: "4", dev: false },
  { title: "Sprawdzanie zadań", link: "5", dev: false },
  { title: " Tech Stack", link: "6", dev: true },
  { title: " Redux-Axios", link: "7", dev: true },
  { title: " Authorization", link: "8", dev: true },
  { title: " Security", link: "9", dev: true },
  { title: " RWD", link: "10", dev: true },
  { title: " Email verification", link: "11", dev: true },
];

function Nav() {
  return (
    <nav>
      {navLinks.map(({ title, link, dev }) => (
        <NavLink
          key={link}
          className={styles.navLinks}
          activeStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
          to={link}
        >
          {dev && <FontAwesomeIcon icon={faCode} />}
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
