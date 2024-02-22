import React from 'react';
import './MovieCard.css';
import CircleRating from '../CircleRating/CircleRating';

interface MovieCardProps {
  movie: {
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number; // Corrected property name
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, release_date, poster_path, vote_average } = movie;

  // Convert vote_average to percentage format (e.g., 6.02 => 60.2)
  const percentageRating = Math.round(vote_average * 10)

  // Format release date to "MMM DD, YYYY" format
  const formattedReleaseDate = new Date(release_date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  // Construct the full poster URL using the base URL and the poster_path
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  
  return (
    <div className='MovieCard'>
      <div className="imageContainer">
        <img src={posterUrl} alt='Movie Banner' />
        <div className="consensus">
          {/* Pass the percentageRating to CircleRating component */}
          <CircleRating rating={Number(percentageRating)} />
        </div>
      </div>
      <div className="content">
        <div style={{ paddingTop: "1rem", display: "flex", flexDirection: "column"}}>
          <h2 style={{ fontSize: "1em" }}>{title}</h2>
          {/* Display formatted release date */}
          <p style={{ color: "rgba(0,0,0,.6)", fontSize: "1em" }}>{formattedReleaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
