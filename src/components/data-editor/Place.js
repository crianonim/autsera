import React from "react";
import Interaction from "./Interaction";

export default ({ place, setPlace, deletePlace, meta }) => (
  <div className="editor-place">
    <div>
      <label>
        Place name:{" "}
        <input
          value={place.text}
          onChange={e => {
            setPlace({ ...place, text: e.target.value });
          }}
        />
      </label>
      <button onClick={deletePlace}>x Delete Place</button>
    </div>
   
    <div>
      <label>
        Required Stars:{" "}
        <input
          className="number"
          type="number"
          onChange={e => {
            setPlace({ ...place, requiredStars: e.target.value });
          }}
          value={place.requiredStars}
        />
      </label>
    </div>

    <div className="editor-place-map">
      <div className="map-data">
        <label>
          Image file: <br />
          <input
            onChange={e => {
              setPlace({ ...place, image: e.target.value });
            }}
            value={place.image}
          />
        </label>
        <div>
          <div>Coordinates: </div>
          <label>
            x:
            <input
              className="number"
              type="number"
              onChange={e => {
                setPlace({
                  ...place,
                  coordinates: [e.target.value, place.coordinates[1]]
                });
              }}
              value={place.coordinates[0]}
            />
          </label>
          <label>
            y:
            <input
              className="number"
              type="number"
              onChange={e => {
                setPlace({
                  ...place,
                  coordinates: [place.coordinates[0], e.target.value]
                });
              }}
              value={place.coordinates[1]}
            />
          </label>
        </div>
      </div>
      <div>
        <img
          className="place-image"
          src={"/assets/img/" + place.image}
          alt="map"
        />
      </div>
      <div className="city-map">
        <img src="/assets/img/citymap.png" alt="map" />
        <div
          className="marker"
          style={{
            width: "20px",
            height: "20px",
            left: place.coordinates[0] + "%",
            top: place.coordinates[1] + "%"
          }}
        ></div>
      </div>
    </div>

    <h3>
      Interactions{" "}
      <button
        onClick={() => {
          setPlace({
            ...place,
            interactions: place.interactions.concat({
              id: meta.sequence++,
              text: "New Interaction",
              image: "leoniereuben.png",
              coordinates: [6, 6],
              radius: 9,
              requiredStars: 2,
              answers: [],
              hints: []
            })
          });
        }}
      >
        + New
      </button>
    </h3>
    {place.interactions.map(interaction => (
      <Interaction
        key={interaction.id}
        interaction={interaction}
        image={place.image}
        meta={meta}
        deleteInteraction={() =>
          setPlace({
            ...place,
            interactions: place.interactions.filter(
              inte => inte.id !== interaction.id
            )
          })
        }
        setInteraction={inter => {
          setPlace({
            ...place,
            interactions: place.interactions.map(interaction =>
              interaction.id === inter.id ? inter : interaction
            )
          });
        }}
      />
    ))}
  </div>
);
