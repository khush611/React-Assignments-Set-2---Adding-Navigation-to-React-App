// import React, {Component, useState} from "react";
// import '../styles/App.css';

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }

// export default App;
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./About";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <a href="/">Home</a>
        <a href="/about">About</a>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
        {/* <Home />
        <About /> */}
      </div>
    );
  }
}

export default App;
