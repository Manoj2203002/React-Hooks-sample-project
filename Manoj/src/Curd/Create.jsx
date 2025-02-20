import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const [value, setValue] = useState({ name: "", age: "" });
    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/emp', value)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.error("Error posting data:", err));
    }

    return (
        <div>
            <form>
                <input type="text" placeholder='Enter Your Name' name='name' onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} />
                <input type="text" name="age" placeholder='Enter Your Age' onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })} />
                <button type="submit" onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default Create;
