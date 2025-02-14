import React from "react";

function Options(props) {
  const {
    length,
    setLength,
    numberAllowed,
    setNumberAllowed,
    symbolAllowed,
    setSymbolAllowed,
    minimumPasswordLength,
    maximumPasswordLength,
  } = props;

  return (
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input
          className="cursor-pointer"
          type="range"
          min={minimumPasswordLength}
          max={maximumPasswordLength}
          value={length}
          onChange={(e) => setLength(e.target.valueAsNumber)}
          name=""
          id=""
        />
        <label htmlFor="length">Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
          name=""
          id=""
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          defaultChecked={symbolAllowed}
          onChange={() => setSymbolAllowed((prev) => !prev)}
          name=""
          id=""
        />
        <label htmlFor="symbolInput">Symbols</label>
      </div>
    </div>
  );
}

export default Options;
