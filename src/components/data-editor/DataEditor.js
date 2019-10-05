import React from "react";
import Place from "./Place";

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
      {data.places.map(place => (
        <Place key={place.id} setPlace={setPlace} place={place} />
      ))}
      <textarea style={{width:"100%",height:"1100px"}} value={"export default "+JSON.stringify(data,null," ")}></textarea>}
    </div>
  );
};
