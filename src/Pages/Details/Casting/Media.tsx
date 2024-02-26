import React, { useState } from "react";
import "./Media.css";
import { useParams } from "react-router";
import useFetch from "../../../Hooks/useFetch";
import {
  ArrowRight,
  PlayCircle,
  PlayCircleFill,
  StarFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { HomeState } from "../../../Store/homeSlice";
import VideoPopup from "../../../Components/videoPopup/VideoPopup";

interface MediaProps {}

const Media: React.FC<MediaProps> = () => {
  const [activeTab, setActiveTab] = useState<
    "Most Popular" | "videos" | "backdrops" | "posters"
  >("Most Popular");
  const { media_type, id } = useParams<{ media_type: string; id: string }>();
  const { data: VideoData } = useFetch("/" + "movie" + "/" + id + "/videos");
  const { data: ImageData } = useFetch("/" + "movie" + "/" + id + "/images");
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { url } = useSelector((state: HomeState) => state);

  const handleTabClick = (
    tab: "Most Popular" | "videos" | "backdrops" | "posters"
  ) => {
    setActiveTab(tab);
  };

  return (
    <div className="media">
      <div className="head">
        <p style={{ fontSize: "22.4px", fontWeight: 600, color: "#000" }}>
          Media
        </p>
        <div className="tabs2">
          <p
            className={activeTab === "Most Popular" ? "active2" : ""}
            style={{ fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("Most Popular")}
          >
            Most Popular
          </p>
          <p
            className={activeTab === "videos" ? "active2" : ""}
            style={{ fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("videos")}
          >
            Videos
          </p>
          <p
            className={activeTab === "backdrops" ? "active2" : ""}
            style={{ fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("backdrops")}
          >
            Backdrops
          </p>
          <p
            className={activeTab === "posters" ? "active2" : ""}
            style={{ fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("posters")}
          >
            Posters
          </p>
        </div>
      </div>
      {activeTab === "Most Popular" && (
        <div className="popular-section">
          <div
            className="video-thumbnail"
            onClick={() => {
              setShow(true);
              setVideoId(VideoData?.results?.[1].key);
            }}
          >
            <img
              src={`https://img.youtube.com/vi/${VideoData?.results[1]?.key}/mqdefault.jpg`}
              style={{
                width: "533px",
                height: "300px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            />
            <div className="play-circle">
              <PlayCircleFill size={40} color="#FFF" />
            </div>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[0]?.file_path}`}
            style={{ width: "533px", height: "300px" }}
          />
          <img
            src={`https://image.tmdb.org/t/p/original${ImageData?.posters[0]?.file_path}`}
            style={{
              width: "200px",
              height: "300px",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
            }}
          />
        </div>
      )}
      {activeTab === "videos" && (
        <div>
          <div className="popular-section">
            <div
              className="video-thumbnail"
              onClick={() => {
                setShow(true);
                setVideoId(VideoData?.results?.[0].key);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${VideoData?.results[0]?.key}/mqdefault.jpg`}
                style={{
                  width: "533px",
                  height: "300px",
                  borderTopLeftRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              />
              <div className="play-circle">
                <PlayCircleFill size={40} color="#FFF" />
              </div>
            </div>
            <div
              className="video-thumbnail"
              onClick={() => {
                setShow(true);
                setVideoId(VideoData?.results?.[1].key);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${VideoData?.results[1]?.key}/mqdefault.jpg`}
                style={{ width: "533px", height: "300px" }}
              />
              <div className="play-circle">
                <PlayCircleFill size={40} color="#FFF" />
              </div>
            </div>
            <div
              className="video-thumbnail"
              onClick={() => {
                setShow(true);
                setVideoId(VideoData?.results?.[2].key);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${VideoData?.results[2]?.key}/mqdefault.jpg`}
                style={{ width: "533px", height: "300px" }}
              />
              <div className="play-circle">
                <PlayCircleFill size={40} color="#FFF" />
              </div>
            </div>
            <div
              className="video-thumbnail"
              onClick={() => {
                setShow(true);
                setVideoId(VideoData?.results?.[3].key);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${VideoData?.results[3]?.key}/mqdefault.jpg`}
                style={{ width: "533px", height: "300px" }}
              />
              <div className="play-circle">
                <PlayCircleFill size={40} color="#FFF" />
              </div>
            </div>
            <div
              className="video-thumbnail"
              onClick={() => {
                setShow(true);
                setVideoId(VideoData?.results?.[4].key);
              }}
            >
              <img
                src={`https://img.youtube.com/vi/${VideoData?.results[4]?.key}/mqdefault.jpg`}
                style={{
                  width: "533px",
                  height: "300px",
                  borderTopRightRadius: "12px",
                  borderBottomRightRadius: "8px",
                }}
              />
              <div className="play-circle">
                <PlayCircleFill size={40} color="#FFF" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "12px",
                cursor: "pointer",
              }}
            >
              View More <ArrowRight size={20} />
            </div>
          </div>
        </div>
      )}
      {activeTab === "backdrops" && (
        <div>
          <div className="popular-section">
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[0]?.file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[1]?.file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[2]?.file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[3]?.file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.backdrops[4]?.file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "12px",
                cursor: "pointer",
              }}
            >
              View More <ArrowRight size={20} />
            </div>
          </div>
        </div>
      )}
      {activeTab === "posters" && (
        <div>
          <div className="popular-section">
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[0].file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[1].file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[2].file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[3].file_path}`}
              style={{ width: "533px", height: "300px" }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[4].file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[5].file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            />
            <img
              src={`https://image.tmdb.org/t/p/original${ImageData?.posters[6].file_path}`}
              style={{
                width: "533px",
                height: "300px",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "12px",
                cursor: "pointer",
              }}
            >
              View More <ArrowRight size={20} />
            </div>
          </div>
        </div>
      )}
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default Media;
