import React from 'react'
import './Recommendations.css'
import useFetch from '../../../Hooks/useFetch';
import { useParams } from 'react-router';

const Recommendations = () => {
  const { media_type, id } = useParams<{ media_type: string; id: string }>();
  const { data: recData } = useFetch("/" + media_type + "/" + id + "/recommendations");

  
  return (
    <div className='recommendations'>
        <p style={{fontWeight:600,fontSize:"22.4px",color:"#000"}}>Recommendations</p>

        <div className="recContainer">
        {recData?.results.slice(0, 10).map((result:any, index:number) => (
    <div className="reCard" key={index}>
      <img src={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`} style={{ borderRadius: "8px" }} />
      <div className="bottom-section">
        <p>{result?.title}</p>
        <p>{Math.floor(result?.vote_average * 10)}%</p>
      </div>
    </div>
  ))}
  </div>
    </div>
  )
}

export default Recommendations