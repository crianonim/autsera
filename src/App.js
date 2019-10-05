import React from 'react';
import './App.css';
import DataEditor from './components/data-editor/DataEditor';


function App({dataSource}) {
  
  return (
    <div className="App">
     <DataEditor dataSource={dataSource} />
     {/* <button onClick={()=>{
       const d={...data,places:data.places.map(place=>({id:data.meta.sequence++,...place, interactions:place.interactions.map(inter=>({
         id:data.meta.sequence++,...inter, options:inter.options.map(option=>({
          id:data.meta.sequence++, ...option
         })), hints:inter.hints.map(hint=>({
          id:data.meta.sequence++, ...hint
         }))}))}))}
       console.log(d)
       setData(d)
     }}>IDS</button>
     <textarea style={{width:"100%",height:"200px"}} value={"export default "+JSON.stringify(data,null," ")}></textarea> */}
    </div>
  );
}

export default App;
