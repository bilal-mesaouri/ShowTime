import React from "react";
import PrimarySearchAppBar from "../AppBar";
import Trending from "../Trending";
import PopularNow from "../PopularNow";
import { useEffect,useState } from "react";
import { findAll } from "../../Network/Lib/Movies";
import { useLocation } from "react-router-dom";

function Movie() {
  
  let location = useLocation();
  const arr = [];
  location.state && arr.push(location.state.data);
  const [Datos, setDatos] = useState(arr);
  
  return (
    Datos?<div>
      <PrimarySearchAppBar parent="movie"/>
      <Trending data={Datos} parent={"movie"} title={"Movie Informations"}/>
      {/* <PopularNow title={"Similar"} /> */}
    </div>:<div>Loading ...</div>
  );
}

export default Movie;
