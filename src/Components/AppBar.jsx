import React from 'react';
import { Search, PlaylistPlay } from '@mui/icons-material';
import { Link,NavLink} from "react-router-dom";
import Suggestion from './Suggestion';

function AppBar(props) {
  return (
    <nav className="app-bar">
      <NavLink to="/">
      <div className="app-bar-website-name">Show Time</div>
      </NavLink>
      <div className="app-bar-search">
        <div className="searchinput">
          <input className='inp' type="text" placeholder="Search..." />
            <button className="app-bar-search-button">
            <Search />
          </button>
        </div>
        <div className="searchField">
          {props.data.map(movie =>{
            console.log(movie);
            return(
              <Suggestion title={movie['title']}/>
            )
            

          })}


        </div>

      </div>
      <div className="app-bar-watchlist">
      <NavLink to="/Watchlist">
        <button className="app-bar-watchlist-button">
          <PlaylistPlay />
        </button>
      </NavLink>
      </div>
    </nav>
  );
}

export default AppBar;
