export type PredictionApiResult = {
  text: string
  classifier: string
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
  model: string
}
