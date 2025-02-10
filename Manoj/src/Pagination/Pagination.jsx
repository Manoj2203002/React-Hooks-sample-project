import React, { useState } from 'react'
import Data from './Data.json'
const Pagination = () => {
    const Recordperpage=10;
    const[Currentpage,setpage]=useState(1);
    const totalpage=Math.ceil(Data.length/Recordperpage);
    const getpage=()=>{
        const startpage=(Currentpage-1)*Recordperpage;
        const End=startpage+Recordperpage;
        return Data.slice(startpage,End);
    }
    const previous=()=>{
        setpage(Currentpage-1);
    }
    const next=()=>{
        setpage(Currentpage+1);
    }
  return (
    <div>
        {getpage().map((item,index)=>(
            <div>
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            </div>
        ))}
        <button onClick={previous} disabled={Currentpage===1}>Previous</button>
        {Currentpage}/{totalpage}
        <button  onClick={next} disabled={Currentpage===totalpage}>Next</button>
    </div>
  )
}

export default Paginations