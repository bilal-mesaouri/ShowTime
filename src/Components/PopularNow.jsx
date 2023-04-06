import React from 'react'
import ImgMediaCard from './card'
import avengers from '../assets/avengers.jpg'

function PopularNow(props) {
  React.useEffect(() => {
    props.data&&console.log(props.data);

  }, [])
  
  return (
    <div className="pop_container">
        {props.title!=""?<div className="popularnowtitle">
          {props.title}
        </div>:null}
      <div className="popularnow">
          <ImgMediaCard data={props.data[0]} />
          <ImgMediaCard data={props.data[1]} />
          <ImgMediaCard data={props.data[2]} /> 
          <ImgMediaCard data={props.data[3]} /> 


      </div>
    </div>
  )
}

export default PopularNow