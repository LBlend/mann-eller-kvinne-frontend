export type Model = "bayes" | "rnn"

export type PredictionApiResult = {
  text: string
  classifier: Model
  probability: {
    male: number
    female: number
  }
}

export type PredictionOutput = {
  male: number
  female: number
}

export type Input = {
  text: string
  model: Model
}
