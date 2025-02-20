import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { auth } from './Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const Login = () => {
  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const nav=useNavigate();
  async function handleLogin(e){
    e.preventDefault();
    try {
      const credentials= await signInWithEmailAndPassword(auth,email,password);
      const user=credentials.user;
      console.log(user);
      nav('/Home')
    } catch (error) {
      console.error("LOGIN ERROR",error)
      alert("Wrong Password or email")
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={handleLogin}>
      <input type="email" placeholder='Enter your Email' onChange={(e)=>setemail(e.target.value)}/>
      <input type="password"  placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} />
      <button type="submit">Login</button>
      <span>Don't have account</span>
     <Link to="/Signup">Signup</Link>
      </form>
    </React.Fragment>
  )
}

export default Login