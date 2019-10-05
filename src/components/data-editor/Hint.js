import React from "react";

export default ({hint,setHint,options})=>(<div>
    <h6><label>Hint: <input value={hint.text} onChange={e=>setHint({...hint,text:e.target.value})}/></label></h6>
    
  </div>)