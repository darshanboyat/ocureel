import React from 'react'
import VideoPlayer from "./VideoPlayer.jsx"
import AppBtn from "../RemainingTime/DownloadAppButton"
import "./style.css"

const Index = () => {
    const videoId = [
        { id: "859393774", cardTitle: "Step 2: Share your referral link and invite a friend to play with you" },
        { id: "859386999", cardTitle: "Step 3: Link up with your friend and start playing" }
    ]
    return (
        <div className="container giveaway__container">
            <div className="giveaway__heading">
                <h1>$250</h1>
                <h2>GIVEAWAY!</h2>
            </div>
            {/* <div className='giveaway__video__main'>
                {
                    videoId.map(({ id, cardTitle, cardHead }, index) => (
                        <VideoPlayer videoId={id} cardTitle={cardTitle} place={index} head={cardHead && cardHead} />
                    ))
                }
            </div> */}
            <div className="giveaway__content no__catch">
                <h3>Who doesn’t like free money?!</h3>
                <h4>Link up with someone on our app and you can
                    compete to win $250.
                </h4>
            </div>
            <div className="giveaway__content no__catch">
                <h3>There’s no catch!</h3>
                <h4>Our app is completely free and anyone with an iOS device can play!</h4>
            </div>
            <div className="giveaway__content price__money">
                <h3>We recently launched our app and need your help getting the word out. Share your referral link and invite a friend to play. If you win the challenge you’ll win another $100 for referring your friend!</h3>
            </div>
            <div className="giveaway__content price__money">
                <h3>Even if you don’t win, If you refer either of the 2 people on the winning team, you’ll win $100!</h3>
            </div>
            <div className="giveaway__content giveaway__waiting">
                <h2>What are you waiting for?!</h2>
                <h2>It’s time to have fun and win some cash!</h2>
            </div>
            <div className="giveaway__content giveaway__steps">
                <ul>
                    <li>Step 1: Download Zecue in the App Store <br /><span><AppBtn /></span></li>
                    <li>
                        <div className='giveaway__video__main'>
                            {
                                videoId.map(({ id, cardTitle, cardHead }, index) => (
                                    <VideoPlayer videoId={id} cardTitle={cardTitle} place={index} head={cardHead && cardHead} />
                                ))
                            }
                        </div>
                    </li>
                    {/* <li>Step 2: Share your referral link and invite a friend to play with you <br /><span> <VideoPlayer videoId={videoId[0].id} cardTitle={videoId[0].cardTitle} place={videoId[0].index} head={videoId[0].cardHead && videoId[0].cardHead} /></span></li>
                    <li>Step 3: Link up with your friend and start playing <br /><span><VideoPlayer videoId={videoId[1].id} cardTitle={videoId[1].cardTitle} place={videoId[1].index} head={videoId[1].cardHead && videoId[1].cardHead} /></span></li> */}
                </ul>
            </div>
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