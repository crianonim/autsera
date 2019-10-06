import React from "react";

export default ({ option, setOption }) => (
  <div className="editor-option">
    <div className="flex-row">
      <div>
        <label>
          Option:{" "}
          <input
            value={option.name}
            onChange={e => setOption({ ...option, name: e.target.value })}
          />
        </label>
      </div>
      <label>
        Correct:{" "}
        <input
          checked={option.correct}
          onChange={e => {
            setOption({ ...option, correct: e.target.checked });
          }}
          type="checkbox"
        />
      </label>
    </div>
    <div>
      <label>
        Response:{" "}
        <input
          className="long-text"
          value={option.response}
          onChange={e => setOption({ ...option, response: e.target.value })}
        />
      </label>
    </div>
  </div>
);
