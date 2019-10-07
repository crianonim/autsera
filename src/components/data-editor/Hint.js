import React from "react";

export default ({ hint, setHint, answers, deleteHint }) => (
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
        <button onClick={deleteHint}>x Delete</button>
    </div>
    <ul>
      {answers.map(answer => (
        <li key={answer.id}>
          <label>
            {answer.text}

            <input
              type="checkbox"
              onChange={e => {
                setHint({
                  ...hint,
                  answers: e.target.checked
                  ? hint.answers.concat(answer.id)
                  : hint.answers.filter(el => el !== answer.id)
                });
              }}
              checked={hint.answers.includes(answer.id)}
            />
          </label>
        </li>
      ))}
    </ul>
  </div>
);
