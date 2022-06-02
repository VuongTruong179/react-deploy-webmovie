import NavBar from "./conponent/Home/NavBar.js/navbar";
import Home from "./conponent/Home/home";
import React from "react";
import Movies from "./conponent/Movies/movies";
import TvShow from "./conponent/TvShows/tvshow";
import Login from "./conponent/Login/login";
import CreateAccout from "./conponent/CreateAccout/createAccout";
import Detail from "./conponent/Detail/detail";
import CastDetail from "./conponent/Cast/detailCast";
import DetailMovieOfCategory from "./conponent/Home/Content/content_bottom/detailCategory";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/movies/:name">
              <Movies />
            </Route>

            <Route path="/tv-show/:name">
              <TvShow />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/createAccout">
              <CreateAccout />
            </Route>

            <Route path="/detailMovie/:id">
              <Detail />
            </Route>

            <Route path="/detailCast/:id">
              <CastDetail />
            </Route>

            <Route path="/category/:id">
              <DetailMovieOfCategory />
            </Route>

          </Switch>

        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
