import React from 'react';
import './App.css';

const Hint = ({hint,options})=>(<div>
  <h6>Hint: {hint.text}</h6>
  
</div>)
const Option=({option})=>(<div className="option">
  <h4>Option: {option.name}</h4>
  <label>Correct: <input checked={option.correct} type="checkbox"/></label>
  <h5>Response: {option.response}</h5>
</div>)
const Interaction=({interaction,setInteraction})=>{
  const memoOptions=React.useMemo(()=>{
    return interaction.options.map(o=>o.name)
  },[interaction])
  return (<div className="interaction">
  
  <h3>Interaction: {interaction.title}</h3>
  <label>localStarsToUnlock: <input type="number"  value={interaction.localStarsToUnlock}/></label>
  {interaction.options.map(option=><Option key={option.name} option={option}/>)}
  {interaction.hints.map(hint=>(<Hint hint={hint} options={memoOptions}/>))}
</div>)}

const Place=({place, setPlace})=>(<div className="place">
  <h2>Place: {place.name}</h2>
  <div><label>displayName: <input onChange={(e)=>{setPlace({...place,displayName:e.target.value})}} value={place.displayName}/></label></div>
  <div><label>starsToUnlock: <input type="number" onChange={(e)=>{setPlace({...place,starsToUnlock:e.target.value})}} value={place.starsToUnlock}/></label></div>
  {place.interactions.map(interaction=><Interaction key={interaction.title} interaction={interaction} setInteraction={()=>{}}/>)}
</div>)
function App({dataSource}) {
  const [data,setData]=React.useState(dataSource);
  const setPlace=(place)=>{
    setData({...data,places:data.places.map(pl=>pl.name===place.name?place:pl)})
  }
  return (
    <div className="App">
     {data.places.map(place=>(<Place key={place.name} setPlace={setPlace} place={place}/>))}
    </div>
  );
}

export default App;
