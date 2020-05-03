import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home, About, Contact } from "./Pages";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="index-div">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
