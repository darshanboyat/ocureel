import React from 'react'
import phone from "../../../assets/Group 373.png"
import advertise from "../../../assets/advertising.png"
import gift from "../../../assets/gift.png"
import innovator from "../../../assets/innovator.png"
import "./style.css"
const Index = () => {
    return (
        <div className='perks__main'>
            <div className="perks__cards">
                <div className="perks__card">
                    <img src={advertise} alt="" /> &nbsp;
                    <div className="">
                        <h1>Our Ads are different!</h1>
                        <p>Users never have to watch an ad, they choose to watch one! As part of our game, we have several features users can unlock by watching an ad.</p>
                    </div>
                </div>
                <div className="perks__card perks_card_2">
                    <img src={gift} alt="" /> &nbsp;
                    <div className="">
                        <h1>Our Unique gift button!</h1>
                        <p>Unlike other platforms, our unique gift button allows users to watch an ad to support your video. This allows us to track ad revenue directly to your videos.</p>
                    </div>
                </div>
                <div className="perks__card">
                    <img src={innovator} alt="" /> &nbsp;
                    <div className="">
                        <h1>Recruit other Creators!</h1>
                        <p>Bring other creators to Zecue and earn ad revenue on all of their videos.</p>
                    </div>
                </div>
            </div>
            <div className="perks__head">
                <h1>perks of Zecue!</h1>
                <img src={phone} alt=""  className=''/>
            </div>
        </div>
    )
}

export default Index