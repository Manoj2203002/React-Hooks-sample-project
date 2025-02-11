import React from 'react'
import WithModel from './WithModel'
const Hoc = (props) => {
  return (
    <div>
        <button onClick={props.Button1}>Open</button>
        {props.open&&(
            <div>
               <h1> I Will Change Today </h1>
               <button onClick={props.Button2}>❌</button>
            </div>
        )
        }
    </div>
  )
}

export default WithModel(Hoc);