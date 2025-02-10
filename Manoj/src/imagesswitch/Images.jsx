import React, { useState } from 'react'

const Images = () => {
    const images=["https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg","https://cdn.pixabay.com/photo/2021/09/13/08/18/blue-flower-6620619_640.jpg","https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_640.jpg"]
    const[currentimage,setimage]=useState(0);
    function previous(){
       setimage(()=>(currentimage-1+images.length)%images.length)
    }
    function next(){
        setimage(()=>(currentimage+1)%images.length)
    }
    return (
    <div>
        <button onClick={previous}>Previous</button>
      <img src={images[currentimage]} alt="" width={"300px"} height={"300px"} />
      <button onClick={next}>next</button>
    </div>
  )
}

export default Images
