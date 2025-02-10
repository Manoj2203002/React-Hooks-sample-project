import React from 'react'
import Child1 from './Child1'
const  Parent = () => {
  const name="Manoj";
  const age="24";
  return (
    <div>
      <Child1 name={name}/>
    </div>
  )
}

export default Parent
