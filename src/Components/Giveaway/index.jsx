import React from 'react'
import VideoPlayer from "./VideoPlayer.jsx"
import Gift250 from "../../assets/Group 183.png"
import Download from "../../assets/Mask Group 3.png"
import Giveway from "../../assets/givestep.PNG";
import "./style.css"

const Index = () => {
    const videoId = [
        { id: "859393774", cardTitle: "HOW TO LINK UP WITH FRIENDS" },
        { id: "859386999", cardTitle: "HOW TO REFER FRIENDS" }
    ]
    return (
        <div className="giveaway__container">
            <div className="giveaway__heading">
                <img src={Gift250} alt="" />
            </div>
            <div className="section_heading">
                <section className="text-container">
                    <h1 className="stroked-text">Who doesn’t like free money?!</h1>
                    <h3 className='filled-text'>Who doesn’t like free money?!</h3>
                </section>
                <h4>Link up with someone on our app and you can
                    compete to win $250.
                </h4>
            </div>
            <div>
                <h2 className='step-header'>STEP 1:</h2>
                <img className='img-step' src={Giveway} alt='' />
            </div>

            <div className="section_heading">
                <section className="text-container">
                    <h1 className="stroked-text">There’s no catch!</h1>
                    <h3 className='filled-text'>There’s no catch!</h3>
                </section>
                <h4>Our app is completely free and anyone with an iOS device can play!</h4>
            </div>




            {/* <div className="section_heading">
                <section className="text-container">
                    <h1 className="stroked-text">There’s no catch!</h1>
                    <h3 className='filled-text'>There’s no catch!</h3>
                </section>
                <h4>Our app is completely free and anyone with an iOS device can play!</h4>
            </div> */}



            <div className="price__money">
                <h1>We recently launched our app and need your help getting the word out. </h1>
                <span>
                    <h4>Share your referral link and invite a friend to play. If you win the challenge you’ll win another $100 for referring your friend!</h4>
                </span>
            </div>
            <div className="giveaway__content">
                <h3>Even if you don’t win, If you refer either of the 2 people on the winning team, you’ll win $100!</h3>
            </div>

            <div>
                <h2 className='step-header'>STEP 2:</h2>
                <p className='step2-title'>Share your referral link and invite a friend to playwithyou!
                </p>

                <div className="giveaway__content giveaway__steps">
                    <ul>
                        <li>
                            <div className='giveaway__video__main'>
                                <VideoPlayer videoId={videoId[1].id} cardTitle={videoId[1].cardTitle} place={videoId[1].index} head={videoId[1].cardHead && videoId[1].cardHead} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section_heading">
                <section className="text-container">
                    <h1 className="stroked-text">What are you waiting for?!</h1>
                    <h3 className='filled-text'>What are you waiting for?!</h3>
                </section>
                <h4>It’s time to have fun and win some cash!</h4>
            </div>

            <div>
                <h2 className='step-header'>STEP 3:</h2>
                <p className='step2-title'>Link up with your friend and start playing!
                </p>

                <div className="giveaway__content giveaway__steps">
                    <ul>
                        <li>
                            <div className='giveaway__video__main'>
                                <VideoPlayer videoId={videoId[0].id} cardTitle={videoId[0].cardTitle} place={videoId[0].index} head={videoId[0].cardHead && videoId[0].cardHead} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="download_image">
                <img src={Download} alt="Workplace" usemap="#workmap" width="400" height="379" />

                <map name="workmap">
                    <area shape="rect" coords="34,44,180,350" alt="Computer" href="https://apps.apple.com/us/app/ocureel-the-ultimate-game/id1640111946?platform=iphone" />
                </map>
            </div> */}

            {/* <div className="steps">
                <h1 className='step1'>
                    Step 2: Share your referral link and invite a friend to
                    play with you
                    (HOW TO REFER FRIENDS VIDEO)

                </h1>
                <h1 className='step2'>
                    Step 3: Link up with your friend and start playing
                    (HOW TO LINK VIDEO)
                </h1>
            </div> */}

            <div className="giveaway__content giveaway__rule">
                <h5>Rules:</h5>
                <ul>
                    <li>- Link must be made public in settings to show on the leaderboard</li>
                    <li>- Minimum of 25,000 points to win</li>
                    <li>- Competition is over at 11:59pm on 11/30/2023</li>
                    <li>- Winning team will receive $250 within 7 days</li>
                    <li>- Referring user of either winners will receive $100 within 7 days</li>

                </ul>
            </div>
            <div className="giveaway__content check__out">
                <h4>*Check out the “HOW TO PLAY” page in our app for a full guide on HOW TO LINK and HOW TO EARN POINTS</h4>
            </div>

        </div>
    )
}

export default Index