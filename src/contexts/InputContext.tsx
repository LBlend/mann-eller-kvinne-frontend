import { createContext, ReactNode, useMemo, useState } from "react"

import { Input } from "../utils/Types"

const defaultInput: Input = { text: "", model: "bayes" }

export const InputContext = createContext({
  state: defaultInput,
  setInput: (_input: Input) => {},
})

export const InputContextProvider = (props: { children: ReactNode }) => {
  const [state, setState] = useState<Input>(defaultInput)

  const provider = useMemo(
    () => ({
      state,
      setInput: (input: Input) => {
        setState(prev => ({ ...prev, text: input.text, model: input.model }))
      },
    }),
    [state]
  )

  return (
    <InputContext.Provider value={provider}>
      {props.children}
    </InputContext.Provider>
  )
}
