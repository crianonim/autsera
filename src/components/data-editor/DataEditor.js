import React from "react";
import Place from "./Place";
import "./DataEditor.scss";

export default ({ dataSource }) => {
  const [data, setData] = React.useState(dataSource);
  const setPlace = place => {
    setData({
      ...data,
      places: data.places.map(pl => (pl.id === place.id ? place : pl))
    });
  };
  return (
    <div className="editor">
      <h1>Scenario Editor</h1>
      <h2>
        Places{" "}
        <button
          onClick={() => {
            setData({
              ...data,
              places: data.places.concat({
                id: data.meta.sequence++,
                displayName: "",
                name: "newPlace",
                starsToUnlock: 0,
                image: "playground.png",
                positionOnMap: [0, 0],
                interactions: []
              })
            });
          }}
          className="addNew"
        >
          + New
        </button>
      </h2>
      {data.places.map(place => (
        <Place
          key={place.id}
          meta={data.meta}
          setPlace={setPlace}
          deletePlace={() =>
            setData({
              ...data,
              places: data.places.filter(pl => place.id !== pl.id)
            })
          }
          place={place}
        />
      ))}
      <textarea
        readOnly
        style={{ width: "100%", height: "1100px" }}
        value={"export default " + JSON.stringify(data, null, " ")}
      ></textarea>
      }
    </div>
  );
};
