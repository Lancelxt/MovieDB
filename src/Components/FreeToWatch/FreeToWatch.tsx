import React, { useState } from "react";
import "./FreeToWatch.css";
import MovieCard from "../MovieCard/MovieCard";

const FreeToWatch: React.FC<{ title: string }> = ({title}) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (tabIndex:number) => {
    setTab(tabIndex);
    // You can perform additional actions based on the selected tab index if needed
  };

  return (
    <div className="TrendingSection">
      <div className="Trending-Column">
        <h2 style={{ marginRight: "2rem" }}>{title}</h2>
        <div className="selector">
          <div
            className={`anchor ${tab === 0 ? "background" : ""}`}
            onClick={() => handleTabChange(0)}
          >
            <h3 style={{ padding: "4px 20px" }}>Today</h3>
          </div>
          <div
            className={`anchor ${tab === 1 ? "background" : ""}`}
            onClick={() => handleTabChange(1)}
          >
            <h3 style={{ padding: "4px 20px" }}>This Week</h3>
          </div>
        </div>
      </div>
      <div className="Trending">
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <MovieCard/>
        <div className="fade"></div>
      </div>
    </div>
  );
};

export default FreeToWatch;
