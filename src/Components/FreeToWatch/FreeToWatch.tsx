import React, { useState, useEffect } from "react";
import "./FreeToWatch.css";
import SwitchTabs from "../SwitchTabs/SwitchTabs";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { HomeState } from "../../Store/homeSlice";
import useFetch from "../../Hooks/useFetch";

interface TrendingSectionProps {
  title: string;
  
}

const FreeToWatch: React.FC<TrendingSectionProps> = ({ title}) => {
  const [endpoint, setEndpoint] = useState<string>("day");

  const [tab, setTab] = useState<number>(0);
const [poster,setPoster] = useState("")
  const { url } = useSelector((state: { home: HomeState }) => state.home);
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);




  const handleTabChange = (tabIndex: number) => {
    setTab(tabIndex);
  };


  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTgwNjU0MzdjZWNiMzQ0ZjU4Y2FhMjJmNjM1ZDA3MiIsInN1YiI6IjY1ZDQyOGQyZTY0MGQ2MDE2NGViYjFkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._hpEDY_uuzRsyA3fXsvK4Qo9exUxJKkyXeyUKpZaOYo",
            },
          }
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.results.length > 0) {
      const currentIndex = tab % data.results.length;
      const bg = url.poster + data.results[currentIndex].poster_path;
      setPoster(bg);
    }
  }, [data, tab, url.poster]);
  




  return (
    <div className="FreeToWatchSection">
      <div className="ftw-Column">
        <h2 style={{ marginRight: "2rem", fontWeight: "500" }}>{title}</h2>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <div className="FreeToWatch" >
  {data && Array.isArray(data.results) && 
    data.results.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
</div>
    </div>
  );
};

export default FreeToWatch;
