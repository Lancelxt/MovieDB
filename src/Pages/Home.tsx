import React from 'react'
import Header from '../Components/Header/Header'
import Discover from '../Components/Discover/Discover'
import TrendingSection from '../Components/TrendingSection/TrendingSection'
import FreeToWatch from '../Components/FreeToWatch/FreeToWatch'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <div>
    <Discover/>
    <TrendingSection title='Trending'/>
    {/* <FreeToWatch title='Free To Watch'/> */}
    </div>
    <Footer/>
    </>
  )
}

export default Home