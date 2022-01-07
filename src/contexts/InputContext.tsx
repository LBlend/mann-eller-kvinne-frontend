import { createContext, useMemo, useState } from "react";

import { Input } from "../utils/Types";

export const InputContext = createContext({
  state: { text: "", model: "bayes" },
  setInput: (input: Input) => {},
});

export const InputContextProvider = (props: any) => {
  const [state, setState] = useState({
    text: "",
    model: "bayes",
  });

  const provider = useMemo(
    () => ({
      state,
      setInput: (input: Input) => {
        setState((prev) => ({ ...prev, text: input.text, model: input.model }));
      },
    }),
    [state]
  );

  return (
    <InputContext.Provider value={provider}>
      {props.children}
    </InputContext.Provider>
  );
};
