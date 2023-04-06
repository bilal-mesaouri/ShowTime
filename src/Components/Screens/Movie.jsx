import React from "react";
import PrimarySearchAppBar from "../AppBar";
import Trending from "../Trending";
import PopularNow from "../PopularNow";
function Movie() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Trending parent={"movie"} title={"Movie Informations"}/>
      {/* <PopularNow title={"Similar"} /> */}
    </div>
  );
}

export default Movie;
