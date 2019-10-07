import React from "react";
import Answer from "./Answer";
import Hint from "./Hint";

export default ({ interaction, setInteraction, deleteInteraction, image }) => {
  return (
    <div className="editor-interaction">
      <div>
        <label>
          Interaction Title:{" "}
          <input
            className="long-text"
            value={interaction.text}
            onChange={e =>
              setInteraction({ ...interaction, text: e.target.value })
            }
          />
        </label>{" "}
        <button onClick={deleteInteraction}>x Delete Interaction</button>
      </div>
      <div>
        <label>
          requiredStars:{" "}
          <input
            className="number"
            type="number"
            value={interaction.requiredStars}
            onChange={e =>
              setInteraction({
                ...interaction,
                requiredStars: e.target.value
              })
            }
          />
        </label>
      </div>
      <div className="interaction-mapping">
        <div className="map-data">
          <div>
            <label>
              Image file:
              <br />
              <input
                value={interaction.image}
                onChange={e => {
                  setInteraction({
                    ...interaction,
                    image: e.target.value
                  });
                }}
              />
            </label>
          </div>
          <div>
            Coordinates
            <br />
            <label>
              x:{" "}
              <input
                className="number"
                type="number"
                onChange={e => {
                  setInteraction({
                    ...interaction,
                    coordinates: [
                      e.target.value,
                      interaction.coordinates[1]
                    ]
                  });
                }}
                value={interaction.coordinates[0]}
              />
            </label>
            <label>
              y:{" "}
              <input
                className="number"
                type="number"
                onChange={e => {
                  setInteraction({
                    ...interaction,
                    coordinates: [
                      interaction.coordinates[0],
                      e.target.value
                    ]
                  });
                }}
                value={interaction.coordinates[1]}
              />
            </label>
          </div>
          <label>
            Radius:
            <br />
            <input
              className="number"
              type="number"
              onChange={e => {
                setInteraction({
                  ...interaction,
                  radius: e.target.value
                });
              }}
              value={interaction.radius}
            />
          </label>
        </div>
        <div className="interaction-map">
          <img src={"/assets/img/" + image} alt="map" />
          <svg
            viewBox="0 0 202 202"
            fill="#ff000080"
            stroke="red"
            style={{
              width: interaction.radius + "%",
              left: interaction.coordinates[0] + "%",
              top: interaction.coordinates[1] + "%"
            }}
          >
            <circle r="100" cx="101" cy="101" />
          </svg>
        </div>
      </div>

      <h4>Answers</h4>
      <div className="editor-answer-list">
        {interaction.answers.map(answer => (
          <Answer
            key={answer.id}
            answer={answer}
            setAnswer={answer =>
              setInteraction({
                ...interaction,
                answers: interaction.answers.map(op =>
                  op.id === answer.id ? answer : op
                )
              })
            }
          />
        ))}
      </div>
      <h4>Hints</h4>
      {interaction.hints.map(hint => (
        <Hint
          key={hint.id}
          hint={hint}
          answers={interaction.answers}
          setHint={hint =>
            setInteraction({
              ...interaction,
              hints: interaction.hints.map(hin =>
                hin.id === hint.id ? hint : hin
              )
            })
          }
        />
      ))}
    </div>
  );
};
