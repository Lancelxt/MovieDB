import React from 'react'
import  "./Header.css";
import { useNavigate } from 'react-router';




const Header = () => {

  const navigate= useNavigate();
  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='Header'>
        <div className="left">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" onClick={handleClick} style={{cursor:"pointer"}}/>
            <p>Movies</p>
            <p>TV Show</p>
            <p>People</p>
            <p>More</p>
            
        </div>
        <div className="right">
            <img alt='logo' src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" width="22.39" height="22.39"/>
            <div className='lang'>EN</div>
            <p>Login</p>
            <p>Join TMDB</p>
            <img src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg" alt="search icon" width={29.11} height={29.11}/>
            
        </div>
    </div>
  )
}

export default Header