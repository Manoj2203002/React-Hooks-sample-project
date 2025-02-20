import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Edit = () => {
    const [value, setValue] = useState({ name: "", age: "" });
    const navigate = useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/emp/'+id).
        then((res)=>setValue(res.data))
    },[]);
    function handleClick(e) {
        e.preventDefault();
        axios.put('http://localhost:3000/emp/'+id, value)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='Enter Your Name'  value={value.name} name='name' onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} />
                <input type="text" name="age" placeholder='Enter Your Age' value={value.age} onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} />
                <button type="submit" onClick={handleClick}>Edit</button>
            </form>
        </div>
    );
}

export default Edit;
