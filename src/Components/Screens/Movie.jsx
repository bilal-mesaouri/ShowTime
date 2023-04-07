import React from "react";
import PrimarySearchAppBar from "../AppBar";
import Trending from "../Trending";
import PopularNow from "../PopularNow";
import MovieReview from "../MovieReview";
import Actor from "../Actor";




function Movie() {
  return (
    <div style={{}}>
      <PrimarySearchAppBar />
      <Trending parent={"movie"} title={"Movie Informations"}/>
      
      {/* <PopularNow title={"Similar"} /> */}
      <div className="popularnowtitle">Actors</div>

      <div style={{ display: 'flex', justifyContent: 'center'}} >
      <div className="grid-container">

{/* baki link d image f actor */}


   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>
   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>

   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>

   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>




      </div>


      
      </div>

      
      <div className="popularnowtitle">Reviews</div>
      <div style={{textAlign:'left',display: 'flex', flexDirection:'column',justifyContent: 'center',marginLeft:160,padding:20}}>

      <MovieReview title="Great Job" author="Yassir63" rating="9" review="great!"/>
      <MovieReview title="Great Job" author="Yassir63" rating="9" review="fezfzfzefzefzefzeklfklzejlfze
      ezfezfkzelfjlkzejfkljzeklfjklzejflkjzlkfjklzef
      efzhfhzeklfhkzjhefljlzejfkljzkefjlzkejflkzjelfk
      ezfzefgjkzfkzhekjfhkzejhfjkzhejkfhzejkfhjkzehfkjzehfjklzejflkjzlkfjklzef
      efzhfhzeklfhkzjhefljlzejfkljzkefjlzkejflkzjelfk
      ezfzefgjkzfkzhekjfhkzejhfjkzhejkfhzejkfhjkzehfkjzeh!!"/>

      <MovieReview title="Great Job" author="Yassir63" rating="9" review="fezfzfzefzefzefzeklfklzejlfze
      ezfezfkzelfjlkzejfkljzeklfjklzejflkjzlkfjklzef
      efzhfhzeklfhkzjhefljlzejfkljzkefjlzkejflkzjelfk
      ezfzefgjkzfkzhekjfhkzejhfjkzhejkfhzejkfhjkzehfkjzehfjklzejflkjzlkfjklzef
      efzhfhzeklfhkzjhefljlzejfkljzkefjlzkejflkzjelfk
      ezfzefgjkzfkzhekjfhkzejhfjkzhejkfhzejkfhjkzehfkjzeh!"/>
      {/* <div className="popularnowtitle">----------------------------------------------------------------------------</div> */}
      </div>

    </div>
  );
}

export default Movie;
