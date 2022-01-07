import React, { useContext } from "react";
import { useDebouncedCallback } from "use-debounce";
import { InputContext } from "../contexts/InputContext";

// Component styling
import styles from "./Input.module.css";

const Input = () => {
  const { setInput, state } = useContext(InputContext);
  const debounced = useDebouncedCallback((value) => {
    setInput({ ...state, text: value });
  }, 1000);

  const inputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInput({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id={styles.inputContainer}>
      <textarea
        name="text"
        rows={3}
        cols={40}
        defaultValue={state.text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          debounced(e.target.value)
        }
      ></textarea>

      <h2>Velg modell</h2>
      <select
        name="model"
        onChange={inputHandler}
        defaultValue={state.model} // Explicitly set defaultValue. Just in case :)
      >
        <option value="bayes">Naive Bayes</option>
        <option value="rnn">Recurrent neural network</option>
      </select>
    </div>
  );
};

export default Input;
