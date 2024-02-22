import React from 'react'
import Header from '../Components/Header/Header'
import Discover from '../Components/Discover/Discover'
import TrendingSection from '../Components/TrendingSection/TrendingSection'
import Footer from '../Components/Footer/Footer'
import Popular from '../Components/Popular/Popular'

const Home = () => {
  return (
    <>
    <Header/>
    <div>
    <Discover/>
    <TrendingSection title='Trending'/>
    <Popular title="Popular"/>
    </div>
    <Footer/>
    </>
  )
}

export default Home