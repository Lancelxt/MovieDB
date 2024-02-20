import React from 'react'
import "./MovieCard.css"


const MovieCard = () => {
  return (
    <div className='MovieCard'>
       <div className="imageContainer">
        <img src='https://media.themoviedb.org/t/p/w440_and_h660_face/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg' alt='Movie Banner'/>
        <div className="consensus">
            <div className="outer-ring">
                71%
            </div>
        </div>
       </div>
       <div className="content">
        
        <div style={{paddingTop:"1rem",display:"flex",flexDirection:"column",gap:".2rem"}}>
                <h2 style={{fontSize:"1em"}}>Land Of BadLand</h2>
    <p style={{color:"rgba(0,0,0,.6)",fontSize:"1em"}}>Jan 25, 2024</p>
    </div>

    </div>
    </div>
  )
}

export default MovieCard