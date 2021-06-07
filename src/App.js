import './App.css';
import { Link, HashRouter, Route, BrowserRouter } from "react-router-dom";
import Contactbar from "./components/Contactbar"
import Projects from "./components/pages/Projects"
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Route exact path="/" component={Home}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/about" component={About}></Route>


      </div>
      <Contactbar />
    </BrowserRouter>
  );
}

export default App;
