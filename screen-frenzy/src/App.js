import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./component/homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Moviepage from "./component/moviepage";
import { TvShows } from "./component/tvshows";
import { ErrorPage } from "./component/error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<Moviepage />}></Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
