import React, { useState } from 'react'

// Control Components are Control By State

const Home = () => {
    const[name,setname]=useState("Manoj");
  return (
    <div>
      <input type="text" onChange={(e)=>setname(e.target.value)} />
      {name}
    </div>
  )
}

export default Home
