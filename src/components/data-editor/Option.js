import React from "react";

export default ({ option,setOption }) => (
  <div className="editor-option">
    <h4><label>Option: <input value={option.name} onChange={e=>setOption({...option,name:e.target.value})}/></label></h4>
    <label>
      Correct: <input checked={option.correct} onChange={e=>{setOption({...option,correct:e.target.checked})}} type="checkbox" />
    </label>
    <h5><label>Response: <input value={option.response} onChange={e=>setOption({...option,response:e.target.value})}/></label></h5>
  </div>
);
