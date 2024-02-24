import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from './Banner'
import { useParams } from 'react-router'
import useFetch from '../../Hooks/useFetch'
import Casting from './Casting/Casting'
import Social from './Casting/Social'
import Media from './Casting/Media'
import Recommendations from './Casting/Recommendations'
import RightPanel from './Casting/RightPanel/RightPanel'
import './Details.css'

const Details = () => {

  const {id,media_type}=useParams()
  console.log("dsd",id)


  const { data, loading, error ,refetch} = useFetch("/"+media_type+"/"+id);

  useEffect(() => {
    if(!data || error){
      refetch("/"+media_type+"/"+id)
    }
  }, [id,media_type])
  
  

  return (
    <div className="Details">
      <Header/>
    <Banner/>
    <div className="content">
      <div className="left-panel">
    <Casting/>
    <Social/>
    <Media/>
    <Recommendations/>
    </div>
    <div className="right-panel">
      <RightPanel/>
    </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Details