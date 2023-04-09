import React from "react";
import { useState } from "react";
import { Search, PlaylistPlay } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Suggestion from "./Suggestion";

function AppBar(props) {
  const [Datos, setDatos] = useState(props.data);

  const [value, setValue] = useState("");

  const onChangeInp = (event) => {
    setValue(event.target.value);
  };
  const onSearch = () => {
    console.log(value);
  };
  return (
    <nav className="app-bar">
      <NavLink to="/">
        <div className="app-bar-website-name">Show Time</div>
      </NavLink>

      {props.parent != "movie" ? (
        <div className="app-bar-search">
          <div className="searchinput">
            <input
              className="inp"
              type="text"
              value={value}
              onChange={onChangeInp}
              placeholder="Search..."
            />
            <button className="app-bar-search-button" onClick={onSearch}>
              <Search />
            </button>
          </div>
          <div className="searchField">
            {Datos.filter((item) => {
              const searchTerm = value.toLowerCase();
              const tt = item["title"].toLowerCase();
              return searchTerm && tt.startsWith(searchTerm);
            }).map((movie) => {
              return (
                <NavLink to={"/Movie"} state={{ data: movie }}>
                  <Suggestion title={movie["title"]} />
                </NavLink>
              );
            })}
          </div>
        </div>
      ) : null}
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
