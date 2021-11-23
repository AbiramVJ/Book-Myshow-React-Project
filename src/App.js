import "./App.css";
import Header from "./components/Header/Header";
import SilderImage from "./components/Silder/SilderImage";
import CardSilider from "./components/CradSilider/CardSilider";
import Primier from "./components/primier/Primier";

import ContentContainer from "./components/ContentContainer/ContentContainer";
import Footer from "./components/Footer/Footer";
import AllMovies from "./components/AllMovies/AllMovies";
import AllMoviesFetch from "./components/AllMovieFetch/AllMovieFetch";
import SingleMovie from "./components/AllMovies/SingleMovie";
import SingleMovieFetch from "./components/SingleMovieFetch/SingleMovieFetch";
import LoginPage from "./components/LoginPage/LoginPage";
import AddMovie from "./components/AddMovie/AddMovie";




import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    
    <div>
      
      <Router>
        <Header />
        <Switch>
          <Route path="/home"><SilderImage /><CardSilider /><ContentContainer /><Primier /></Route>
          <Route exact path="/content"><ContentContainer /></Route>
          <Route exact path="/allmovies"><AddMovie/><AllMoviesFetch/></Route>
           <Route exact path="/allmovies/singlemovie/:movie"><SingleMovieFetch/></Route> 
           <Route exact path="/user-register"><LoginPage/></Route> 
           {/* <Route exact path="/allmovie/add-book"><LoginPage/></Route>  */}
        </Switch>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
