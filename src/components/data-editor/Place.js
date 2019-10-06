import React from "react";
import Interaction from "./Interaction";

export default ({ place, setPlace, deletePlace }) => (
  <div className="editor-place">
    <div>
      <label>
        Place name:{" "}
        <input
          value={place.name}
          onChange={e => {
            setPlace({ ...place, name: e.target.value });
          }}
        />
      </label><button onClick={deletePlace}>DEL</button>
    </div>
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
    <div>
      <label>
        image:{" "}
        <input
          onChange={e => {
            setPlace({ ...place, image: e.target.value });
          }}
          value={place.image}
        />
      </label>
      <img className="place-image" src={"/assets/img/"+place.image} />
      
    </div>
    <div className="city-map">
      <img src="/assets/img/citymap.png" />
      <div className="marker" style={{width:"20px",height:"20px",left:place.positionOnMap[0]+"%",top:place.positionOnMap[1]+"%"}}></div>

    </div>
    <div>
      <label>
        Position on Map:{" "}
        <input
          type="number"
          onChange={e => {
            setPlace({ ...place, positionOnMap:[e.target.value,place.positionOnMap[1]] });
          }}
          value={place.positionOnMap[0]}
        />
         <input
          type="number"
          onChange={e => {
            setPlace({ ...place, positionOnMap:[place.positionOnMap[0],e.target.value] });
          }}
          value={place.positionOnMap[1]}
        />
      </label>
    </div>
    <h3>Interactions</h3>
    {place.interactions.map(interaction => (
      <Interaction
        key={interaction.id}
        interaction={interaction}
        image={place.image}
        setInteraction={(inter) => {
            setPlace({...place,interactions:place.interactions.map(interaction=>interaction.id===inter.id?inter:interaction)})
        }}
      />
    ))}
  </div>
);
