import React, { memo } from 'react'

const Child = ({Aleart}) => {
    console.log("Iam learning Use Call Back")
  return (
    <div>
      <button onClick={Aleart}>Child</button>
    </div>
  )
}

export default React.memo (Child);
