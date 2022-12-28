import axios from 'axios';
import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Css/Signup.css'
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    try{
      e.preventDefault();
      const {data} = await axios.post('http://localhost:4000/user/signup',{
      email,
      password,
    });
    const {success,user} = data;
     if(success){
        localStorage.setItem('user-id',user._id);
        navigate('/payment')
     }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div className='sign'>
          <form className='signupbox' onSubmit={(e)=> handleSubmit(e)}>
              <h1>SIGN UP PAGE</h1>
             <div className='input'>
             <input type="text" placeholder='Enter Email ID' value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <input type="password" placeholder='Create Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
              <input type="password" placeholder='Re enter password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
             </div>
              <button>SIGN UP</button>
          </form>
    </div>
    </>
  )
}

export default Signup
