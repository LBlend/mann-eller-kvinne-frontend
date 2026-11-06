import { Model, PredictionApiResult } from "./Types"

const defaultApiUrl =
  import.meta.env.VITE_API_URL || "http://localhost:5000/mann-eller-kvinne"

const apiUrl: Promise<string> = fetch("/config.json")
  .then(response => (response.ok ? response.json() : {}))
  .then((config: { apiUrl?: string }) => config.apiUrl || defaultApiUrl)
  .catch(() => defaultApiUrl)

export const predict = async (
  text: string,
  model: Model,
  signal?: AbortSignal
): Promise<PredictionApiResult> => {
  const data = {
    text: text,
    classifier: model,
  }
  const response = await fetch(await apiUrl, {
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
