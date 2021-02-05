import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutComponent/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/about" exact component={AboutUs} />
      </div>
    </Router>
  );
}

export default App;
