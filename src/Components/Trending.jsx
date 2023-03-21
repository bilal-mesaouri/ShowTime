import React, { useState } from 'react'
import avengers from '../assets/avengers.jpg'
import './Trending.css'
import { AiOutlineRightCircle,AiOutlineLeftCircle } from 'react-icons/ai';


function Trending() {
  const [btn,setBtn] = useState(0);
  return (
    <div className="trcontainer">
      <div className="popularnowtitle">
        What to Watch ?
      </div>
      <div className="trcon">
      <div className="change_btn">
      <AiOutlineLeftCircle className='icons' onClick={()=>{setBtn(2)}}/>
          </div>
        <div className="trthumbnail">
          <img src={avengers} alt="avengers" className="thumbnail-image" />
        </div>
        <div className="trdescription">
          <h3 className="title">Avengers: Endgame</h3>
          <span className="trbox">
          <div className="trdesbox" >
          Description :
          </div>
            After the devastating events of Avengers: Infinity War (2018),
            the universe is in ruins. With the help of remaining allies, the
            Avengers assemble once more in order to reverse Thanos' actions
            and restore balance to the universe.
          </span>
          
            <span className="trbox"><span className='trtitle'>Release date :</span> April 26, 2019</span>
            <span className="trbox"><span className='trtitle'>Rating :</span>Rating: 8.4/10</span>
            <span className="trbox"><span className='trtitle'>Runtime :</span> 3h 1min</span>
          
        </div>
          <div className="change_btn">
          <AiOutlineRightCircle className='icons' onClick={()=>{console.log("asd");setBtn(1)}}/>
          </div>
      </div>
      <div className="controlpanel">

      </div>
    </div>
  )
}

export default Trending
