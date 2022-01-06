import { useContext, useState } from "react";
import { InputContext } from "../contexts/InputContext";

// Component styling
import styles from "./Prediction.module.css";

// Utils
import { predict } from "../utils/Api";
import Loader from "react-loader-spinner";
import {
  setDefaultColors,
  setFemaleColors,
  setMaleColors,
} from "../utils/Colors";

type PredictionResult = {
  clf: string;
  probability: {
    M: number;
    F: number;
  };
  text: string;
};

const Prediction = () => {
  const [predicting, setPredicting] = useState(false);
  const input = useContext(InputContext);
  const [prediction, setPrediction] = useState({
    clf: "",
    probability: {
      M: 0,
      F: 0,
    },
    text: "",
  });

  if (!input.text) {
    setDefaultColors();
  }

  // Predict if text
  if (input.text && input.model) {
    predict(input.text, input.model)
      .then((res) => setPrediction(res))
      .catch((e) => <p>Noe gikk galt. Prøv igjen senere</p>);
  }

  const predictionOutput = (props: PredictionResult) => {
    console.log("render");
    if (predicting) {
      return (
        <div id={styles.loading}>
          <p>Gjetter...</p>
          <Loader type="Oval" color="lightblue" height={64} width={64} />
        </div>
      );
    }

    if (prediction) {
      if (props.probability.M > props.probability.F) {
        setMaleColors();
      } else if (props.probability.M < props.probability.F) {
        setFemaleColors();
      } else {
        setDefaultColors();
      }

      return (
        <div id={styles.prediction}>
          <p className={styles.separator}>
            Du er sannsynligvis en <b>{predicting}</b>
          </p>
          <p>Sannylighet for mann: {props.probability.M}</p>
          <p>Sannsynlighet for kvinne: {props.probability.F}</p>
        </div>
      );
    }

    return <p></p>;
  };

  return (
    <div id={styles.predictionContainer}>
      <h2>🤖 Maskinen gjetter 🤖</h2>
      {predictionOutput(prediction)}
    </div>
  );
};

export default Prediction;
