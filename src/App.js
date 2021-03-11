import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Navbar from "./Components/Navbar/Navbar";
import LeagueDetails from "./Components/League-info/LeagueDetails";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/league/:leagueID">
            <LeagueDetails />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
