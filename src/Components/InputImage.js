import React from 'react'
import './Css/InputPage.css'
import { useState } from "react";
import {Link} from 'react-router-dom'
import image from './assests/no-image-available-icon-ui-260nw-1458092489-removebg-preview.png'
import { useSelector , useDispatch } from 'react-redux'
import { addDetails } from '../fileIndex';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
function InputImage() {
  // const [file, setFile] = useState(image);
  const [detail,setDetail] = useState({
    coverImage:image,
    name:'',
    songTitle:'',
    instaId:''
  })
  const navigate = useNavigate();
    function handleChange(e) {
        // setFile(URL.createObjectURL(e.target.files[0]));
        setDetail({...detail,coverImage:URL.createObjectURL(e.target.files[0])})
    }
    console.log({detail})
  const dispatch = useDispatch();
  const submitForm = (e) =>{
    e.preventDefault()
      dispatch(addDetails(detail))
      console.log('hii')
      navigate('/PlayMusic')
  }
  return (
    <>
      <div className='InputPage'>
           <form className='imagebox' onSubmit={submitForm}>
             
             <div className='photoUpload'>
                  <h1>Cover</h1>
                  <div>
                  <img style={{height:'180px',width:'180px'}} src={detail.coverImage} alt="" />
                  {/* <input onChange={handleChange}  type="file" id="img" style={{display:"none"}}  required/> */}
                  <input onChange={handleChange}  type="file" id="img" name="file" style={{display:"none"}} />
                  <label  htmlFor="img">Upload Image</label>
                  </div>
             </div>
              <div className='title'>
                  <div className='artist'>
                      <h2>Artist Name</h2>
                      <input type="text" onChange={(e)=> setDetail({...detail,name:e.target.value})} value={detail.name}  placeholder='Enter Artist Name'/>
                  </div>
                  <div className='imagetitle'>
                      <h2>Song Title</h2>
                      <input type="text" onChange={(e)=> setDetail({...detail,songTitle:e.target.value})} value={detail.songTitle}  placeholder="Enter Song's title"/>
                  </div>
                  <div className='instaId'>
                      <h2>Instagram ID</h2>
                      <input type="text" onChange={(e)=> setDetail({...detail,instaId:e.target.value})} value={detail.instaId} placeholder="Enter Instagram ID"/>
                  </div>
              </div>
              {/* <Link  to="/PlayMusic" className='UploadSaveBtn'>Save</Link> */}
              <Button type='submit'>Save</Button>
           </form>
      </div>
    </>
  )
}

export default InputImage
