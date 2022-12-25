import React from 'react'
import './Css/PlayMusic.css'
import './Css/Profile.css'
// import {Link} from 'react-router-dom'
import insta from './assests/icons8-instagram-48.png'
import instagram from './assests/icons8-instagram-48.png'
import youtubelogo from './assests/icons8-youtube-48.png'
import spotify from './assests/Spotify_Logo_CMYK_Green-removebg-preview.png'
import youtube from './assests/8gzcr6RpGStvZFA2qRt4v6-removebg-preview.png'
import amazone from './assests/56-565024_amazon-logo-png-amazon-png-transparent-png-removebg-preview.png'
import jio from './assests/jiosaavn-logo-300x169-removebg-preview.png'
import soundcloud from './assests/2560px-Soundcloud_logo.svg-removebg-preview.png'
import phone from './assests/icons8-phone-50.png'
import whatsapp from './assests/icons8-whatsapp-32.png'
import correct from './assests/icons8-correct-48 (2).png'

function Profile() {
  return (
  <> 
    <div className='profilepage'>
        <div className='nav'>
            <h2>ONE BACKLINK</h2>
        </div>

        <div className='profilefirst'>
             <div className='pro1'>
              <div className='prophoto'>
                <img style={{height:"25vmin"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacQ3PL--cuMZ8RJOTyjEBEo22_KjkrJiaIt24znMUQw&s" alt="" />
              </div>
              <div className='proname'>
                <div>
                <p className='name'>Saah Goswami</p>
                <img src={correct} alt="" />
                </div>
                <p className='job'>Musician</p>
                <p className='discription'>Hii This IS Saah Goswami an Indian Artist (Singer ,Lyricist , Actor) As an Artist i Always Try To Deliver meaningful & soulful songs for my Lovely listeners ,You Can Check Out My Work On Every Streaming Plateform & dont't Forget to give your review</p>
              </div>
             </div>
             <div className='pro2'>
              <div className='applink'>
                <div className='insta'>
                  <div></div>
                  <img style={{height:"4vmin"}} src={insta} alt="" />
                  <p>Instagram</p>
                  <div></div>
                </div>
                <div className='youtube'>
                  <div></div>
                  <img style={{height:"4vmin"}} src={youtubelogo} alt="" />
                  <p>YouTube</p>
                  <div></div>
                </div>
              </div>
              <div className='video'>
              <iframe width="356" height="200" src="https://www.youtube.com/embed/oQ7Jzl6BiTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
             </div>
        </div>

        <div className='AppArea'>
            <div className='extraspace'></div>
             <div className='aa1'>
               <div>
                    <img style={{height:"5vmin"}} src={spotify} alt="" />
                    <button>Play</button>
               </div>
               <div>
                    <img style={{height:"10vmin"}} src={youtube} alt="" />
                    <button>Play</button>
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
                <p>www.onemusicrecordsofficial.com</p>
                <p>www.onemusicrecordsdistribution.com</p>
              </div>
              <div className='threewali'>
                <img style={{height:"8vmin"}} src={phone} alt="" />
                <img style={{height:"10vmin"}} src={instagram} alt="" />
                <img style={{height:"10vmin"}} src={whatsapp} alt="" />
              </div>
        </div>
    </div>
  </>
  )
}

export default Profile
