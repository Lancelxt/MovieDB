import React, { useEffect, useState } from "react";
import "./Discover.css";
import { useSelector } from "react-redux";
import { HomeState } from "../../Store/homeSlice";
import { useNavigate } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Img from "../LazyLoadImage/img";


const Discover = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
    const navigate= useNavigate();


  const searchQueryHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key ==="Enter" && query.length>0) {
        navigate('/search/${query}')
    }
  };

  const { url } = useSelector((state: { home: HomeState }) => state.home);


  const { data, loading, error } = useFetch("/movie/upcoming");

  useEffect(() => {
      const bg =
          url.backdrop +
          data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      setBackground(bg);
  }, [data]);


//   const backdrop = {
//     backgroundImage: `url(${background})`,
//     // backdropFilter:"blur(10%)",
//     backgroundSize:"Cover",


//   };
  return (
    <div className="Discover backdrop">
        
    <img src={background} alt="backdrop" loading="lazy" />
    {/* <Img
        className="backdrop"
        src={background}
        /> */}
        
        
      <div className="title">
        <h2 style={{ fontSize: "3em", fontWeight: 700 }}>Welcome.</h2>
        <h3 style={{ fontSize: "2em", fontWeight: 600 }}>
          Million of movies,TV shows and people to discover.Explore now.
        </h3>
      </div>
        <div className="search">
            <input
            className="input"
              type="text"
              placeholder="Search for a movie, tv show, person......"
            onKeyUp={searchQueryHandler}
            onChange={(e)=> setQuery(e.target.value)}
            ></input>
          <button className="button">Submit</button>
        </div>
      </div>
  );
};

export default Discover;
