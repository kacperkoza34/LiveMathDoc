import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { title: "LiveMath", link: "/LiveMathDoc/1", dev: false },
  { title: "Zadania otwarte", link: "/LiveMathDoc/2", dev: false },
  { title: "Zadanie zamknięte", link: "/LiveMathDoc/3", dev: false },
  { title: "Zadanie prawda/fałsz", link: "/LiveMathDoc/4", dev: false },
  { title: "Sprawdzanie zadań", link: "/LiveMathDoc/5", dev: false },
  { title: " Tech Stack", link: "/LiveMathDoc/6", dev: true },
  { title: " Redux-Axios", link: "/LiveMathDoc/7", dev: true },
  { title: " Authorization", link: "/LiveMathDoc/8", dev: true },
  { title: " Security", link: "/LiveMathDoc/9", dev: true },
  { title: " RWD", link: "/LiveMathDoc/10", dev: true },
  { title: " Email verification", link: "/LiveMathDoc/11", dev: true },
];

function Nav() {
  return (
    <nav>
      {navLinks.map(({ title, link, dev }) => (
        <NavLink
          key={link}
          className={styles.navLinks}
          activeStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
          to={process.env.PUBLIC_URL + link}
        >
          {dev && <FontAwesomeIcon icon={faCode} />}
          {title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
