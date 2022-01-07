import { useContext, useEffect, useState } from "react";
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

// Types
import { PredictionApiResult, PredictionOutput } from "../utils/Types";

const toPercent = (number: number) => `${Math.round(number * 100)}%`;

const Prediction = () => {
  const [predicting, setPredicting] = useState(false);
  const [genderPrediction, setGrenderPrediction] = useState("");
  const [error, setError] = useState("");
  const { state } = useContext(InputContext);

  const noPrediction = {
    M: 0,
    F: 0,
  };
  const [prediction, setPrediction] = useState<PredictionOutput>(noPrediction);

  const PredictionOutput = (prediction: PredictionOutput) => {
    // Set colors and text on prediction
    useEffect(() => {
      if (prediction.M > prediction.F) {
        setMaleColors();
        setGrenderPrediction("mann");
      } else if (prediction.M < prediction.F) {
        setFemaleColors();
        setGrenderPrediction("kvinne");
      } else {
        setDefaultColors();
        setGrenderPrediction("begge?");
      }
    }, [prediction]);

    // Predict if text, set defaults if not
    useEffect(() => {
      if (!state.text) {
        setDefaultColors();
        setError("");
        setPrediction(noPrediction);
      }

      if (state.text && state.model) {
        if (state.text.length > 10000) {
          setError("Teksten er for lang. Prøv med en mindre tekst");
          setPrediction(noPrediction);
          return;
        }
        predict(state.text, state.model)
          .then((res: PredictionApiResult) =>
            setPrediction({ M: res.probability.M, F: res.probability.F })
          )
          .catch((e) => setError("Noe gikk galt"));
      }
    }, [state.text, state.model]);

    if (predicting) {
      return (
        <div id={styles.loading}>
          <p>Gjetter...</p>
          <Loader type="Oval" color="lightblue" height={64} width={64} />
        </div>
      );
    }

    if (prediction.M || prediction.F) {
      return (
        <div id={styles.prediction}>
          <p className={styles.separator}>
            Du er sannsynligvis en <b>{genderPrediction}</b>
          </p>
          <p>Sannylighet for mann: {toPercent(prediction.M)}</p>
          <p>Sannsynlighet for kvinne: {toPercent(prediction.F)}</p>
        </div>
      );
    }

    if (error) {
      return (
        <div id={styles.prediction}>
          <p className={styles.error}>{error}</p>
        </div>
      );
    }

    return (
      <div id={styles.prediction}>
        <p>
          ingenting... <i>foreløpig</i> 👀
        </p>
      </div>
    );
  };

  return (
    <div id={styles.predictionContainer}>
      <h2>🤖 Maskinen gjetter 🤖</h2>
      {PredictionOutput(prediction)}
    </div>
  );
};

export default Prediction;
