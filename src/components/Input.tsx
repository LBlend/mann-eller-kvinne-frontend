import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

// Utils
import {
  setDefaultColors,
  setMaleColors,
  setFemaleColors,
} from "../utils/Colors";
import { predict } from "../utils/Api";

const Input = () => {
  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 1000);
  const [model, setModel] = useState("bayes");

  useEffect(() => {
    if (!text) {
      setDefaultColors();
    }
  }, [text]);

  useEffect(() => {
    if (model && debouncedText) {
      console.log("debounce", debouncedText, model);
    }
  }, [debouncedText, model]);

  return (
    <>
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
    </>
  );
};

export default Input;
