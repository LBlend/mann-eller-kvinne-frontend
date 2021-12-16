import { Link } from "react-router-dom";

// Page styling
import styles from "./Home.module.css";

// Components
import Header from "../components/Header";
import Input from "../components/Input";
import Prediction from "../components/Prediction";

const Home = () => (
  <>
    <nav>
      <Link to="/about">Om siden</Link>
    </nav>
    <main id={styles.main}>
      <Header />
      <Input />
      <Prediction predicting={false} prediction={{ M: 0, F: 0 }} />
    </main>
  </>
);

export default Home;
