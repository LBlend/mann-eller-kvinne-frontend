import { Model, PredictionApiResult } from "./Types"

const apiBaseUrl =
  import.meta.env.VITE_API_URL || "http://localhost:5000/mann-eller-kvinne"

export const predict = async (
  text: string,
  model: Model,
  signal?: AbortSignal
): Promise<PredictionApiResult> => {
  const data = {
    text: text,
    classifier: model,
  }
  const response = await fetch(`${apiBaseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    signal,
  })
  if (!response.ok) {
    throw new Error(`Prediction request failed with status ${response.status}`)
  }
  return await response.json()
}
