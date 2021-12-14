import styles from "./Home.module.css";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Input from "../components/Input";

const Home = () => (
  <>
    <nav>
      <Link to="/about">Om siden</Link>
    </nav>
    <main id={styles.main}>
      <Header />
      <Input />
    </main>
  </>
);

export default Home;
