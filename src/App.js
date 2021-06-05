import './App.css';
import { Link, HashRouter, Route, BrowserRouter } from "react-router-dom";
import Contactbar from "./components/Contactbar"
import Projects from "./components/pages/Projects"
import Navibar from "./components/Navbar"
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navibar>
        </Navibar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/about" component={About}></Route>

        {/*<Header />*/}
        {/*<div className="project-container">
          <Projects />
        </div>*/}
      </div>
      <Contactbar />
    </BrowserRouter>
  );
}

export default App;
