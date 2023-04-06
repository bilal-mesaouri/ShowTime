import { useState } from "react";
import "./App.css";
import "./watchlis.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Watchlist from "./Components/Screens/Watchlist";
import Movie from "./Components/Screens/Movie";
import Test from "./Components/Screens/Test";
// import WatchlistScreen from './Components/Screens/';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <div className="appbar">
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Watchlist" element={<Watchlist/>} />
            <Route exact path="/Movie" element={<Movie/>} />
          </Routes>
        </BrowserRouter>

        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;
