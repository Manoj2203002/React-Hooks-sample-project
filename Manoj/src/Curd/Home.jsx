import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Axios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/emp')
            .then((res) => setData(res.data))
            .catch((err) => console.error("Error fetching data:", err));
    }, [data]);

    function handledelete(id){
        axios.delete('http://localhost:3000/emp/'+id)
    }

    return (
        <div>
            <h2>Employee Data</h2>
           <Link to={'/Add'}> <button>Add</button></Link>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td><Link to={`/Edit/${item.id}`}><button>Edit</button></Link>
                            <button onClick={()=>handledelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Axios;
