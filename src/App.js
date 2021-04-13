import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Contact from "./Contact"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Michal Front</h1>
          <h3>Full-Stack Web Developer</h3>
          <Contact />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
