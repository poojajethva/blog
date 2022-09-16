import React, { useState } from "react";

function Search({ clearSearchHandler, searchHandler }) {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  return (
    <div className="search-wrap">
      <input type="text" value={inputVal} onChange={changeHandler} />
      <button
        onClick={() => {
          searchHandler(inputVal);
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
            setInputVal('');
            clearSearchHandler();
        }}
      >
        Clear Search
      </button>
    </div>
  );
}

export default Search;
