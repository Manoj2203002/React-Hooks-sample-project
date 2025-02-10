import React, { useCallback, useState } from 'react'
import Child from './Child'
const Callback = () => {
    const[Data,setData]=useState(0);
    const Aleart=useCallback(()=>{
        alert("Child ");
    },[])
  return (
    <div>
        <Child onClick={Aleart}></Child>
    <h1>{Data}</h1>
    <button onClick={()=>setData(Data+1)}>Add</button>
    </div>
  )
}

export default Callback