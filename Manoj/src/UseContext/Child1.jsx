import React, { useContext } from 'react'
import { data1,data2 } from './UseCont';
const Child1 = () => {
    const name=useContext(data1);
const age=useContext(data2);
  return (
    <div>
      <h1>My name is {name} and my age is {age}</h1>
    </div>
  )
}

export default Child1
