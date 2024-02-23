import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from './Banner'
import { useParams } from 'react-router'
import useFetch from '../../Hooks/useFetch'

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



      <Footer/>
    </div>
  )
}

export default Details