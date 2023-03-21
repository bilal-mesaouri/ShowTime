import React from 'react'
import ImgMediaCard from './card'
import avengers from '../assets/avengers.jpg'

function PopularNow() {
  return (
    <div className="pop_container">

        <div className="popularnowtitle">
          Popular now 
        </div>
      <div className="popularnow">
          <ImgMediaCard link='public/avengers.jpg'/>
          <ImgMediaCard link='public/clarcksonsfarm.jpg'/>
          <ImgMediaCard link='public/Drive.jfif'/> 
          <ImgMediaCard link='src/assets/Rush.jfif'/> 


      </div>
    </div>
  )
}

export default PopularNow