import React from 'react'
import Counter from './Counter'
const Custom = () => {
    const[count,HandleIncrement,HandleDecrement]=Counter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={HandleIncrement}>Add</button>
      <button onClick={HandleDecrement}>Sub</button>
    </div>
  )
}

export default Custom
