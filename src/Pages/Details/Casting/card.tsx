import React from 'react'
import './card.css'

type CardProps = {
    castImg:string;
    character:string;
    name:string;
}

const card = ({castImg,character,name}:CardProps) => {
  return (
    <div className='card'>
        <img src={castImg} className='img' loading='lazy'/>
        <p style={{fontSize:"16px",fontWeight:700,color:"#000",paddingTop:"10px",paddingLeft:"10px"}}>{name}</p>
        <p style={{paddingLeft:"10px",fontSize:"14.4px"}}>{character}</p>

    </div>
  )
}

export default card