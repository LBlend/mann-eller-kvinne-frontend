import { useContext, useEffect, useState } from "react"
import { InputContext } from "../contexts/InputContext"

// Component styling
import styles from "./Prediction.module.css"

// Utils
import { predict } from "../utils/Api"
import { Oval } from "react-loader-spinner"
import {
  setDefaultColors,
  setFemaleColors,
  setMaleColors,
} from "../utils/Colors"

// Types
import { PredictionApiResult, PredictionOutput } from "../utils/Types"

const toPercent = (number: number) => `${Math.round(number * 100)}%`

const noPrediction: PredictionOutput = {
  male: 0,
  female: 0,
}

const genderOf = (prediction: PredictionOutput) => {
  if (prediction.male > prediction.female) return "mann"
  if (prediction.male < prediction.female) return "kvinne"
  return "begge?"
}

const Prediction = () => {
  const [predicting, setPredicting] = useState(false)
  const [error, setError] = useState("")
  const [prediction, setPrediction] = useState<PredictionOutput>(noPrediction)
  const { state } = useContext(InputContext)

  // Set colors on prediction
  useEffect(() => {
    if (prediction.male > prediction.female) {
      setMaleColors()
    } else if (prediction.male < prediction.female) {
      setFemaleColors()
    } else {
      setDefaultColors()
    }
  }, [prediction])

  // Predict if text, set defaults if not
  useEffect(() => {
    const text = state.text.trim()

    if (!text) {
      setDefaultColors()
      setError("")
      setPrediction(noPrediction)
    }

    if (text && state.model) {
      if (text.length > 10000) {
        setError("Teksten er for lang. Prøv med en mindre tekst")
        setPrediction(noPrediction)
        return
      }
      const controller = new AbortController()
      setPredicting(true)
      predict(text, state.model, controller.signal)
        .then((res: PredictionApiResult) => {
          if (controller.signal.aborted) return
          setError("")
          setPrediction({ male: res.probability.male, female: res.probability.female })
        })
        .catch(e => {
          if (controller.signal.aborted) return
          setError("Noe gikk galt")
          setPrediction(noPrediction)
        })
        .finally(() => {
          if (controller.signal.aborted) return
          setPredicting(false)
        })
      return () => controller.abort()
    }
  }, [state.text, state.model])

  const renderOutput = () => {
    if (predicting) {
      return (
        <div id={styles.loading}>
          <p>Gjetter...</p>
          <Oval color="lightblue" height={64} width={64} />
        </div>
      )
    }

    if (prediction.male || prediction.female) {
      return (
        <div id={styles.prediction}>
          <p className={styles.separator}>
            Du er sannsynligvis en <b>{genderOf(prediction)}</b>
          </p>
          <p>Sannylighet for mann: {toPercent(prediction.male)}</p>
          <p>Sannsynlighet for kvinne: {toPercent(prediction.female)}</p>
        </div>
      )
    }

    if (error) {
      return (
        <div id={styles.prediction}>
          <p className={styles.error}>{error}</p>
        </div>
      )
    }

    return (
      <div id={styles.prediction}>
        <p>
          ingenting... <i>foreløpig</i> 👀
        </p>
      </div>
    )
  }

  return (
    <div id={styles.predictionContainer}>
      <h2>🤖 Maskinen gjetter 🤖</h2>
      {renderOutput()}
    </div>
  )
}

export default Prediction
