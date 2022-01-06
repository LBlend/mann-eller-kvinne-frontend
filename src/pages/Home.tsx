import { Link } from "react-router-dom";
import { InputContextProvider } from "../contexts/InputContext";

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
      <InputContextProvider>
        <Input />
        <Prediction />
      </InputContextProvider>
    </main>
  </>
);

export default Home;
