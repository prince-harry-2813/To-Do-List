import { useState } from "react";
const InputHook = (userInput) => {
  const [inputValue, setInputValue] = useState(userInput);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const resetValue = () => {
    setInputValue("");
  };
  return [inputValue, handleChange, resetValue];
};

export default InputHook;
