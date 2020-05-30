import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Aside.module.scss";

const Aside = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.aside}>
      <div
        className={
          active ? [styles.root, styles.active].join(" ") : styles.root
        }
      >
        <div className={styles.asideWrapper}>
          <div id={"list"} className={styles.list}>
            {children}
          </div>
          <div
            onClick={() => setActive(!active)}
            className={
              active
                ? [styles.control, styles.controlActive].join(" ")
                : styles.control
            }
          >
            <span>{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Aside.propTypes = {
  children: PropTypes.node,
};

export default Aside;
