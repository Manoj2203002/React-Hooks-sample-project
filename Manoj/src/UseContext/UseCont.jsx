import React, { createContext, useContext } from 'react'
import Child1 from './Child1';
const data1=createContext();
const data2=createContext();
const UseCont = () => {
const Name="Manoj";
const age="24";
  return (
    <div>
      <data1.Provider value={Name}>
        <data2.Provider value={age}>
            <Child1/>
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}

export default UseCont;
export  {data1,data2};