import React from "react";

export default ({ answer, setAnswer,deleteAnswer }) => (
  <div className="editor-answer">
    <div className="flex-row">
      <div>
        <label>
          Answer:{" "}
          <input
            value={answer.text}
            onChange={e => setAnswer({ ...answer, text: e.target.value })}
          />
        </label>
      </div>
      <label>
        Correct:{" "}
        <input
          checked={answer.correct}
          onChange={e => {
            setAnswer({ ...answer, correct: e.target.checked });
          }}
          type="checkbox"
        />
      </label>
      <button onClick={deleteAnswer}>x Delete</button>
    </div>
    <div>
      <label>
        Response:{" "}
        <input
          className="long-text"
          value={answer.response}
          onChange={e => setAnswer({ ...answer, response: e.target.value })}
        />
      </label>
    </div>
  </div>
);
