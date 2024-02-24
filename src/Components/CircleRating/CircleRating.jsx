import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./CircleRating.css";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={100}
                text={rating+"%"}
                styles={buildStyles({
                    pathColor:
                        rating < 50 ? "red" : rating < 70 ? "orange" : "green",
                })}
            />
        </div>
    );
};

export default CircleRating;