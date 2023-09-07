import React from 'react'
import symbol from "../../../assets/ocureel__symbol.png"
import tiktok from "../../../assets/tiktok.png"
import insta from "../../../assets/instagram.png"
import youtube from "../../../assets/youtube.png"
import video from "../../../assets/video.png"
import "./style.css"

const Index = () => {
    return (
        <div className='influencer__cards'>
            <div className="">
                <img src={symbol} alt="" width="20%" />
                <h3>Why Zecue?</h3>
                <p>You've built a brand and a following that love your unique content. However, your followers are missing something <b> BIG,</b></p>
                <h2>YOUR STORY!</h2>
                <p>That's right, they want to know you for you and not just the cool content you produce.</p>
                <h4>Give your followers a reason to love you even more!</h4>
                <div className="influencer__shadow"/>
            </div>
            <div className="">
                <h3>I know what you're thinking,</h3>
                <p>When you have these</p>
                <span className="influencer__card__icons">
                    <img src={tiktok} alt="" width="10%" />
                    <img src={insta} alt="" width="10%" />
                    <img src={youtube} alt="" width="10%" />
                </span>
                <p>then why this?</p>
                <img src={symbol} alt="" width="20%" />
                <h2>YOUR STORY!</h2>
                <p>Those apps all offer the same way to share content and they're still the best place for you to share what you're currently creating.</p>
                <h4 className='influence__card2__h4'>Zecue is different!</h4>
                <div className="influencer__shadow"/>
            </div>
            <div className="influencer__card_3">
                <img src={video} alt="" width="15%" />
                <h3>Our Main Game!</h3>
                <p>Zecue is one of a kind video-sharing game that is challenging the status quo of social media. The main game inside our app is called <b>REVEAL.</b> Your followers might get glimpses of your story now, but not like this. Zecue is called the <b>ULTIMATE GAME</b> because it makes you answer questions about your dreams, your experiences, and life so your followers get to</p>
                <h4 className='influence__card2__h4'>Know you!</h4>
                <div className="influencer__shadow"/>
            </div>
        </div>
    )
}

export default Index