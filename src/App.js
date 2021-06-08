import './App.css';
import { Link, HashRouter, Route, Switch, NavLink, BrowserRouter as Router } from "react-router-dom";
import Contactbar from "./components/Contactbar"

//pages
import Projects from "./components/pages/Projects"
import Home from './components/pages/Home';
import About from './components/pages/About';

const routes = [
  {
    path: "/",
    exact: true,
    component: 'Home',
    navbar: () => <div>Home</div>
  },
  {
    path: "/projects",
    exact: true,
    component: 'Projects',
    navbar: () => <div>Projects</div>
  },
  {
    path: "/about",
    exact: true,
    component: 'About',
    navbar: () => <div>About</div>
  },
]

function App() {
  return (
    <Router>
      <div className="App">
        <navbar>
          {routes.map((route, i) => (
            <NavLink
              key={i}
              to={route.path}
              exact={route.exact}
              className='navlink'
            >{route.component}</NavLink>
          ))}
        </navbar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/about" component={About}></Route>

        </div>
        <Contactbar />
    </Router>
  );
}

export default App;
