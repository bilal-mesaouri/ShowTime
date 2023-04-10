import { useState,createContext } from "react";
import "./App.css";
import "./watchlis.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Screens/Home";
import Watchlist from "./Components/Screens/Watchlist";
import Movie from "./Components/Screens/Movie";
import Test from "./Components/Screens/Test";
import Auth from "./Components/Screens/Auth";
import { ProtectedRoute } from "./Network/ProtectedRoute";
// import WatchlistScreen from './Components/Screens/';
export const auth = createContext()
function App() {
  const [isauth, setisauth] = useState(false);
  return (
    <auth.Provider value={{isauth,setisauth}}>
    <div className="main">
      <div className="appbar">
        <BrowserRouter>
          <Routes>
            {/* <Route exact path="/" element={<Home/>} /> */}
            <Route exact path="/" element={<Auth/>} />
            <Route exact path="/Home" element={<ProtectedRoute component={Home}/>} />
            <Route exact path="/Watchlist" element={<ProtectedRoute component={Watchlist}/>} />
            <Route exact path="/Movie" element={<ProtectedRoute component={Movie}/>} />
          </Routes>
        </BrowserRouter>

        <div className="footer"></div>
      </div>
    </div>
    </auth.Provider>
  );
}

export default App;
