import React from "react";
import Option from "./Option";
import Hint from "./Hint";

export default ({ interaction, setInteraction }) => {
  const memoOptions = React.useMemo(() => {
    return interaction.options.map(o => o.name);
  }, [interaction]);
  return (
    <div className="editor-interaction">
      <h3>Interaction: {interaction.title}</h3>
      <label>
        localStarsToUnlock:{" "}
        <input type="number" value={interaction.localStarsToUnlock} />
      </label>
      {interaction.options.map(option => (
        <Option key={option.id} option={option} />
      ))}
      {interaction.hints.map(hint => (
        <Hint key={hint.id} hint={hint} options={memoOptions} />
      ))}
    </div>
  );
};
