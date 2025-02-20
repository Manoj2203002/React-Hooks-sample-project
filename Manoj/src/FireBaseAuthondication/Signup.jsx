import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { auth } from './Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
const Signup = () => {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const nav=useNavigate();
    async function handlesignup(e) {
        e.preventDefault();
        try {
            const elements= await createUserWithEmailAndPassword(auth,email,password);
            const use=elements.user;
            nav("/")
        } catch (error) {
            console.error("Not created",error)
        }
    }
  return (
    <div>
        <form onSubmit={handlesignup}>
        <input type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder='Enter Your Passwrd' onChange={(e)=>setpassword(e.target.value)} />
        <span>Already Have an account</span>
        <Link to="/">Login</Link>
        <button type="submit">SignUp</button>
        </form>
    </div>
  )
}

export default Signup