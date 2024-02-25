import React from 'react'
import Header from '../Components/Header/Header'
import Discover from '../Components/Discover/Discover'
import TrendingSection from '../Components/TrendingSection/TrendingSection'
import Footer from '../Components/Footer/Footer'
import Popular from '../Components/Popular/Popular'
import FreeToWatch from '../Components/FreeToWatch/FreeToWatch'
import './Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <div>
    <Discover/>
    <TrendingSection title='Trending'/>
    <Popular title="Popular"/>
    <FreeToWatch title='Free to watch'/>
    <div className="joinToday">
    <div className="left-content">
      <h2 style={{fontSize:"32px",color:"#FFF"}}>Join Today</h2>
      <div className="join-content">
      <p style={{fontSize:"19.2px", color:"#FFF"}}>Get access to maintain your own <em>custom personal lists</em>, <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Apple TV Plus, Crunchyroll, and Hotstar.</p>
      <div className="button2">Sign Up</div>
      </div>
    </div>
    <div className="right-content">
    <ul>
                <li>Enjoy TMDB ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Filter by your subscribed streaming services and find something to watch</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Build custom lists</li>
                <li>Contribute to and improve our database</li>
              </ul>
    </div>

    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home