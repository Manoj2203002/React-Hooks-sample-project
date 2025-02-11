import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Axios = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/emp')
        .then((res)=>setdata(res.data));
    },[])
  return (
    <div>
        {data.map((item,index)=>{
            return(
                <React.Fragment>
                    <h1>Name :{item.name}</h1>
                    <h3>Age :{item.age} </h3>
                </React.Fragment>
                
            )
        })}
    </div>
  )
}

export default Axios