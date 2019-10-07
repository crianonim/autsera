import React from "react";

export default ({ hint, setHint, answers }) => (
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
      {answers.map(option => (
        <li key={option.id}>
          <label>
            {option.name}

            <input
              type="checkbox"
              onChange={e => {
                setHint({
                  ...hint,
                  answers: e.target.checked
                    ? hint.answers.concat(option.id)
                    : hint.answers.filter(el => el !== option.id)
                });
              }}
              checked={hint.answers.includes(option.id)}
            />
          </label>
        </li>
      ))}
    </ul>
  </div>
);
