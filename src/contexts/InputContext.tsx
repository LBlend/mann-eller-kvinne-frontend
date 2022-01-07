import { createContext, useMemo, useState } from "react";

export const InputContext = createContext({
  state: { text: "", model: "bayes" },
  setInput: (input: any) => {},
});

export const InputContextProvider = (props: any) => {
  // TODO: Replace any type
  const [state, setState] = useState({
    text: "",
    model: "bayes",
  });

  const provider = useMemo(
    () => ({
      state,
      setInput: (input: any) => {
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
