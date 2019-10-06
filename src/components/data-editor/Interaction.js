import React from "react";
import Option from "./Option";
import Hint from "./Hint";

export default ({ interaction, setInteraction }) => {
  return (
    <div className="editor-interaction">
      <div>
        <label>
          Interaction:{" "}
          <input
            value={interaction.title}
            onChange={e =>
              setInteraction({ ...interaction, title: e.target.value })
            }
          />
        </label>{" "}
      </div>
      <label>
        localStarsToUnlock:{" "}
        <input
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
      <h4>Options</h4>
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
