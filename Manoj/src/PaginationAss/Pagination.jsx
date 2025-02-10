import React, { useState } from 'react'
import Data from './Data.json'
import './Pagination.scss'
const Pagination = () => {
  const Recordperpage=10;
  const[CurrentPage,setpage]=useState(1);
  const totalpage=Math.ceil(Data.length/Recordperpage)
  function GetRecords(){
    const Stating=(CurrentPage-1)*Recordperpage;
    const End=Stating+Recordperpage;
    return Data.slice(Stating,End)
  }
  function previous(){
    setpage(CurrentPage-1);
  }
  function next(){
    setpage(CurrentPage+1)
  }
  function gotopage(page){
    setpage(page)
  }
  const getPageNumbers = () => {
    const startPage = Math.max(1, CurrentPage - 1); // Show one page before the current page
    const endPage = Math.min(totalpage, CurrentPage + 1); // Show one page after the current page
    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };
  return (
    <div>
      <body>
      <table className='Table'>
        <thead className='head'>
          <tr>
            <th className='data'>Id</th>
            <th className='data'>Name</th>
            <th className='data'>Email</th>
          </tr>
        </thead>
        <tbody>
          {GetRecords().map((item,index)=>(
                <tr key={index}>
                  <td className='data'>{item.id}</td>
                  <td className='data'>{item.name}</td>
                  <td className='data'>{item.email}</td>
                </tr>
          ))}
        </tbody>
      </table>
      <div className='Button'>
      <button disabled={CurrentPage===1} onClick={previous}>Previos</button>
      {getPageNumbers().map((page) => (
          <p key={page} className={`page-number ${CurrentPage === page ? "active" : ""}`}onClick={() => gotopage(page)} >{page}</p>
        ))}
      <button disabled={CurrentPage===totalpage} onClick={next}>Next</button>
      </div>
      </body>
    </div>
  )
}

export default Pagination