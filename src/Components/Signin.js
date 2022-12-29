import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Css/Signup.css'

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signInAPI =  async (e) =>{
    e.preventDefault();
    try{
       await axios.post('http://localhost:4000/user/signIn',{
        email,password
      });
      navigate('/profile')
    }catch(err){
      console.log({err})
      alert('wrong username or password')
    }
  }
  return (
    <>
    <div className='sign'>
          <form className='signupbox in' onSubmit={(e) => signInAPI(e)}>
              <h1>LOGIN PAGE</h1>
             <div className='inputLogin'>
             <input type="text" placeholder='Email ID' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
             </div>
              <button>LOG IN</button>
          </form>
    </div>
    </>
  )
}

export default Signin
