import logo from './logo.svg';
import './App.css';
import { Link, HashRouter, Route } from "react-router-dom";
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Header from "./components/Header"
import Navibar from "./components/Navbar"

function App() {
  return (
    <HashRouter>
      <div className="App">
      <Navibar/>
        <Header />
        <div className="project-container">
          <Projects />
        </div>
      </div>
      <Contact />
    </HashRouter>
  );
}

export default App;
