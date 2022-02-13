import React, { useState } from "react";

const Search = ({ onChange }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(text);
  };

  return (
    <div>
      <form className="search" onSubmit={handleSubmit} inline>
        <input
          className="search__text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите параметры..."
        ></input>
        <button type="submit" className="search__button">
          Найти
        </button>
      </form>
    </div>
  );
};
export default Search;
