import styles from "./NavBar.module.css";

import { Link } from "react-router-dom";

const NavBar = () => (
  <nav id={styles.navbar}>
    <Link to="/about">Om siden</Link>
  </nav>
);

export default NavBar;
