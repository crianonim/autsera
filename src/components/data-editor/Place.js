import React from "react";
import Interaction from "./Interaction";

export default ({ place, setPlace }) => (
  <div className="editor-place">
    <h2>
      <label>
        Place name:{" "}
        <input
          value={place.name}
          onChange={e => {
            setPlace({ ...place, name: e.target.value });
          }}
        />
      </label>
    </h2>
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
        setInteraction={(inter) => {
            setPlace({...place,interactions:place.interactions.map(interaction=>interaction.id===inter.id?inter:interaction)})
        }}
      />
    ))}
  </div>
);
