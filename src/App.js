import "./App.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

//pages
import Projects from "./components/pages/Projects";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
