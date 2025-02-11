import React, { useState } from 'react'

const withModel = (Model) => {
    function Newmodle(){
        const[open,setopen]=useState(false);

        function handleopen(){
            setopen(true);
        }
        function handleclose(){
            setopen(false);
        }
        return (
            <Model open={open} Button1={handleopen} Button2={handleclose}></Model>
          )
    }
  return Newmodle;
}

export default withModel