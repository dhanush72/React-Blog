import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

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

const Navigation = ({ firstName, lastName }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <nav className="site-navigation">
      <span className="menu-title">React Blog</span>
      <div className={`menu-content-container ${menuActive && "active"}`}>
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
        <div className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={32}
          />
          <span className="menu-avatar-name">{`${firstName} ${lastName}`}</span>
        </div>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
};

export default Navigation;
