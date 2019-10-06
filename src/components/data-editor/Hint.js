import React from "react";

export default ({ hint, setHint, options }) => (
  <div className="editor-hint">
    <div>
      <label>
        Text:{" "}
        <input
          className="long-text"
          value={hint.text}
          onChange={e => setHint({ ...hint, text: e.target.value })}
        />
      </label>
    </div>
    <ul>
      {options.map(option => (
        <li key={option.id}>
          <label>
            {option.name}

            <input
             
              type="checkbox"
              onChange={e => {
                setHint({
                  ...hint,
                  options: e.target.checked
                    ? hint.options.concat(option.id)
                    : hint.options.filter(el => el !== option.id)
                });
              }}
              checked={hint.options.includes(option.id)}
            />
          </label>
        </li>
      ))}
    </ul>
  </div>
);
