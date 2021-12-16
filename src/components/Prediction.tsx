import styles from "./Prediction.module.css";

import Loader from "react-loader-spinner";

type PredictionProps = {
  predicting: boolean;
  prediction: {
    M: number;
    F: number;
  };
};

const Prediction = (props: PredictionProps) => {
  const getPrediction = () => {
    if (props.predicting) {
      return (
        <div id={styles.loading}>
          <p>Gjetter...</p>
          <Loader type="Oval" color="lightblue" height={64} width={64} />
        </div>
      );
    }

    if (props.prediction) {
      return (
        <div id={styles.prediction}>
          <p>
            Du er sannsynligvis en <b>{props.predicting}</b>
          </p>
          <p>Sannylighet for mann: {props.prediction.M}</p>
          <p>Sannsynlighet for kvinne: {props.prediction.F}</p>
        </div>
      );
    }

    return <p></p>;
  };

  return (
    <div id={styles.predictionContainer}>
      <h2>🤖 Maskinen gjetter 🤖</h2>
      {getPrediction()}
    </div>
  );
};

export default Prediction;
