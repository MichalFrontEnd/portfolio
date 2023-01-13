import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    component: "Home",
    navbar: () => <div>Home</div>,
  },
  {
    path: "/projects",
    exact: true,
    component: "Projects",
    navbar: () => <div>Projects</div>,
  },
  {
    path: "/about",
    exact: true,
    component: "About",
    navbar: () => <div>About</div>,
  },
];

export default function Navibar() {
  return (
    <navbar>
      {routes.map((route, i) => (
        <NavLink
          key={i}
          to={route.path}
          exact={route.exact}
          className="navlink"
        >
          {route.component}
        </NavLink>
      ))}
    </navbar>
  );
}
