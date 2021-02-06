import "./App.css";
import React from "react";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutComponent/AboutUs";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00",
                },
              },
            }}
          />
            <Navbar />
            <Header />
          <Route path="/" exact>
           
            <AboutUs />
          </Route>

          <Route path="/about" exact component={AboutUs} />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
