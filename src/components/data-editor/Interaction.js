import React from "react";
import Option from "./Option";
import Hint from "./Hint";

export default ({ interaction, setInteraction, deleteInteraction,image }) => {
  return (
    <div className="editor-interaction">
      <div>
        <label>
          Interaction Title:{" "} 
          <input
            className="long-text"
            value={interaction.title}
            onChange={e =>
              setInteraction({ ...interaction, title: e.target.value })
            }
          />
        </label>{" "}
        <button onClick={deleteInteraction}>x Delete Interaction</button>
      </div>
      <div>
        <label>
          localStarsToUnlock:{" "}
          <input
            className="number"
            type="number"
            value={interaction.localStarsToUnlock}
            onChange={e =>
              setInteraction({
                ...interaction,
                localStarsToUnlock: e.target.value
              })
            }
          />
        </label>
      </div>
      <div className="interaction-mapping">
        <div className="map-data">
          <div>
            <label>
              Image file:<br />
              <input 
                value={interaction.image}
                onChange={e=>{setInteraction({
                  ...interaction,
                  image:e.target.value
                })}}
              />
            </label>
          </div>
          <div>Position In Place
          <br />
            <label>
              x:{" "}
              <input
                className="number"
                type="number"
                onChange={e => {
                  setInteraction({
                    ...interaction,
                    positionOnPlace: [
                      e.target.value,
                      interaction.positionOnPlace[1]
                    ]
                  });
                }}
                value={interaction.positionOnPlace[0]}
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
                    positionOnPlace: [
                      interaction.positionOnPlace[0],
                      e.target.value
                    ]
                  });
                }}
                value={interaction.positionOnPlace[1]}
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
                  radiusOnPlace: e.target.value
                });
              }}
              value={interaction.radiusOnPlace}
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
              width: interaction.radiusOnPlace + "%",
              left: interaction.positionOnPlace[0] + "%",
              top: interaction.positionOnPlace[1] + "%"
            }}
          >
            <circle r="100" cx="101" cy="101" />
          </svg>
        </div>
      </div>

      <h4>Options</h4>
      <div className="editor-option-list">

      {interaction.options.map(option => (
        <Option
        key={option.id}
          option={option}
          setOption={option =>
            setInteraction({
              ...interaction,
              options: interaction.options.map(op =>
                op.id === option.id ? option : op
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
          options={interaction.options}
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
