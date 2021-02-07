import "./App.css";
import React from "react";
import Particles from "react-particles-js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/AboutComponent/AboutUs";
import Contactsection from "./components/ContactComponent/ConatctUs";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Particles
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 8,
                    color: "#f9ab00"
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.4,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable_auto: true,
                  distance: 100,
                  color: "#f9ab00",
                  opacity: 1,
                  width: 1,
                  condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false
                  },
                  onclick: {
                    enable: false
                  },
                  resize: true
                }
              },
              retina_detect: true
            }}
          />
            <Navbar />
            <Header />
          <Route path="/" exact>
           
            <AboutUs />
            <section>
              <Contactsection></Contactsection>
            </section>
          </Route>

          <Route path="/about" exact component={AboutUs} />
          {/* <Route path="/contact" exact component={Contactsection} /> */}
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
