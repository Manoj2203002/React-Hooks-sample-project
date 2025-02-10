import React from 'react'
import Child2 from './Child2'
const child1 = ({name}) => {
  return (
    <div>
      <Child2 value={name}/>
    </div>
  )
}

export default child1
