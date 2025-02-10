import React from 'react'
import { useReducer } from 'react';

const Reducer = () => {
    const initialState=0;
    function reducer(state,action){
    switch (action) {
        case 'increment':
            return state+1;
        
        case 'Decrement':
            return state-1;
        
        case 'Multiply':
            return state*2;    
        
        default:
            return 'Wrong Value';
    }
    }
    const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      {state}
      <button onClick={()=>dispatch('increment')}>+</button>
      <button onClick={()=>dispatch('Decrement')}>-</button>
      <button onClick={()=>dispatch('Multiply')}>*</button>
    </div>
  )
}

export default Reducer
