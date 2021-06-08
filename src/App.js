import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contactbar from "./components/Contactbar"
import Navbar from "./components/Navbar"

//pages
import Projects from "./components/pages/Projects"
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/about" component={About}></Route>
        </div>
        <Contactbar />
    </Router>
  );
}

export default App;
