import React, { useLayoutEffect, useState } from 'react'

const UseLayout = () => {
  const [count,setcount]=useState(1);
  useLayoutEffect(()=>{
    document.title=count;
  },[count]);
    return (
    <div>
      {count}
      <button onClick={()=>setcount(count+1)}>Add</button>
    </div>
  )
}

export default UseLayout
