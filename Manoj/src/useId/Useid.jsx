import React, { useId } from 'react'

const Useid = () => {
    const id=useId();
  return (
    <div>
        <div id='Hellow'>
            <h1 id={id}>Hi</h1>
            <h1 id={id}>Hellow</h1>
        </div>
        <h3 id={id}>Manoj</h3>
        <input type="text" id={id} />
    </div>
  )
}

export default Useid
