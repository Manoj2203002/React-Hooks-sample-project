import React, { useEffect, useState } from 'react'

const Search = () => {
    const  recordsperpage=5;
    const[currentpage,setPage]=useState(1);
    const[Data,setData]=useState([]);
    const[search,setsearch]=useState("");
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((res)=>res.json()).then((d)=>setData(d))
    },[])
    const totalpage=Math.ceil(Data.length/recordsperpage);
    function getpages(){
        const Startingpage=(currentpage-1)*recordsperpage;
        const Endpage=Startingpage+recordsperpage;
        return  Data.slice(Startingpage,Endpage);
    }
    function Previous(){
        setPage(currentpage-1);
    }
    function next(){
        setPage(currentpage+1);
    }
  return (
    <div>
        <input type="text"  placeholder='Search The Product' onChange={(e)=>setsearch(e.target.value.toLowerCase())}/>
        {getpages().filter((item,index)=>item.category.toLowerCase().includes(search)).map((item,index)=>{
            return(
            <div>
                <div key={index}>
                    <p>{item.id}</p>
                    <img src={item.image} alt="Products" height={"200px"} width={"200px"} />
                </div>
            </div>
        )})}
        <button onClick={Previous} disabled={currentpage===1}>Previous</button>
        {currentpage}/{totalpage}
        <button onClick={next} disabled={currentpage===totalpage}>Next</button>
    </div>
  )
}

export default Search
