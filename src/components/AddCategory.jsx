import { useState } from "react";

export const AddCategory = function ({ onNewCategory }) {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = function (e) {
    setInputValue(e.target.value);
  };

  const onSubmit = function (e) {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
