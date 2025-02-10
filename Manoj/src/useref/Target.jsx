import React, { useRef, useState } from 'react'

const Target = () => {
    const[Data,setData]=useState("");
    const inputref=useRef();
    function onclick(){
        setData(inputref.current.value)
        inputref.current.focus();
    }
  return (
    <div>
        <input type="text" ref={inputref}/>
        <button onClick={onclick}>Submit</button>
        {Data}
    </div>
  )
}

export default Target