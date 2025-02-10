import React, { useEffect, useState } from 'react'
const Pixabay = () => {
  const[Data,setData]=useState([]);
  const[Search,setSearch]=useState("");
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=48545552-fc9a15f1c0e7ed54aeba440c7&q=${Search}+flowers&image_type=photo`)
    .then((res)=>res.json()).
    then((d)=>setData(d.hits));
  })
  return (
    <React.Fragment>
      <input type="text" className='' placeholder='Search Image' onChange={(e)=>setSearch(e.target.value)}/>
      {Data.map((item,index)=>{
        return(
          <div>
            <img src={item.webformatURL} alt="images" width={item.previewWidth} height={item.previewHeight} />
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default Pixabay