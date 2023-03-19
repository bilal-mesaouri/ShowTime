import React from 'react';
import { Search, PlaylistPlay } from '@mui/icons-material';

function AppBar() {
  return (
    <nav className="app-bar">
      <div className="app-bar-website-name">Show Time</div>
      <div className="app-bar-search">
        <input type="text" placeholder="Search..." />
        <button className="app-bar-search-button">
          <Search />
        </button>
      </div>
      <div className="app-bar-watchlist">
        <button className="app-bar-watchlist-button">
          <PlaylistPlay />
        </button>
      </div>
    </nav>
  );
}

export default AppBar;
