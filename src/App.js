import './App.css';
import axios from 'axios';

//Routes
import {Routes, Route} from "react-router-dom";

// React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';
import PlayPage from './Pages/PlayPage';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "0b95aba47d9cb5b93650cdd0b33ce4a1";

function App() {
  return (
    <Routes>
      <Route path = "/" element = {<HomePage/>} />
      <Route path = "/movie/:id" element = {<MoviePage/>} />
      <Route path = "/plays" element = {<PlayPage/>} />
    </Routes>
  );
}

export default App;