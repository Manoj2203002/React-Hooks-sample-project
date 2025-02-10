import React, { useState } from 'react'

const Counter = () => {
  const [count,setcount]=useState(0);
  function HandleIncrement(){
    setcount(count+1);
  }
  function HandleDecrement(){
    setcount(count-1);
  }
  return[count,HandleIncrement,HandleDecrement]
}

export default Counter
