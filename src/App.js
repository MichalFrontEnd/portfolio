import './App.css';
import "react-image-gallery/styles/css/image-gallery.css"
import { Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar"

//pages
import Projects from "./components/pages/Projects"
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/about" component={About}></Route>
      </div>
    </Router>
  );
}

export default App;
