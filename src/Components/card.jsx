import * as React from 'react';

import { NavLink } from 'react-router-dom';
export default function ImgMediaCard(props) {

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={props.data['img']}  alt="Card image" className="card-image" />
      </div>
      <div className="card-description">{props.data['plot']}</div>
      <div className="card-buttons">
        <NavLink to={"/Movie"}  state={{ data: props.data}}>
          <button>Open</button>
        </NavLink>
        <button>Add To Watchlist</button>
      </div>
    </div>
    
  );
}