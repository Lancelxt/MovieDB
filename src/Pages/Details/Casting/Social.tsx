import React, { useState } from "react";
import "./Social.css";
import { useParams } from "react-router";
import useFetch from "../../../Hooks/useFetch";
import { StarFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { HomeState } from "../../../Store/homeSlice";
import avatar from "./avatar.png";

interface SocialProps {}

const Social: React.FC<SocialProps> = () => {
  const [activeTab, setActiveTab] = useState<"reviews" | "discussions">(
    "reviews"
  );
  const { media_type, id } = useParams<{ media_type: string; id: string }>();
  const { data: reviewData } = useFetch(
    "/" + media_type + "/" + id + "/reviews"
  );
  const { url } = useSelector((state: HomeState) => state);
  const review = reviewData?.results ? reviewData?.results[0] : {};

  const formatDate = (dateString: string) => {
    const date: Date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleTabClick = (tab: "reviews" | "discussions") => {
    setActiveTab(tab);
  };

  return (
    <div className="social">
      <div className="head">
        <p style={{ fontSize: "22.4px", fontWeight: 600, color: "#000" }}>
          Social
        </p>
        <div className="tabs2">
          <p
            className={activeTab === "reviews" ? "active2" : ""}
            style={{ fontSize: "17.6px", fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews
          </p>
          <p
            className={activeTab === "discussions" ? "active2" : ""}
            style={{ fontSize: "17.6px", fontWeight: 600, color: "#000" }}
            onClick={() => handleTabClick("discussions")}
          >
            Discussions
          </p>
        </div>
      </div>
      {activeTab === "reviews" && (
        <div>
          <div className="review-container">
            <div className="info">
              <img
                className="pfp"
                src={
                  review?.author_details?.avatar_path
                    ? `https://image.tmdb.org/t/p/original/${review?.author_details?.avatar_path}`
                    : `${avatar}`
                }
              />
              <div className="user">
                <div className="userdetail">A review by {review?.author}</div>
                <div className="authordetails">
                  <div className="rating">
                    <StarFill size={10} />
                    {review?.author_details?.rating.toFixed(1)}
                  </div>
                  <div className="author">
                    written by{" "}
                    <span style={{ fontWeight: 400 }}>{review?.author}</span> on{" "}
                    {formatDate(review?.created_at)}
                  </div>
                </div>
              </div>
            </div>
            <div className="review-content">
              <div>
                {review?.content &&
                  review.content.split(" ").slice(0, 60).join(" ")}
                {review?.content &&
                  review.content.split(" ").length > 60 &&
                  "..."}
              </div>
              <a style={{ color: "#000" }} href={review?.url}>
                <span style={{ textDecoration: "underline" }}>
                  read the rest
                </span>
              </a>
            </div>
          </div>
          <p className="readAll">Read All Reviews</p>
        </div>
      )}
      {activeTab === "discussions" && (
        <div>
          <div className="discussion-container">
            <img
              className="pfp"
              src={
                review?.author_details?.avatar_path
                  ? `https://image.tmdb.org/t/p/original/${review?.author_details?.avatar_path}`
                  : `${avatar}`
              }
            />
            <p>
              {" "}
              "
              {review?.content &&
                review.content.split(" ").slice(0, 11).join(" ")}
              {review?.content &&
                review.content.split(" ").length > 12 &&
                "..."}
              "
            </p>
            <p
              style={{
                marginLeft: "60px",
                fontSize: "14.4px",
                fontWeight: 300,
              }}
            >
              Open
            </p>
            <p
              style={{
                marginLeft: "100px",
                fontSize: "14.4px",
                fontWeight: 300,
              }}
            >
              2
            </p>
            <div className="dateAndAuthor" style={{ marginLeft: "120px" }}>
              <p style={{ fontSize: "14.4px", fontWeight: 300 }}>
                {formatDate(review?.created_at)}
              </p>
              <p style={{ fontSize: "14.4px", fontWeight: 500 }}>
                <span style={{ fontSize: "14.4px", fontWeight: 400 }}>by </span>
                {review?.author}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Social;
