import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Contact from "./Contact"
import Projects from "./Projects"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1>Michal Front</h1>
          <h3>Full-Stack Web Developer</h3>
          <Contact />
        </header>
        <div className="project-container">
          <Projects />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
