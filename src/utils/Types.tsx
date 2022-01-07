export type PredictionApiResult = {
  clf: string
  probability: {
    M: number
    F: number
  }
  text: string
}

export type PredictionOutput = {
  M: number
  F: number
}

export type Input = {
  text: string
  model: string
}
