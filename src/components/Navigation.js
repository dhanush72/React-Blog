import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <span>React Blog</span>
      <ul>
        {navLinks.map((link, index) => {
          const { title, path } = link;
          return (
            <li key={index}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;