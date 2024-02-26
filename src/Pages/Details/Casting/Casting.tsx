import React from "react";
import "./Casting.css";
import Card from "./card";
import { useParams } from "react-router";
import useFetch from "../../../Hooks/useFetch";
import avatar from "./avatar.png";
import { ArrowRightCircleFill, ArrowRightShort } from "react-bootstrap-icons";

interface CastDetails {
  profile_path: string | null;
  character: string;
  name: string;
}

const Casting: React.FC = () => {
  const { media_type, id } = useParams<{ media_type: string; id: string }>();

  const { data: castDetails } = useFetch(
    "/" + media_type + "/" + id + "/credits"
  );

  return (
    <div className="Casting">
      <h3 style={{ fontSize: "22.4px", fontWeight: 600 }}>Top Billed Cast</h3>
      <div className="casts">
        {castDetails?.cast
          .slice(0, 9)
          .map((cast: CastDetails, index: number) => (
            <Card
              key={index}
              castImg={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : `${avatar}`
              }
              character={cast.character}
              name={cast.name}
            />
          ))}

        <div className="more">
          <p style={{ color: "#000", fontSize: "16px", fontWeight: 700 }}>
            View More
          </p>
          <ArrowRightShort size={32} />
        </div>
      </div>
      <p
        style={{
          fontSize: "17.6px",
          fontWeight: 600,
          color: "#000",
          paddingTop: "20px",
          cursor: "pointer",
        }}
      >
        Full Cast & Crew
      </p>
    </div>
  );
};

export default Casting;
