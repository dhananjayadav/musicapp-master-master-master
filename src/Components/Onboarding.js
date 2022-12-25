import React from 'react'
import './Css/Onboarding.css'
import image from './assests/no-image-available-icon-ui-260nw-1458092489-removebg-preview.png'

function Onboarding() {
  return (
    <>
      <div className='onboardingpage'>
          <div className='obbox'>
             <h1>ONBOARDING PAGE</h1>
             <div className='onboard'>
               <div className='onboard1'>
                  <img src={image} alt="" />
                  <input  type="file" id="img" style={{display:"none"}}  required/>
                  <label  for="img">Upload Photo (optional)</label>
               </div>
               <div className='onboard2'>
                <input type="text" placeholder='Your Artist Name' required/>
                <input type="text" placeholder='Your Instagram Profile (optional)'/>
                <button>Proceed</button>
               </div>
             </div>
          </div>
      </div>
    </>
  )
}

export default Onboarding
