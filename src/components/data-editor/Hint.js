import React from "react";

export default ({ hint, setHint, options }) => (
  <div>
    <h6>
      <label>
        Hint:{" "}
        <input
          value={hint.text}
          onChange={e => setHint({ ...hint, text: e.target.value })}
        />
      </label>
    </h6>
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
