import React from 'react'
import './Css/Signup.css'

function Signin() {
   

  return (
    <>
    <div className='sign'>
          <form className='signupbox in'>
              <h1>LOGIN PAGE</h1>
             <div className='inputLogin'>
             <input type="text" placeholder='Email ID'/>
              <input type="password" placeholder='Password'/>
             </div>
              <button>LOG IN</button>
          </form>
    </div>
    </>
  )
}

export default Signin
