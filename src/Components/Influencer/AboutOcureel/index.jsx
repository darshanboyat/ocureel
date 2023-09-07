import React from 'react'
import phone from "../../../assets/Group 371.png"
import addFriend from "../../../assets/add-friend.png"
import revenue from "../../../assets/revenue.png"
import "./style.css"

const Index = () => {
    return (
        <div className='about__ocureel'>
            <img src={phone} alt="phone" className='about__phone'/>
            <div className="about___ocureel_section_one">
                <h1>ABOUT Zecue!</h1>
                <p>Zecue is <b>NOT</b> another site to share your current content, Zecue is where you <b>SHARE YOUR STORY.</b></p>
                <p>We take the thinking out of what to create and our game guides the content you record. There is one theme, <b>YOUR STORY.</b></p>
                <p>Be SEEN for who you really are. be YOU.</p>
            </div>
            <div className="about___ocureel_section_two">
                <h4>Zecue was designed for creators!</h4>
                <div className="about__ocureel__section__two__content">
                    <img src={addFriend} alt="" width="10%" height="10%" />
                    <p>&nbsp;Bring your <b>current followers</b> to Zecue.</p>
                </div>
                <div className="about__ocureel__section__two__content">
                    <img src={revenue} alt="" width="10%" height="10%" />
                    <p>&nbsp;<b>Earn ad revenue</b> when you reach influencer status and earn ad revenue <b>on all of your followers.</b></p>
                </div>
            </div>
        </div>
    )
}

export default Index