import React, { useState } from 'react'
import { useMemo } from 'react';

const Rendering = () => {
    const[add,setadd]=useState(0);
    const[min,setmin]=useState(0);
    const Memoizedvalue=useMemo(()=>{
    return(add*2)},[add])
  return (
    <div>
        <h1>add:{add}</h1>
        <h1>min:{min}</h1>
        <h1>Mul:{Memoizedvalue}</h1>
        <button onClick={()=>setadd(add+1)}>Add</button>
        <button onClick={()=>setmin(min-1)}>Sub</button>
    </div>
  )
}

export default Rendering