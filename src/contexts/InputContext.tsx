import { createContext, useState } from "react";

export const InputContext = createContext({
  text: "",
  model: "bayes",
  setInput: (input: any) => {},
});

export const InputContextProvider = (props: any) => {
  // TODO: Replace any type
  const setInput = (input: any) => {
    setState({ ...state, text: input.text, model: input.model });
  };

  const [state, setState] = useState({
    text: "",
    model: "bayes",
    setInput: setInput,
  });

  return (
    <InputContext.Provider value={state}>
      {props.children}
    </InputContext.Provider>
  );
};
