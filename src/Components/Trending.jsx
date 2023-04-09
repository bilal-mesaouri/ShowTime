import React, { useState, useEffect } from "react";
import "./Trending.css";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";

function Trending(props) {
  const [Datos, setDatoss] = useState(props.data);
  
  const [Index, setIndex] = useState(0);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    Datos?<div className="trcontainer">
      <div className="popularnowtitle">{props.title}</div>
      <div className="trcon">
        <div className="change_btn">
          {props.parent == "home" && (
            <AiOutlineLeftCircle
              className="icons"
              onClick={() => {
                if (Index > 0) setIndex(Index - 1);
              }}
            />
          )}
        </div>
        <div className="trthumbnail">
          <img
            src={Datos[Index]['img']}
            alt="avengers"
            className="thumbnail-image"
          />
        </div>
        <div className="trdescription">
          <h3 className="title">{Datos[Index]["title"]}</h3>
          <span className="trbox" style={{ paddingBottom: "15px" }}>
            <div className="trdesbox">Description :</div>
            {Datos[Index]["plot"]}
          </span>

          <span className="trbox">
            <span className="trtitle">Release date :</span>{" "}
            {new Date(Datos[Index]["date"]).toLocaleDateString(
              "en-us",
              options
            )}
          </span>
          <span className="trbox">
            <span className="trtitle">Rating :</span>Rating: 8.4/10
          </span>
          <span className="trbox">
            <span className="trtitle">Runtime :</span> 3h 1min
          </span>
        </div>
        <div className="change_btn">
          {props.parent == "home" && (
            <AiOutlineRightCircle
              className="icons"
              onClick={() => {
                if (Index < Datos.length - 1) setIndex(Index + 1);
              }}
            />
          )}
        </div>
      </div>
      <div className="controlpanel"></div>
    </div>:<div>Loading ...</div>
  );
}

export default Trending;
