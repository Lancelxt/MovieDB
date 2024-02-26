import React from 'react';
import './MovieCard.css';
import CircleRating from '../CircleRating/CircleRating';
import { useNavigate } from 'react-router';

interface MovieCardProps {
  movie: {
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number; 
    id:number;
    media_type:string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, release_date, poster_path, vote_average,id,media_type } = movie;
  const percentageRating = Math.round(vote_average * 10)


const navigate = useNavigate();

const handleNavigate = ()=> {
navigate('/'+media_type+"/"+id)
}

  const formattedReleaseDate = new Date(release_date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
  return (
    <div className='MovieCard'>
      <div className="imageContainer">
        <img src={posterUrl} alt='Movie Banner' onClick={handleNavigate} loading='lazy'/>
        <div className="consensus">
          <CircleRating rating={Number(percentageRating)} />
        </div>
      </div>
      <div className="content" onClick={handleNavigate}>
        <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "column"}}>
          <h2 style={{ fontSize: "1em" }}>{title}</h2>
          <p style={{ color: "rgba(0,0,0,.6)", fontSize: "1em" }}>{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
