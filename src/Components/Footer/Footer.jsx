import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='wrapper'>
        <div className="image-column">
            <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg' className='logo'/>
            <div className="username">Join The Community</div>
        </div>
        <div className="columns">
        <h3>THE BASICS</h3>
        <ul>
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
        </ul>
        </div>
        <div className="columns">
        <h3>GET INVOLVED</h3>
        <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
            
            </ul>
        </div>
        <div className="columns">
        <h3>COMMUNITY</h3>
        <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
        </ul>
        </div>
        <div className="columns">
        <h3>LEGAL</h3>
        <ul>
            <li>Terms Of Use</li>
            <li>API Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>DMCA Policy</li>
            </ul>
        </div>

    </div>
    </div>
  )
}

export default Footer