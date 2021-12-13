import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import Header from "../components/Header";

const Home = () => (
  <>
    <nav>
      <Link to="/about">Om siden</Link>
    </nav>
    <main id={styles.main}>
      <Header />
    </main>
  </>
);

export default Home;
