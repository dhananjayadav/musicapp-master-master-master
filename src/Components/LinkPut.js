import React from 'react'
import './Css/LinkPut.css'
import { useState } from 'react'
import {Link } from 'react-router-dom'
import musicicon from './assests/icons8-music-32.png'
import spotify from './assests/Spotify_Logo_CMYK_Green-removebg-preview.png'
import Delete from  './assests/icons8-trash-32.png'
import AddService from './assests/icons8-add-song-24.png'
import soundcloud from './assests/2560px-Soundcloud_logo.svg-removebg-preview.png'
import youtube from './assests/8gzcr6RpGStvZFA2qRt4v6-removebg-preview.png'
import jio from './assests/jiosaavn-logo-300x169-removebg-preview.png'
import amazone from './assests/56-565024_amazon-logo-png-amazon-png-transparent-png-removebg-preview.png'
import { useSelector , useDispatch } from 'react-redux'
import { addUrl, deleteFile } from '../fileIndex'
import { addFile } from '../fileIndex';
import { Modal, Button, FileButton, FileInput } from '@mantine/core';

function LinkPut() {
    const [file, setFile] = useState("");
    const [state, setState] = useState(false);
    const [urlObject, setUrlObject] = useState({
        spotify:'',
        youtube:'',
        gaana:''
    });
    const handleFile = async (value) =>{
        const data = URL.createObjectURL(value);
        setFile(data);
    }
    const [input, setInput] = useState("");
    const globalState = useSelector((state)=> state.handleFiles)
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addFile(file))
    }
  console.log({urlObject})
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
       <div className='PasteLinkPage'>
            <div className='SecondBox'>
                 <div className='second1'>
                    <div>
                        <img style={{height:'3.2vmin'}}  src={musicicon} alt="" />
                        <p>Music services</p>
                    </div>
                    { urlObject.spotify.length>0?<Link onClick={()=> dispatch(addUrl(urlObject))} to="/inputImage" className='nextBtn'>Next &rarr;</Link>:<></>}
                    
                </div>
                <div className='second2 '>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'3.5vmin'}} src={spotify} alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input onChange={(e)=>setUrlObject({...urlObject,spotify:e.target.value})} value={urlObject.spotify} className='second2input' type="text" placeholder='Enter URL' />
              
                </div>
                <div className='second2 two'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'3.5vmin'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png?20220222152415' alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input onChange={(e)=>setUrlObject({...urlObject,gaana:e.target.value})} value={urlObject.gaana} className='second2input' type="text" placeholder='Enter URL' />
                   
                </div>
                <div className='second2 three'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'7vmin'}} src={youtube} alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input onChange={(e)=>setUrlObject({...urlObject,youtube:e.target.value})} value={urlObject.youtube} className='second2input' type="text" placeholder='Enter URL' />

                    </div>
                <div className='second2 four'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4vmin'}} src={amazone} alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input  className='second2input' type="text" placeholder='Enter URL' />
                  
                </div>
                <div className='second2 five'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4.5vmin'}} src="https://cdn2.downdetector.com/static/uploads/logo/amazonmusiclogo_CG06xih.png" alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input  className='second2input' type="text" placeholder='Enter URL' />
                
                </div>
                <div className='second2 six'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4.5vmin'}} src="https://www.seekpng.com/png/full/8-84344_samsung-make-google-play-their-default-music-service.png" alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input  className='second2input' type="text" placeholder='Enter URL' />
              
                </div>
                <div className='second2 seven'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'3vmin'}} src={soundcloud} alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input  className='second2input' type="text" placeholder='Enter URL' />
                
                </div>
                <div className='second2 eight'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'8vmin'}} src={jio} alt="" />
                        </div>
                        {/* <img style={{height:'3.2vmin'}} src={Delete} alt="" /> */}
                   </div>
                   <input  className='second2input' type="text" placeholder='Enter URL' />
                
                </div>
                {
                globalState.files.length ?
                globalState.files.map((fileData,index)=>{
                    return <div key={index} className='second2 '>
                    <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'5vmin'}} src={fileData.file} alt="" />
                            {/* <p>{fileData.title}</p> */}
                        </div>
                        <img style={{height:'3.2vmin',cursor:'pointer'}} onClick={()=> {dispatch(deleteFile(index)); setState(!state)}} src={Delete} alt="" />
                    </div>
                <input  className='second2input' type="text" placeholder='Enter URL' />
           
             </div>
                })
             :
             <></>
            }
                <div className='second3'>
                    <img style={{height:'3.2vmin'}}  src={AddService} alt="" />
                    <Link  onClick={()=>setOpenModal(true)} className='button'>Add services</Link>
                </div>
            </div>
       </div>
       <Modal opened={openModal} onClose={()=> setOpenModal(false)}>
           <form>
           <FileInput style={{marginBottom:'3vmin'}}
            placeholder="Upload image"
            withAsterisk
            onChange={(value)=> handleFile(value)}
            />
            <Button onClick={(e)=>{submitForm(e); setOpenModal(false)}}>
                Save
            </Button>
           </form>
       </Modal>
    </>
  )
}

export default LinkPut