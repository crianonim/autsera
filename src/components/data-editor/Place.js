import React from "react";
import Interaction from "./Interaction";

export default ({ place, setPlace }) => (
  <div className="editor-place">
    <h2>Place: {place.name}</h2>
    <div>
      <label>
        displayName:{" "}
        <input
          onChange={e => {
            setPlace({ ...place, displayName: e.target.value });
          }}
          value={place.displayName}
        />
      </label>
    </div>
    <div>
      <label>
        starsToUnlock:{" "}
        <input
          type="number"
          onChange={e => {
            setPlace({ ...place, starsToUnlock: e.target.value });
          }}
          value={place.starsToUnlock}
        />
      </label>
    </div>
    {place.interactions.map(interaction => (
      <Interaction
        key={interaction.id}
        interaction={interaction}
        setInteraction={() => {}}
      />
    ))}
  </div>
);
