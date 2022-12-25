import React from 'react'
import './Css/Footer.css'
import twiter from './assests/icons8-twitter-48.png'
import facebook from './assests/icons8-facebook-48.png'
import insta from './assests/icons8-instagram-48.png'
import mess from './assests/icons8-facebook-messenger-48.png'
import email from './assests/icons8-envelope-48.png'

function Footer() {
  return (
   <>
     <div className='footerBox'>
         <h1>Songwhip</h1>
         <p className='homemargin'>Home</p>
         <p className='spacetop'>Make a link</p>
         <p className='spacetop'>SongWhip Pro</p>
         <p className='spacetop'>About Songwhip</p>
         <p className='spacetop'>Contact</p>
         <p className='spacetop'>FAQs</p>
         <p className='spacetop'>Blog</p>
         <p className='reach'>Reach out to chat</p>
         <div className='logobox'>
            <img src={twiter} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={mess} alt="" />
            <img src={email} alt="" />
         </div>
     </div>
   </>
  )
}

export default Footer
