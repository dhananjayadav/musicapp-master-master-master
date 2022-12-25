import React from 'react'
import './Css/Signup.css'

function Signup() {
  return (
    <>
    <div className='sign'>
          <form className='signupbox'>
              <h1>SIGN UP PAGE</h1>
             <div className='input'>
             <input type="text" placeholder='Enter Email ID'/>
              <input type="password" placeholder='Create Password'/>
              <input type="password" placeholder='Re enter password'/>
             </div>
              <button>SIGN UP</button>
          </form>
    </div>
    </>
  )
}

export default Signup
