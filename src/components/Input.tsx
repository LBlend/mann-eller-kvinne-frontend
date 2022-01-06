import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce";
import { InputContext } from "../contexts/InputContext";

// Component styling
import styles from "./Input.module.css";

const Input = () => {
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 1000);
  const [model, setModel] = useState("bayes");

  const inputContext = useContext(InputContext);

  useEffect(() => {
    inputContext.setInput({ text: debouncedText, model: model });
  }, [debouncedText, model]);

  return (
    <div id={styles.inputContainer}>
      <textarea
        rows={3}
        cols={40}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setText(e.target.value);
        }}
      ></textarea>
      <h2>Velg modell</h2>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setModel(e.target.value)
        }
        defaultValue={"bayes"} // Explicitly set defaultValue. Just in case :)
      >
        <option value="bayes">Naive Bayes</option>
        <option value="rnn">Recurrent neural network</option>
      </select>
    </div>
  );
};

export { InputContext };
export default Input;
