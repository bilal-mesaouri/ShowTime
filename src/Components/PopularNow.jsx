import React from 'react'
import ImgMediaCard from './card'
import avengers from '../assets/avengers.jpg'

function PopularNow() {
  return (
    <div className="popularnow">
        <ImgMediaCard link='public/avengers.jpg'/>
        <ImgMediaCard link='public/clarcksonsfarm.jpg'/>
        <ImgMediaCard link='public/Drive.jfif'/> 
        <ImgMediaCard link='src/assets/Rush.jfif'/> 


    </div>
  )
}

export default PopularNow