import React from "react";

export default ({ option }) => (
  <div className="editor-option">
    <h4>Option: {option.name}</h4>
    <label>
      Correct: <input checked={option.correct} type="checkbox" />
    </label>
    <h5>Response: {option.response}</h5>
  </div>
);
