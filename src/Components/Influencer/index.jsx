import React from 'react'
import Card from './Card'
import AppStoreBtn from '../RemainingTime/DownloadAppButton'
import AboutOcureel from "./AboutOcureel"
import Perks from "./Perks"
import Hurry from "./Hurry"
import Benefits from "./Benefits"
import Question from "./Question/index.jsx"
import "./style.css"

const Influencer = () => {
  return (
    <div className='influencer__main'>
      <div className="influencer__heading">
        <h2>Are you a Social media <span className="influencer__heading__style">Influencer</span> or <span className="influencer__heading__style">Creator?</span></h2>
      </div>
      <div className="influencer__card">
        <Card />
      </div>
      <div className="section__three__download__main">
        <div className="section__three__download">
          <p>Come Join the Newest App Available on</p>
          &nbsp; <AppStoreBtn />
        </div>
      </div>

      <div className="section__four__main">
        <AboutOcureel />
      </div>
      <div className="section__five__main">
        <Perks />
      </div>
      <Hurry />
      <Benefits />
      <Question />
    </div>
  )
}

export default Influencer