import React from 'react'
import avengers from '../assets/avengers.jpg'
import './Trending.css'
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Trending() {
  return (
    <div className="trcontainer">
      <div className="trcon">
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
          <div className="info">
            <span className="trbox"><span className='trtitle'>Release date :</span> April 26, 2019</span>
            <span className="trbox"><span className='trtitle'>Rating :</span>Rating: 8.4/10</span>
            <span className="trbox"><span className='trtitle'>Runtime :</span> 3h 1min</span>
          </div>
        </div>
      </div>
      <div className="controlpanel">
{/*         <div className="leftarrow">
        </div>
        <div className="dots">

        </div>
        <div className="rightarrow">

        </div> */}
      </div>
    </div>
  )
}

export default Trending
