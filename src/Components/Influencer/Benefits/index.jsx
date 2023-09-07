import React from 'react'
import qrCode from "../../../assets/qr-code.png"
import "./style.css"

const Index = () => {
    console.log("Checking")
  return (
    <div className='benefits__main'>
        <h1>How to get zecue benefits!</h1>
        <div className="benefits__content">
            <img src={qrCode} alt="" width="15%"/>
            <ul>
                <li> <span>1 &nbsp;</span> Create your account on Zecue</li>
                <li> <span>2 &nbsp;</span>Record and answer a question in our main game Reveal.</li>
                <li> <span>3 &nbsp;</span>Download your video.</li>
                <li> <span>4 &nbsp;</span>Share your video on your current platform and let you followers know to come check you out on Zecue.</li>
                <li> <span>5 &nbsp;</span>Make sure to share your referral code so you'll earn revenue on everyone who joins Zecue.</li>
            </ul>
        </div>
    </div>
  )
}

export default Index