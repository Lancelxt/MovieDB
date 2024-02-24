import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useSelector } from "react-redux";
import { HomeState } from "../../Store/homeSlice";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../Hooks/useFetch";
import CircleRating from "../../Components/CircleRating/CircleRating";
import { BookmarkFill, HeartFill, ListStars, PlayFill, StarFill } from "react-bootstrap-icons";
import { title } from "process";
import VideoPopup from "../../Components/videoPopup/VideoPopup";

type DiscoverProps={
  video?:string
}


const Discover = ({video}:DiscoverProps) => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const [directorName, setDirectorName] = useState("");
  const [screenwriterName, setScreenwriterName] = useState("");
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const {id,media_type}=useParams()


  const {data:videoData} = useFetch("/"+media_type+"/"+id+"/videos")



    const navigate= useNavigate();

    const linearGradient = `linear-gradient(to left,rgba(3, 37, 65, 0.85), rgba(3, 37, 65, 0.85)),url(${background})`; 


  const searchQueryHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key ==="Enter" && query.length>0) {
        navigate('/search/${query}')
    }
  };

  const { url } = useSelector((state: { home: HomeState }) => state.home);
  const { data, loading, error } = useFetch("/"+media_type+"/"+id);
  const { data:crewData, loading:crewLoading, error:crewError } = useFetch("/"+media_type+"/"+id+"/credits");

  // const poster= data?.results.poster_path

  useEffect(() => {
    const bg =
        url.backdrop+data?.backdrop_path
    setBackground(bg);
}, [data]);


const director = Array.isArray(crewData?.crew) ? crewData?.crew.find((member) => member.job === "Director") : null;
const DirectorName = director ? director.name : null;

const screenplay = Array.isArray(crewData?.crew) ? crewData?.crew.find((member) => member.job === "Screenplay") : null;
const screenplayName = screenplay ? screenplay.name : null;


const posterImg = url.poster+data?.poster_path
const percentageRating = data ? Math.round(data.vote_average * 10) : null;

const releaseYear = data?.release_date ? new Date(data.release_date).getFullYear() : undefined;
const runtimeInHours = Math.floor((data?.runtime ?? 0)/ 60);
const runtimeInMinutes = (data?.runtime?? 0) % 60;



  return (
    <div className="Banner">
        
    
   {/* <div src={background} alt="backdrop" loading="lazy" /> */}
   <div className="backdrop2" data-img-url={background} style={{backgroundSize:"cover",backgroundImage:linearGradient,height:"570px",width:"100%",}}></div>
    {/* <Img
        className="backdrop"
        src={background}
        /> */}
        <div className="banner-content">
        <div className="poster">
          <img src={posterImg} alt="poster" style={{borderRadius: "8px"}} />
        </div>
        <div className="right-wrapper">
      <div className="title2">
        <p style={{ fontSize: "35.2px", fontWeight: 700 ,color:"#FFF"}}>{data?.title} ({releaseYear})</p>
        <div className="facts">
          <div className="certification" style={{border:"1px solid rgba(255,255,255,0.6)",color:"rgba(255,255,255,0.6)",fontSize:"14px",padding:"2px 8px"}}>PG-13</div>
          <div className="release" style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,0.6)"}}>01/12/2024(US)</div>
          <ul className="list">
            <li style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,0.6)"}}>{data?.genres?.[0]?.name}</li>
            <li style={{fontSize:"16px",fontWeight:300,color:"rgba(255,255,255,0.6)"}}>{`${runtimeInHours}h ${runtimeInMinutes}m`}</li>
          </ul>
        </div>
      </div>
      <div className="actions">
        <div className="score">
          <div className="score-circle">
        <CircleRating rating={Number(percentageRating)} />
        </div>
          <p style={{fontWeight:700,width:"40px"}}>User Score</p>
        </div>
        
        <div className="btns">
        <ListStars size={16}/>
        </div>
        <div className="btns">
        <HeartFill size={12}/>
        </div>
        <div className="btns">
        <BookmarkFill size={12}/>
        </div>
        <div className="btns">
        <StarFill size={12}/>
        </div>
        <div className="play" onClick={() => {
                                                    setShow(true);
                                                    setVideoId(videoData?.results?.[0].key);
                                                }}>
          <PlayFill size={22.39}/>
          Play Trailer
        </div>
      </div>
      <div className="tagline" style={{color:"#FFF",fontWeight:"400"}}>{data?.tagline}</div>
      <div className="overview">
        <div className="heading" style={{fontWeight:600,marginBottom:"4px",fontSize:"20.8px"}}>Overview</div>
        {data?.overview}
        {/* {crew?.crew} */}
      </div>

    <div className="crew-details">
    <div className="director">
    <p style={{fontWeight:700}}>{DirectorName}</p>
      <p >Director</p>
    </div>
    <div className="screenplay">
    <p style={{fontWeight:700}}>{screenplayName}</p>
      <p>Screenplay</p>
    </div>
    </div>
      </div>
      <VideoPopup
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                />

      </div>
        
      </div>
  );
};

export default Discover;
