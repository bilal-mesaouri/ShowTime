import React from "react";
import PrimarySearchAppBar from "../AppBar";
import Trending from "../Trending";
import PopularNow from "../PopularNow";
import { useEffect,useState } from "react";
import { findAll } from "../../Network/Lib/Movies";
import { useLocation } from "react-router-dom";

import MovieReview from "../MovieReview";
import Actor from "../Actor";




function Movie() {
  
  let location = useLocation();
  const arr = [];
  location.state && arr.push(location.state.data);
  const [Datos, setDatos] = useState(arr);
  // console.log(location.state)
  console.log(Datos)

  let actors = Datos[0].actors
  let reviews = Datos[0].reviews

  const actorList = [];
  const reviewList = [];

  actors.forEach((item) => {
    actorList.push(
      <Actor moviename={item.moviename} firstname={item.actor._id.$oid.firstname} lastname={item.actor._id.$oid.lastname}  dob={item.actor._id.$oid.dob.split('T')[0]} />
    );
  });

  reviews.forEach((item) => {
    reviewList.push(
      <MovieReview date = {item.review._id.$oid.date.split('T')[0]} title={item.review._id.$oid.review} author={item.review._id.$oid.author} rating={item.review._id.$oid.rating} review={item.review._id.$oid.comment}/>

    );
  });
  
  return (
    Datos?<div>
      <PrimarySearchAppBar parent="movie"/>
      <Trending data={Datos} parent={"movie"} title={"Movie Informations"}/>
      {/* <PopularNow title={"Similar"} /> */}
      <div className="popularnowtitle">Actors</div>

      <div style={{ display: 'flex', justifyContent: 'center'}} >
      <div className="grid-container">

{/* baki link d image f actor */}



    {actorList}

   {/* <Actor moviename={actors[0].moviename} firstname="yassir" lastname="amami" dob="25/07/2002"/>
   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>

   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/>

   <Actor moviename="hmed" firstname="yassir" lastname="amami" dob="25/07/2002"/> */}




      </div>


      
      </div>

      
      <div className="popularnowtitle">Reviews</div>
      <div style={{textAlign:'left',display: 'flex', flexDirection:'column',justifyContent: 'center',marginLeft:160,padding:20}}>


        {reviewList}


      {/* <MovieReview title="Great Job" author="Yassir63" rating="9" review="great!"/>
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
      ezfzefgjkzfkzhekjfhkzejhfjkzhejkfhzejkfhjkzehfkjzeh!"/> */}
      {/* <div className="popularnowtitle">----------------------------------------------------------------------------</div> */}
      </div>

    </div>:<div>Loading ...</div>
  );
}

export default Movie;
