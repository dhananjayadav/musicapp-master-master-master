import React,{useRef} from 'react'
import './Css/PlayMusic.css'
import insta from './assests/icons8-instagram-26.png'
import instagram from './assests/icons8-instagram-48.png'
import youtubemusic from './assests/play-icon-button-video-vector-isolated-illustration-symbol-white-business-modern-graphic-sign-shape-object-element-circle-web-148064268-removebg-preview.png'
import spotify from './assests/Spotify_Logo_CMYK_Green-removebg-preview.png'
import youtube from './assests/8gzcr6RpGStvZFA2qRt4v6-removebg-preview.png'
import amazone from './assests/56-565024_amazon-logo-png-amazon-png-transparent-png-removebg-preview.png'
import jio from './assests/jiosaavn-logo-300x169-removebg-preview.png'
import soundcloud from './assests/2560px-Soundcloud_logo.svg-removebg-preview.png'
import phone from './assests/icons8-phone-50.png'
import whatsapp from './assests/icons8-whatsapp-32.png'
import profile from './assests/icons8-male-user-48.png'
import {Link} from 'react-router-dom'
import { useSelector , useDispatch } from 'react-redux'

function PlayMusic() {
    const globalState = useSelector((state)=> state.handleFiles)
    const youtubeLink = globalState.webUrl.youtube.slice(globalState.webUrl.youtube.lastIndexOf('/'));
  return (
   <> 
    <div className='SongPage'>
        <div className='nav'>
            <h2>ONE BACKLINK</h2>
        </div>

        <div className='photovideo'>
            <div className='pv1'>
                <div className='pvspace'></div>


                <div className='pvmain'>
                    <div className='imgbox'>
                        <img style={{width:"50vmin",height:'50vmin'}} src={globalState.details.coverImage} alt="" />
                    </div>
                    <h1>{globalState.details.songTitle}</h1>
                    <p>{globalState.details.name}</p>
                </div>


            </div>
            <div className='pv2'>
                <div className='pvmain2'>
                    <div className='pm21'>
                        <p>{globalState.details.name}</p>
                        <a href={globalState.details.instaId} target="_blank"><img style={{height:"3.8vmin"}} src={insta} alt="" /></a>
                    </div>
                    <div className='pm22'>
                         <iframe   width="440" height="220" src={`https://www.youtube.com/embed/${youtubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='pm23'>
                        <div>
                            <img style={{height:"15vmin"}} src={youtubemusic} alt="" />
                            <h1>Music</h1>
                        </div>
                        <button>Play</button>
                    </div>

                </div>
                <div className='pvspace'></div>
            </div>
        </div>

        <div className='AppArea'>
            <div className='extraspace'></div>
             <div className='aa1'>
               <div>
                    <img style={{height:"5vmin"}} src={spotify} alt="" />
                    <a className="musicLink" href={globalState.webUrl.spotify} target="_blank">Play</a>
               </div>
               <div>
                    <img style={{height:"10vmin"}} src={youtube} alt="" />
                    <a className='musicLink' href={globalState.webUrl.youtube} target="_blank">Play</a>
               </div>
               <div>
                    <img style={{height:"5vmin"}} src={amazone} alt="" />
                    <button>Play</button>
               </div>
               <div>
                    <img style={{height:'4vmin'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png?20220222152415'  alt="" />
                    <button>Play</button>
               </div>
             </div>
             
            <div className='line'></div>

             <div className='aa2'>
             <div>
                    <img style={{height:"5vmin"}} src="https://cdn2.downdetector.com/static/uploads/logo/amazonmusiclogo_CG06xih.png" alt="" />
                    <button>Play</button>
               </div>
               <div>
                    <img style={{height:'5vmin'}} src="https://www.seekpng.com/png/full/8-84344_samsung-make-google-play-their-default-music-service.png"  alt="" />
                    <button>Play</button>
               </div>
               <div>
                    <img style={{height:'3vmin'}} src={soundcloud} alt="" />
                    <button>Play</button>
               </div>
               <div>
                    <img style={{height:'13vmin'}} src={jio} alt="" />
                    <button>Play</button>
               </div>
             </div>
             <div  className='extraspace'></div>
        </div>


        <div className='lastOne'>
             <p className='p'>POWERED BY</p>
              <div className='onewali'>
                <span>ONE</span>
                <p>MUSIC RECORDS</p>
              </div>
              <p className='d'>Digitally Distributed By One Music Records Distribution</p>
              <div className='twowali'>
                <a href="https://www.onemusicrecordsofficial.com" target="_blank" style={{textDecoration:'none',color:'rgb(18,175,255)'}}><p>www.onemusicrecordsofficial.com</p></a>
                <a href="https://www.onemusicrecordsdistribution.com" target="_blank" style={{textDecoration:'none',color:'rgb(18,175,255)'}}><p>www.onemusicrecordsdistribution.com</p></a>
              </div>
              <div className='threewali'>
                <a href="tel:+917021480255" target="_blank"><img style={{height:"8vmin"}} src={phone} alt="" /></a>
                <a href="https://www.instagram.com/onemusicrecordsofficial/" target="_blank"><img style={{height:"10vmin"}} src={instagram} alt="" /></a>
                <a href="https://api.whatsapp.com/message/CYNLOEAFI5GGP1?autoload=1&app_absent=0" target="_blank"><img style={{height:"10vmin"}} src={whatsapp} alt="" /></a>
                <Link to="/profile"><img style={{height:"9vmin"}} src={profile} alt="" /></Link>
              </div>
        </div>
    </div>
   </>
  )
}

export default PlayMusic
